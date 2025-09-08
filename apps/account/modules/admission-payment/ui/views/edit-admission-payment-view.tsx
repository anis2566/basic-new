"use client";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import z from "zod";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"
import { FormSelect } from "@workspace/ui/shared/form-select";
import { PAYMENT_METHOD, PAYMENT_STATUS, STATUS } from "@workspace/utils/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

import { useGetPayments } from "../../hooks/use-get-payments";

const formSchema = z.object({
    method: z.string().min(1, { message: "required" }),
    status: z.string().min(1, { message: "required" }),
    paymentStatus: z.string().min(1, { message: "required" }),
})

interface EditAdmissionPaymentViewProps {
    id: string
}

export const EditAdmissionPaymentView = ({ id }:
    EditAdmissionPaymentViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetPayments()

    const { data: payment } = useSuspenseQuery(trpc.admissionPayment.getOne.queryOptions(id))

    useEffect(() => {
        if (!payment?.data) {
            router.push("/income/admission")
        }
    }, [payment?.data])

    if (!payment?.data) {
        return null
    }


    const { mutate: updatePayment, isPending } = useMutation(
        trpc.admissionPayment.changeStatus.mutationOptions({
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
                queryClient.invalidateQueries(trpc.admissionPayment.getMany.queryOptions({ ...filters }))
                router.push("/income/admission")
            },
        })
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            method: "",
            status: "",
            paymentStatus: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        updatePayment({ id, ...data })
    }

    return (
        <FormCardWrapper
            title="Update Fee"
            description="Customize your admission fee"
        >
            <div className="flex-1 bg-sidebar mb-6 p-3 rounded-md space-y-4">
                <div className="flex items-center gap-x-3">
                    <Avatar>
                        <AvatarImage src={payment?.data?.student?.imageUrl || ""} />
                        <AvatarFallback>{payment?.data?.student?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold text-lg">{payment?.data?.student?.name}</h4>
                        <p className="text-sm text-muted-foreground">{payment?.data?.student?.className}</p>
                    </div>
                </div>
                <p className="font-semibold bg-primary py-1 px-3 rounded-md max-w-fit text-white">৳{payment?.data?.amount}</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormSelect
                        form={form}
                        name="method"
                        label="Method"
                        placeholder="select method"
                        options={Object.values(PAYMENT_METHOD).map(status => ({ label: status, value: status }))}
                        disabled={isPending}
                    />
                    <FormSelect
                        form={form}
                        name="status"
                        label="Status"
                        placeholder="select status"
                        options={Object.values(STATUS).map(status => ({ label: status, value: status }))}
                        disabled={isPending}
                    />
                    <FormSelect
                        form={form}
                        name="paymentStatus"
                        label="P. Status"
                        placeholder="select status"
                        options={Object.values(PAYMENT_STATUS).slice(1).map(status => ({ label: status, value: status }))}
                        disabled={isPending}
                    />
                    <LoadingButton
                        type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        loadingText="Saving..."
                        successText="Saved!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        icon={Send}
                    >
                        Save
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}