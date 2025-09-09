import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { UpdateSalaryView } from "@/modules/salary-payment/ui/views/update-salary-view";

export const metadata: Metadata = {
    title: "Update Salary",
    description: "Form to update an existing salary payment",
}

interface Props {
    params: Promise<{ id: string }>;
}

const UpdateSalary = async ({ params }: Props) => {
    const { id } = await params;

    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(trpc.salaryPayment.getOne.queryOptions({ id }))

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <UpdateSalaryView id={id} />
            </HydrateClient>
        </ContentLayout>
    )
}

export default UpdateSalary;