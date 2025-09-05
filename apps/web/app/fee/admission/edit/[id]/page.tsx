import { Metadata } from "next";
import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { EditAdmissionFeeFormView } from "@/modules/admission-fee/ui/views/edit-admission-fee-form-view";

export const metadata: Metadata = {
    title: "Edit Fee",
    description: "Form to edit an existing fee",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditAdmissionFee = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.admissionFee.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditAdmissionFeeFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditAdmissionFee;