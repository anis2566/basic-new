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
import { FormSelect } from "@workspace/ui/shared/form-select";
import { Form } from "@workspace/ui/components/form"

import { ClassSchema, ClassSchemaType } from "@workspace/utils/schema"
import { CLASSES, LEVELS } from "@workspace/utils/constant"
import { useGetClasses } from "../../hooks/use-get-classes";


interface EditClassFormViewProps {
    id: string
}

export const EditClassFormView = ({ id }: EditClassFormViewProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const [filters] = useGetClasses()

    const { data } = useSuspenseQuery(trpc.class.getOne.queryOptions(id))

    const { mutate: updateClass, isPending } = useMutation(
        trpc.class.updateOne.mutationOptions({
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
                    queryClient.invalidateQueries(trpc.class.getMany.queryOptions({ ...filters })),
                    queryClient.invalidateQueries(trpc.class.getOne.queryOptions(id))
                ]);
                router.push("/class")
            },
        })
    );

    const form = useForm<ClassSchemaType>({
        resolver: zodResolver(ClassSchema),
        defaultValues: {
            name: data.name,
            level: data.level,
            position: data.position.toString(),
        }
    })

    const onSubmit = (data: ClassSchemaType) => {
        setButtonState('loading');
        updateClass({
            ...data,
            id
        })
    }

    return (
        <FormCardWrapper
            title="Update Class"
            description="Modify the class details and save your changes."
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