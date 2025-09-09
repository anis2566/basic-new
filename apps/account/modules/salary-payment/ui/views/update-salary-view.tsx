
"use client";

import { useTRPC } from "@/trpc/client"
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { Edit, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import z from "zod";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form"
import { FormSelect } from "@workspace/ui/shared/form-select";
import { PAYMENT_METHOD, STATUS } from "@workspace/utils/constant";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Collapsible, CollapsibleContent } from "@workspace/ui/components/collapsible";
import { Textarea } from "@workspace/ui/components/textarea"
import { Badge } from "@workspace/ui/components/badge";

import { useGetPayments } from "../../hooks/use-get-payments";
import { useGetDuePayments } from "../../hooks/use-get-due-payments";
import { useGetOverview } from "../../hooks/use-get-overview";

const formSchema = z.object({
    method: z.string().min(1, { message: "required" }),
    amount: z.string().min(1, { message: "required" }),
    note: z.string().optional()
})

interface UpdateSalaryFormViewProps {
    id: string
}

export const UpdateSalaryView = ({ id }: UpdateSalaryFormViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetPayments()
    const [dueFilters] = useGetDuePayments()
    const [getOverviewFilters] = useGetOverview()

    const { data } = useSuspenseQuery(trpc.salaryPayment.getOne.queryOptions({ id }))

    const onToggleEdit = () => {
        if (data?.status !== STATUS.Absent) return

        setIsEditable(!isEditable);
    }

    const { mutate: updatePayment, isPending } = useMutation(
        trpc.salaryPayment.updateOne.mutationOptions({
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
                setButtonState('success');
                toast.success(data.message);
                await Promise.all([
                    queryClient.invalidateQueries(trpc.salaryPayment.getMany.queryOptions({ ...filters })),
                    queryClient.invalidateQueries(trpc.salaryPayment.getDueMany.queryOptions({ ...dueFilters })),
                    queryClient.invalidateQueries(trpc.salaryPayment.getOverview.queryOptions({ ...getOverviewFilters })),
                ]);
                router.push("/income/salary")
            },
        })
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            method: PAYMENT_METHOD.Cash,
            amount: data?.amount?.toString() || "",
            note: ""
        }
    })

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        setButtonState('loading');
        if (data?.status === STATUS.Absent && data?.amount !== parseInt(value.amount) && !value.note) {
            if (parseInt(value.amount) > data?.amount) {
                setButtonState('error');
                setErrorText("Invalid amount.");
                toast.error("Invalid amount.");
                return
            }
            setButtonState('error');
            setErrorText("Please add note.");
            toast.error("Please add note.");
            return
        }
        updatePayment({
            ...value,
            id
        })
    }

    return (
        <FormCardWrapper
            title={data?.student?.name || ""}
            description={`${data?.student?.studentId} - ${data?.student?.className}`}
        >
            <div className="flex-1 flex items-center gap-x-3 bg-background/60 dark:bg-background/60 px-4 py-2 mb-4">
                <h1 className="text-lg font-semibold">Status:</h1>
                <Badge variant={data?.status === STATUS.Absent ? "destructive" : "default"}>{data?.status}</Badge>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormSelect
                        form={form}
                        name="method"
                        label="Method"
                        placeholder="Select method"
                        options={Object.values(PAYMENT_METHOD).map((item) => ({ label: item, value: item }))}
                        disabled={isPending}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            value={field.value}
                                            type="number"
                                            disabled={data?.status !== STATUS.Absent || !isEditable || isPending}
                                            className={cn(
                                                "w-full bg-background dark:bg-background rounded-xs shadow-none",
                                                !isEditable && "bg-background/40 dark:bg-background/40"
                                            )}
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0"
                                            type="button"
                                            onClick={onToggleEdit}
                                            disabled={isPending || data?.status !== STATUS.Absent}
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Collapsible open={isEditable && data?.status === STATUS.Absent}>
                        <CollapsibleContent>
                            <FormField
                                control={form.control}
                                name="note"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Note</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                value={field.value}
                                                disabled={isPending}
                                                className="w-full bg-background dark:bg-background rounded-xs shadow-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CollapsibleContent>
                    </Collapsible>
                    <LoadingButton
                        type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        loadingText="Confirming..."
                        successText="Confirmed!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        icon={Send}
                    >
                        Confirm
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}