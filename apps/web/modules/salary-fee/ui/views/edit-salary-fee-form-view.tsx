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
import { SalaryFeeSchema, SalaryFeeSchemaType } from "@workspace/utils/schema"
import { FormSelect } from "@workspace/ui/shared/form-select";
import { CLASSES, GROUP } from "@workspace/utils/constant";

import { useGetFees } from "../../hooks/use-get-fees";

interface EditFeeFormViewProps {
    id: string
}

export const EditSalaryFeeFormView = ({ id }: EditFeeFormViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetFees()

    const { data } = useSuspenseQuery(trpc.salaryFee.getOne.queryOptions(id))

    const { mutate: updateFee, isPending } = useMutation(
        trpc.salaryFee.updateOne.mutationOptions({
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
                    queryClient.invalidateQueries(trpc.salaryFee.getMany.queryOptions({ ...filters })),
                    queryClient.invalidateQueries(trpc.salaryFee.getOne.queryOptions(id))
                ]);
                router.push("/fee/salary")
            },
        })
    );

    const form = useForm<SalaryFeeSchemaType>({
        resolver: zodResolver(SalaryFeeSchema),
        defaultValues: {
            className: data.className,
            amount: data.amount.toString(),
            group: data.group || undefined
        }
    })

    const onSubmit = (data: SalaryFeeSchemaType) => {
        setButtonState('loading');
        updateFee({
            ...data,
            id
        })
    }

    return (
        <FormCardWrapper
            title="Update Fee"
            description="Modify the class details and save your changes."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormSelect
                        form={form}
                        name="className"
                        label="Class"
                        placeholder="select class"
                        options={Object.values(CLASSES).map((name) => ({ label: name, value: name }))}
                        disabled={isPending}
                    />
                    <FormSelect
                        form={form}
                        name="group"
                        label="Group"
                        placeholder="select group"
                        options={Object.values(GROUP).map((name) => ({ label: name, value: name }))}
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