import Image from "next/image"
import Link from "next/link"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@workspace/ui/components/sidebar"

export const Header = () => {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    asChild
                >
                    <Link href="/dashboard" prefetch>
                        <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="size-6"
                            />
                        </div>
                        <div className="grid flex-1 text-left leading-tight">
                            <span className="truncate text-md font-bold">Shikhonary</span>
                            <span className="truncate text-xs">Admin</span>
                        </div>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}