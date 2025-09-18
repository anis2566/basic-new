import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { DailyReportView } from "@/modules/report/ui/views/daily-report-view";

export const metadata: Metadata = {
    title: "Reports",
    description: "Daily reports",
}

const Reports = async () => {
    return (
        <ContentLayout>
            <DailyReportView />
        </ContentLayout>
    )
}

export default Reports