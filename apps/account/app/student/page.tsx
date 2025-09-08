import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getStudents } from "@/modules/student/params/get-rooms";
import { StudentsView } from "@/modules/student/ui/views/students-view";

export const metadata: Metadata = {
    title: "Students",
    description: "List of students",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Students = async ({ searchParams }: Props) => {
    const params = await getStudents(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.student.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <StudentsView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Students