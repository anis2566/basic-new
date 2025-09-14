import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { DailyReportView } from "@/modules/report/ui/views/daily-report-view";

export const metadata: Metadata = {
    title: "Reports",
    description: "Daily reports",
}

const Reports = async () => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.report.daily.queryOptions());

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <DailyReportView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default Reports