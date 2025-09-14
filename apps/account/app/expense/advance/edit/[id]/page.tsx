import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { EditTeacherAdvanceFormView } from "@/modules/teacher-advance/ui/views/edit-advance-form-view";

export const metadata: Metadata = {
    title: "Edit Advance",
    description: "Form to edit an existing advance",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditAdvance = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.teacherAdvance.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditTeacherAdvanceFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditAdvance;