import { Metadata } from "next"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { DashboardView } from "@/modules/ui/views/dashboard-view"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Account dashboard",
}

const Dashboard = async () => {
  return (
    <ContentLayout>
      <DashboardView />
    </ContentLayout>
  )
}

export default Dashboard
