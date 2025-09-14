"use client";

import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { CounterSchema, CounterSchemaType } from "@workspace/utils/schema"
import { CLASSES } from "@workspace/utils/constant";

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"
import { FormSelect } from "@workspace/ui/shared/form-select";

import { useTRPC } from "@/trpc/client";
import { useGetCounters } from "../../hooks/use-get-houses";

export const CounterFormView = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetCounters()

    const { mutate: createCounter, isPending } = useMutation(
        trpc.counter.createOne.mutationOptions({
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
                queryClient.invalidateQueries(trpc.counter.getMany.queryOptions({ ...filters }))
                router.push("/counter")
            },
        })
    );


    const form = useForm<CounterSchemaType>({
        resolver: zodResolver(CounterSchema),
        defaultValues: {
            name: "",
            value: "0"
        }
    })

    const onSubmit = (data: CounterSchemaType) => {
        setButtonState('loading');
        createCounter(data)
    }

    return (
        <FormCardWrapper
            title="Set Up Your Counter"
            description="Enter the counter information to get started quickly."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormSelect
                        form={form}
                        name="name"
                        label="Name"
                        placeholder="select counter"
                        options={
                            [
                                ...Object.values(CLASSES).map((item) => ({
                                    label: item,
                                    value: item,
                                })),
                                { label: "Teacher", value: "Teacher" },
                            ]
                        }
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