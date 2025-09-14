import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { EditRoomFormView } from "@/modules/room/ui/views/edit-room-form-view";

export const metadata: Metadata = {
    title: "Edit room",
    description: "Form to edit an existing room",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditRoom = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.room.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditRoomFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditRoom;