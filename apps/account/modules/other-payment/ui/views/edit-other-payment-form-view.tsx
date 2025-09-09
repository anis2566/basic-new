"use client";

import { useTRPC } from "@/trpc/client"
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { FormInput } from "@workspace/ui/shared/form-input";
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"
import { OtherPayment, OtherPaymentType } from "@workspace/utils/schema"

import { useGetPayments } from "../../hooks/use-get-payments";

interface EditOtherPaymentFormViewProps {
    id: string
}

export const EditOtherPaymentFormView = ({ id }: EditOtherPaymentFormViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetPayments()

    const { data } = useSuspenseQuery(trpc.otherPayment.getOne.queryOptions(id))

    const { mutate: updatePayment, isPending } = useMutation(
        trpc.otherPayment.updateOne.mutationOptions({
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
                    queryClient.invalidateQueries(trpc.otherPayment.getMany.queryOptions({ ...filters })),
                    queryClient.invalidateQueries(trpc.otherPayment.getOne.queryOptions(id))
                ]);
                router.push("/income/other")
            },
        })
    );

    const form = useForm<OtherPaymentType>({
        resolver: zodResolver(OtherPayment),
        defaultValues: {
            name: data?.name || "",
            amount: data?.amount?.toString() || "",
        }
    })

    const onSubmit = (data: OtherPaymentType) => {
        setButtonState('loading');
        updatePayment({
            ...data,
            id
        })
    }

    return (
        <FormCardWrapper
            title="Update Payment"
            description="Modify the class details and save your changes."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormInput
                        form={form}
                        name="name"
                        label="Name"
                        type="text"
                        disabled={isPending}
                    />
                    <FormInput
                        form={form}
                        name="amount"
                        label="Amount"
                        type="number"
                        disabled={isPending}
                    />
                    <LoadingButton
                        type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        loadingText="Updating..."
                        successText="Updated!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        icon={Send}
                    >
                        Update
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}