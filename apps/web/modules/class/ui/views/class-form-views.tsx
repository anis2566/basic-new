"use client";

import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { ClassSchema, ClassSchemaType } from "@workspace/utils/schema"
import { CLASSES, LEVELS } from "@workspace/utils/constant"

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { FormInput } from "@workspace/ui/shared/form-input";
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { FormSelect } from "@workspace/ui/shared/form-select";
import { Form } from "@workspace/ui/components/form"

import { useTRPC } from "@/trpc/client";

export const ClassFormViews = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()

    const { mutate: createClass, isPending } = useMutation(
        trpc.class.createOne.mutationOptions({
            onError: (err) => {
                setErrorText(err.message);
                setButtonState('error');
                toast.error(err.message);
            },
            onSuccess: (data) => {
                if (!data.success) {
                    setButtonState('error');
                    setErrorText(data.message);
                    toast.error(data.message);
                    return;
                }
                setButtonState('success');
                toast.success(data.message);
            },
        })
    );


    const form = useForm<ClassSchemaType>({
        resolver: zodResolver(ClassSchema),
        defaultValues: {
            name: "",
            level: "",
            position: "",
        }
    })

    const onSubmit = (data: ClassSchemaType) => {
        setButtonState('loading');
        createClass(data)
    }

    return (
        <FormCardWrapper
            title="Set Up Your Class"
            description="Enter the class information to get started quickly."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormSelect
                        form={form}
                        name="name"
                        label="Class"
                        placeholder="select class"
                        disabled={isPending}
                        options={Object.values(CLASSES).map((item) => (item))}
                    />
                    <FormSelect
                        form={form}
                        name="level"
                        label="Level"
                        disabled={isPending}
                        placeholder="select level"
                        options={Object.values(LEVELS).map((item) => (item))}
                    />
                    <FormInput
                        form={form}
                        name="position"
                        label="Position"
                        type="text"
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