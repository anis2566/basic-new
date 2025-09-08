import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getDuePayments } from "@/modules/salary-payment/params/get-due-payments";
import { DueSalaryPaymentsView } from "@/modules/salary-payment/ui/views/due-payment-view";

export const metadata: Metadata = {
    title: "Income | Due Salary",
    description: "List of due salary incomes",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const DueSalaryIncomes = async ({ searchParams }: Props) => {
    const params = await getDuePayments(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.salaryPayment.getDueMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <DueSalaryPaymentsView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default DueSalaryIncomes