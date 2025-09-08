import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { Suspense } from "react"

const Dashboard = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<div>Loading...</div>}>
        Dashboard
      </Suspense>
    </ContentLayout>
  )
}

export default Dashboard
