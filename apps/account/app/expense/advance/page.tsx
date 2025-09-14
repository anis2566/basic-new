import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getAdvances } from "@/modules/teacher-advance/params/get-advances";
import { TeacherAdvancesView } from "@/modules/teacher-advance/ui/views/teacher-advances-view";

export const metadata: Metadata = {
    title: "Teacher Advance",
    description: "List of teachers advance",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const TeacherAdvances = async ({ searchParams }: Props) => {
    const params = await getAdvances(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.teacherAdvance.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <TeacherAdvancesView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default TeacherAdvances