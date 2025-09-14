"use client";

import { useTRPC } from "@/trpc/client"
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { Save } from "lucide-react";
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
import { CounterSchema, CounterSchemaType } from "@workspace/utils/schema"

import { useGetCounters } from "../../hooks/use-get-houses";

interface EditCounterFormViewProps {
    id: string
}

export const EditCounterFormView = ({ id }: EditCounterFormViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetCounters()

    const { data } = useSuspenseQuery(trpc.counter.getOne.queryOptions(id))

    const { mutate: updateCounter, isPending } = useMutation(
        trpc.counter.updateOne.mutationOptions({
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
                    queryClient.invalidateQueries(trpc.counter.getMany.queryOptions({ ...filters })),
                    queryClient.invalidateQueries(trpc.counter.getOne.queryOptions(id))
                ]);
                router.push("/counter")
            },
        })
    );

    const form = useForm<CounterSchemaType>({
        resolver: zodResolver(CounterSchema),
        defaultValues: {
            name: data.name,
            value: data.value.toString()
        }
    })

    const onSubmit = (data: CounterSchemaType) => {
        setButtonState('loading');
        updateCounter({
            ...data,
            id
        })
    }

    return (
        <FormCardWrapper
            title="Update Counter"
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
                        name="value"
                        label="Value"
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
                        icon={Save}
                    >
                        Update
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}