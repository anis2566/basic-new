import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getCounters } from "@/modules/counter/params/get-houses";
import { CountersView } from "@/modules/counter/ui/views/counters-view";

export const metadata: Metadata = {
    title: "Counters",
    description: "List of counter",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Counters = async ({ searchParams }: Props) => {
    const params = await getCounters(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.counter.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <CountersView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Counters