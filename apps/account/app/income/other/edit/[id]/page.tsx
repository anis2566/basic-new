import { Metadata } from "next";
import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { EditOtherPaymentFormView } from "@/modules/other-payment/ui/views/edit-other-payment-form-view";

export const metadata: Metadata = {
    title: "Edit Payment",
    description: "Form to edit an existing payment",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditOtherPaymentView = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.otherPayment.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditOtherPaymentFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditOtherPaymentView;