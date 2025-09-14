"use client"

import * as React from "react"
import {
    Calendar,
    CalendarDays,
    HandCoins,
    History,
    LogIn,
    Package,
    PlusCircle,
    SquareChartGantt,
    UserPen,
    Users,
    Warehouse,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@workspace/ui/components/sidebar"

import { Header } from "./header"
import { NavIncome } from "./nav-income"
import { NavStudent } from "./nav-student"
import { NavFees } from "./nav-fees"
import { NavExpense } from "./nav-expense"
import { NavDashboard } from "./nav-dashboard"
import { NavTeacher } from "./nav-teacher"
import { NavReport } from "./nav-report"

const data = {
    student: [
        {
            title: "Student",
            url: "/student",
            icon: Users,
            items: [],
        }
    ],
    teacher: [
        {
            title: "Teacher",
            url: "/teacher",
            icon: UserPen,
            items: [],
        }
    ],
    report: [
        {
            title: "Report",
            url: "/report",
            icon: CalendarDays,
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
            title: "Advance",
            url: "",
            icon: HandCoins,
            items: [
                {
                    title: "New",
                    url: "/expense/advance/new",
                    icon: PlusCircle
                },
                {
                    title: "History",
                    url: "/expense/advance",
                    icon: History
                }
            ],
        },
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
            url: "",
            icon: Package,
            items: [
                {
                    title: "New",
                    url: "/expense/utility/new",
                    icon: PlusCircle
                },
                {
                    title: "History",
                    url: "/expense/utility",
                    icon: History
                }
            ],
        },
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
                <NavDashboard />
                <NavStudent items={data.student} />
                <NavTeacher items={data.teacher} />
                <NavReport items={data.report} />
                <NavIncome items={data.income} />
                <NavExpense items={data.expense} />
                <NavFees items={data.fees} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}