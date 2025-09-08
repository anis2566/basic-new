"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod"
import { useTRPC } from "@/trpc/client";
import Link from "next/link";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"
import { FormSelect } from "@workspace/ui/shared/form-select";
import { FormInput } from "@workspace/ui/shared/form-input";
import { CLASSES } from "@workspace/utils/constant";
import { Collapsible, CollapsibleContent } from "@workspace/ui/components/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";

const formSchema = z.object({
    session: z.string().min(1, { message: "required" }),
    className: z.string().min(1, { message: "required" }),
    studentId: z.string().min(1, { message: "required" }),
})

type Student = {
    name: string;
    imageUrl: string | null;
    studentId: number;
    salaryPayments: {
        id: string;
        status: string;
        paymentStatus: string;
        amount: number;
        month: string;
    }[];
} | null

export const SalaryFormView = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');
    const [student, setStudent] = useState<Student>(null);

    const trpc = useTRPC()

    const { mutate: findStudent, isPending } = useMutation(
        trpc.student.forPaymentSelect.mutationOptions({
            onError: (err) => {
                setErrorText(err.message);
                setButtonState('error');
                toast.error(err.message);
            },
            onSuccess: async (data) => {
                if (!data.success) {
                    setButtonState('error');
                    setErrorText(data.message);
                    toast.error(data.message);
                    return;
                }
                if (data.student) {
                    setStudent(data.student);
                }
                setButtonState('success');
                toast.success(data.message);
            },
        })
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            session: new Date().getFullYear().toString(),
            className: "",
            studentId: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setButtonState('loading');
        findStudent(data)
    }

    return (
        <div>
            <FormCardWrapper
                title="Find Student"
                description="Enter student details to find out"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormSelect
                            form={form}
                            name="session"
                            label="Session"
                            placeholder="select session"
                            options={
                                [
                                    { label: "2024", value: "2024" },
                                    { label: "2025", value: "2025" },
                                    { label: "2026", value: "2026" },
                                ]
                            }
                            disabled={isPending}
                        />
                        <FormSelect
                            form={form}
                            name="className"
                            label="Class"
                            placeholder="select class"
                            options={Object.values(CLASSES).map((className) => ({ label: className, value: className }))}
                            disabled={isPending}
                        />
                        <FormInput
                            form={form}
                            name="studentId"
                            label="Student ID"
                            type="number"
                            disabled={isPending}
                        />
                        <LoadingButton
                            type="submit"
                            onClick={form.handleSubmit(onSubmit)}
                            loadingText="Finding..."
                            successText="Found!"
                            errorText={errorText || "Failed"}
                            state={buttonState}
                            onStateChange={setButtonState}
                            className="w-full md:w-auto"
                            icon={Search}
                        >
                            Find
                        </LoadingButton>
                    </form>
                </Form>
            </FormCardWrapper>

            <Collapsible open={!!student} className="mt-4">
                <CollapsibleContent>
                    <FormCardWrapper
                        title={student?.name || ""}
                        description={student?.studentId.toString() || ""}
                    >
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-background/60">
                                    <TableHead>#SL</TableHead>
                                    <TableHead>Month</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>P. Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    student?.salaryPayments.map((payment, index) => (
                                        <TableRow key={payment.month}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{payment.month}</TableCell>
                                            <TableCell>{payment.amount}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className="rounded-xs">{payment.status}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={payment.paymentStatus === "Unpaid" ? "destructive" : "default"}>{payment.paymentStatus}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Button asChild size="sm" variant="outline">
                                                    <Link href={`/income/salary/${payment.id}`}>Pay now</Link>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </FormCardWrapper>
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}