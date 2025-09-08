import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"

import { SidebarBreadcrumb } from "./sidebar-breadcrumb"

interface Props {
    children: React.ReactNode
}

export const ContentLayout = ({ children }: Props) => {
    return (
        <div className="flex-1 flex flex-col min-w-0">
            <div className="flex items-center justify-between border-b p-2 bg-sidebar flex-shrink-0">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    <SidebarBreadcrumb />
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
            <div className="flex-1 px-2 py-4 overflow-hidden min-w-0">
                {children}
            </div>
        </div>
    )
}