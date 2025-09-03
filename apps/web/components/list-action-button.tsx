import { LucideIcon } from "lucide-react"
import Link from "next/link"

import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

interface ListActionButtonProps {
    type: "link" | "button"
    href?: string
    icon: LucideIcon
    onClick?: () => void
    buttonVariant?: "button" | "danger"
    title: string
}

export const ListActionButton = ({
    type,
    href,
    icon: Icon,
    onClick,
    buttonVariant = "button",
    title
}: ListActionButtonProps) => {
    const isDanger = buttonVariant === "danger"
    const baseItemClasses = "flex items-center gap-x-3 rounded-[0px] h-7"
    const dangerClasses = isDanger ? "text-rose-500 group-hover:text-rose-600" : ""

    if (type === "link") {
        return (
            <DropdownMenuItem className={baseItemClasses}>
                <Link
                    href={href || "/"}
                    className="flex items-center gap-x-3"
                    prefetch
                >
                    <Icon />
                    <p>{title}</p>
                </Link>
            </DropdownMenuItem>
        )
    }

    if (type === "button") {
        return (
            <>
                {isDanger && <Separator />}
                <DropdownMenuItem
                    className={cn(baseItemClasses, dangerClasses)}
                    onClick={onClick}
                >
                    <Icon className={dangerClasses} />
                    <p className={dangerClasses}>{title}</p>
                </DropdownMenuItem>
            </>
        )
    }

    return null
}