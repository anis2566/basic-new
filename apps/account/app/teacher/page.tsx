import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getTeachers } from "@/modules/teacher/params/get-teachers";
import { TeachersView } from "@/modules/teacher/ui/views/teachers-view";

export const metadata: Metadata = {
    title: "Teachers",
    description: "List of teachers",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Teachers = async ({ searchParams }: Props) => {
    const params = await getTeachers(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.teacher.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <TeachersView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Teachers