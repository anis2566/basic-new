import {
    SidebarInset,
    SidebarProvider,
} from "@workspace/ui/components/sidebar"

import { AppSidebar } from "./app-sidebar"

interface Props {
    children: React.ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}