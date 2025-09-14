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
    House,
    List,
    LogIn,
    Map,
    PieChart,
    PlusCircle,
    School,
    Settings2,
    ShieldEllipsis,
    SquareTerminal,
    UserRoundPen,
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
import { NavUtils } from "./nav-utils"
import { NavRoomHouse } from "./nav-room-house"
import { NavStudent } from "./nav-student"
import { NavFees } from "./nav-fees"
import { NavTeacher } from "./nav-teacher"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    student: [
        {
            title: "Student",
            url: "",
            icon: Users,
            items: [
                {
                    title: "New",
                    url: "/student/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/student",
                    icon: List
                },
            ],
        }
    ],
    teacher: [
        {
            title: "Teacher",
            url: "",
            icon: UserRoundPen,
            items: [
                {
                    title: "New",
                    url: "/teacher/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/teacher",
                    icon: List
                },
            ],
        }
    ],
    roomHouses: [
        {
            title: "House",
            url: "",
            icon: House,
            items: [
                {
                    title: "New",
                    url: "/house/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/house",
                    icon: List
                },
            ],
        },
        {
            title: "Room",
            url: "",
            icon: Warehouse,
            items: [
                {
                    title: "New",
                    url: "/room/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/room",
                    icon: List
                },
            ],
        },
    ],
    utils: [
        {
            title: "Counter",
            url: "",
            icon: ShieldEllipsis,
            items: [
                {
                    title: "New",
                    url: "/counter/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/counter",
                    icon: List
                },
            ],
        },
    ],
    fees: [
        {
            title: "Admission",
            url: "",
            icon: LogIn,
            items: [
                {
                    title: "New",
                    url: "/fee/admission/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/fee/admission",
                    icon: List
                },
            ],
        },
        {
            title: "Salary",
            url: "",
            icon: Calendar,
            items: [
                {
                    title: "New",
                    url: "/fee/salary/new",
                    icon: PlusCircle
                },
                {
                    title: "List",
                    url: "/fee/salary",
                    icon: List
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
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
                <NavTeacher items={data.teacher} />
                <NavRoomHouse items={data.roomHouses} />
                <NavFees items={data.fees} />
                <NavUtils items={data.utils} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}