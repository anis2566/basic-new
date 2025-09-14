"use client"

import { LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    SidebarMenuButton,
} from "@workspace/ui/components/sidebar"

export function NavDashboard() {
    const pathname = usePathname()

    return (
        <SidebarMenuButton
            asChild
            isActive={pathname === "/"}
            tooltip="Dashboard"
            className="w-full max-w-[92%] mx-auto py-4"
        >
            <Link href={"/"} prefetch className="flex items-center gap-2 h-16">
                <LayoutDashboard />
                <span>Dashboard</span>
            </Link>
        </SidebarMenuButton>
    )
}
