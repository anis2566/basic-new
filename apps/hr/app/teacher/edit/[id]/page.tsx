import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { EditTeacherFormView } from "@/modules/teacher/ui/views/edit-teacher-form-view";

export const metadata: Metadata = {
    title: "Edit Teacher",
    description: "Form to edit an existing teacher",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditTeacher = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.teacher.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditTeacherFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditTeacher;