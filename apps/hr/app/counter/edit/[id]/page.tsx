import { Metadata } from "next";
import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { EditCounterFormView } from "@/modules/counter/ui/views/edit-counter-form-view";

export const metadata: Metadata = {
    title: "Edit Counter",
    description: "Form to edit an existing counter",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditCounter = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.counter.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditCounterFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditCounter;