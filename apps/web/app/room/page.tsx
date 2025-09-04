import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getRooms } from "@/modules/room/params/get-rooms";
import { RoomsView } from "@/modules/room/ui/views/rooms-view";

export const metadata: Metadata = {
    title: "Rooms",
    description: "List of rooms",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const Rooms = async ({ searchParams }: Props) => {
    const params = await getRooms(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.room.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <RoomsView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Rooms