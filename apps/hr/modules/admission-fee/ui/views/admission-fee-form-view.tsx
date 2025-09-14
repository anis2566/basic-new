"use client";

import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { AdmissionFeeSchema, AdmissionFeeSchemaType } from "@workspace/utils/schema"
import { CLASSES } from "@workspace/utils/constant";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"
import { FormSelect } from "@workspace/ui/shared/form-select";
import { FormInput } from "@workspace/ui/shared/form-input";

import { useTRPC } from "@/trpc/client";
import { useGetFees } from "../../hooks/use-get-fees";

export const AdmissionFeeFormView = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetFees()

    const { mutate: createFee, isPending } = useMutation(
        trpc.admissionFee.createOne.mutationOptions({
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
                queryClient.invalidateQueries(trpc.admissionFee.getMany.queryOptions({ ...filters }))
                router.push("/fee/admission")
            },
        })
    );


    const form = useForm<AdmissionFeeSchemaType>({
        resolver: zodResolver(AdmissionFeeSchema),
        defaultValues: {
            className: "",
            amount: ""
        }
    })

    const onSubmit = (data: AdmissionFeeSchemaType) => {
        setButtonState('loading');
        createFee(data)
    }

    return (
        <FormCardWrapper
            title="Set Up Your Fee"
            description="Enter the admission fee information to get started quickly."
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
                        loadingText="Saving..."
                        successText="Saved!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        icon={Save}
                    >
                        Save
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}