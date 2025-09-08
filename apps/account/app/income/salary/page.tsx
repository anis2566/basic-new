import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getPayments } from "@/modules/salary-payment/params/get-payments";
import { SalaryPaymentsView } from "@/modules/salary-payment/ui/views/salary-payments-view";

export const metadata: Metadata = {
    title: "Income | Salary",
    description: "List of salary incomes",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const SalaryIncomes = async ({ searchParams }: Props) => {
    const params = await getPayments(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.salaryPayment.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <SalaryPaymentsView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default SalaryIncomes