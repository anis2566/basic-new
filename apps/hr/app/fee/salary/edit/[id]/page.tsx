import { Metadata } from "next";
import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { EditSalaryFeeFormView } from "@/modules/salary-fee/ui/views/edit-salary-fee-form-view";

export const metadata: Metadata = {
    title: "Edit Fee",
    description: "Form to edit an existing fee",
}

interface Props {
    params: Promise<{ id: string }>;
}

const EditSalaryFee = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.salaryFee.getOne.queryOptions(id))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <EditSalaryFeeFormView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default EditSalaryFee;