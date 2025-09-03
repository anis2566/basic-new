import { LucideIcon } from "lucide-react"

import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu"
import { Separator } from "@workspace/ui/components/separator"

interface ListActionButtonProps {
    icon: LucideIcon
    onClick: () => void
    title: string
}

export const ListActionButton = ({
    icon: Icon,
    onClick,
    title
}: ListActionButtonProps) => {
    return (
        <>
            <Separator />
            <DropdownMenuItem
                className="flex items-center gap-x-3 rounded-[0px] h-7 text-rose-500 group-hover:text-rose-600"
                onClick={onClick}
            >
                <Icon className="text-rose-500 group-hover:text-rose-600" />
                <p className="text-rose-500 group-hover:text-rose-600">{title}</p>
            </DropdownMenuItem>
        </>
    )
}