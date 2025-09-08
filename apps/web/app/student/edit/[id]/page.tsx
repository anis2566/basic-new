import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { EditStudentFormView } from "@/modules/student/ui/views/edit-student-form-view";

export const metadata: Metadata = {
    title: "Edit Student",
    description: "Form to edit an existing student",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditStudent = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.student.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditStudentFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditStudent;