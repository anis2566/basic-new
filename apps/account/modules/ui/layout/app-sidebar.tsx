"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Calendar,
    Command,
    DollarSign,
    Frame,
    GalleryVerticalEnd,
    HandCoins,
    History,
    House,
    List,
    LogIn,
    LogOut,
    Map,
    Package,
    PieChart,
    PlusCircle,
    School,
    Settings2,
    ShieldEllipsis,
    SquareChartGantt,
    SquareTerminal,
    Users,
    Warehouse,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@workspace/ui/components/sidebar"

import { Header } from "./header"
import { NavIncome } from "./nav-income"
import { NavStudent } from "./nav-student"
import { NavFees } from "./nav-fees"
import { NavExpense } from "./nav-expense"

// This is sample data.
const data = {
    student: [
        {
            title: "Student",
            url: "/student",
            icon: Users,
            items: [],
        }
    ],
    income: [
        {
            title: "Salary",
            url: "",
            icon: Calendar,
            items: [
                {
                    title: "New",
                    url: "/income/salary/new",
                    icon: PlusCircle
                },
                {
                    title: "History",
                    url: "/income/salary",
                    icon: History
                },
                {
                    title: "Due List",
                    url: "/income/salary/due",
                    icon: HandCoins
                },
                {
                    title: "Overview",
                    url: "/income/salary/overview",
                    icon: SquareChartGantt
                },
            ],
        },
        {
            title: "Admission",
            url: "/income/admission",
            icon: LogIn,
            items: [],
        },
        {
            title: "Others",
            url: "",
            icon: Package,
            items: [
                {
                    title: "New",
                    url: "/income/other/new",
                    icon: PlusCircle
                },
                {
                    title: "History",
                    url: "/income/other",
                    icon: History
                }
            ],
        },
    ],
    expense: [
        {
            title: "House Rent",
            url: "",
            icon: Warehouse,
            items: [
                {
                    title: "New",
                    url: "/expense/house/new",
                    icon: PlusCircle
                },
                {
                    title: "History",
                    url: "/expense/house",
                    icon: History
                }
            ],
        },
        {
            title: "Utility",
            url: "/expense/utility",
            icon: Package,
            items: [],
        }
    ],
    fees: [
        {
            title: "Admission",
            url: "/fee/admission",
            icon: LogIn,
            items: [],
        },
        {
            title: "Salary",
            url: "/fee/salary",
            icon: Calendar,
            items: [],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <Header />
            </SidebarHeader>
            <SidebarContent>
                <NavStudent items={data.student} />
                <NavIncome items={data.income} />
                <NavExpense items={data.expense} />
                <NavFees items={data.fees} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}