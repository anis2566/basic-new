import {
    SidebarInset,
    SidebarProvider,
} from "@workspace/ui/components/sidebar"

import { AppSidebar } from "./app-sidebar"
import { Suspense } from "react"

interface Props {
    children: React.ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="overflow-hidden min-w-0">
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </Suspense>
    )
}