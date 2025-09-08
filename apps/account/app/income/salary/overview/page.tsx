import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getOverview } from "@/modules/salary-payment/params/get-overview";
import { SalaryOverviewView } from "@/modules/salary-payment/ui/views/salary-overview-view";

export const metadata: Metadata = {
    title: "Income | Salary Overview",
    description: "List of due salary overview",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const SalaryOverview = async ({ searchParams }: Props) => {
    const params = await getOverview(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.salaryPayment.getOverview.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <SalaryOverviewView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default SalaryOverview