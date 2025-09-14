import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getHouses } from "@/modules/house/params/get-houses";
import { HousesView } from "@/modules/house/ui/views/houses-view";

export const metadata: Metadata = {
    title: "Houses",
    description: "List of houses",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Houses = async ({ searchParams }: Props) => {
    const params = await getHouses(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.house.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <HousesView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Houses