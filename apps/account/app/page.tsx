import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { DashboardView } from "@/modules/ui/views/dashboard-view"

const Dashboard = async () => {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(trpc.report.accoundDashboard.queryOptions())

  return (
    <ContentLayout>
      <HydrateClient queryClient={queryClient}>
        <DashboardView />
      </HydrateClient>
    </ContentLayout>
  )
}

export default Dashboard
