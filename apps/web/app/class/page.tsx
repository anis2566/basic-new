import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getClasses } from "@/modules/class/params/get-classes";
import { ClassesView } from "@/modules/class/ui/views/classes-view";

export const metadata: Metadata = {
    title: "Clases",
    description: "Lista de clases",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Clases = async ({ searchParams }: Props) => {
    const params = await getClasses(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.class.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <ClassesView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Clases
