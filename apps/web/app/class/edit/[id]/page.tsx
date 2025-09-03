import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { EditClassFormView } from "@/modules/class/ui/views/edit-class-form-view";

import { getQueryClient, trpc } from "@/trpc/server";

export const metadata: Metadata = {
    title: "Edit Class",
    description: "Form to edit an existing class",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditClass = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.class.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <EditClassFormView id={id} />
        </ContentLayout>
    )
}

export default EditClass;