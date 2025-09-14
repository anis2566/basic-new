"use client";

import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { HouseSchema, HouseSchemaType } from "@workspace/utils/schema"

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { FormInput } from "@workspace/ui/shared/form-input";
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form } from "@workspace/ui/components/form"

import { useTRPC } from "@/trpc/client";
import { useGetHouses } from "../../hooks/use-get-houses";

export const HouseFormView = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetHouses()

    const { mutate: createHouse, isPending } = useMutation(
        trpc.house.createOne.mutationOptions({
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
                queryClient.invalidateQueries(trpc.house.getMany.queryOptions({ ...filters }))
                router.push("/house")
            },
        })
    );


    const form = useForm<HouseSchemaType>({
        resolver: zodResolver(HouseSchema),
        defaultValues: {
            name: "",
            roomCount: ""
        }
    })

    const onSubmit = (data: HouseSchemaType) => {
        setButtonState('loading');
        createHouse(data)
    }

    return (
        <FormCardWrapper
            title="Set Up Your House"
            description="Enter the house information to get started quickly."
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
                        name="roomCount"
                        label="No of Rooms"
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