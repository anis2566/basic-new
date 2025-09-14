import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { EditHouseFormView } from "@/modules/house/ui/views/edit-house-view";

export const metadata: Metadata = {
    title: "Edit House",
    description: "Form to edit an existing house",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditHouse = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.house.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditHouseFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditHouse;