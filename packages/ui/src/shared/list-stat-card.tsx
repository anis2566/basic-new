import { Layers3 } from "lucide-react"

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Badge } from "../components/badge"

interface ListStatCardProps {
    title: string
    value: string
}

export const ListStatCard = ({ title, value }: ListStatCardProps) => {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
            <Card className="@container/card rounded-xs p-3">
                <CardHeader className="p-0">
                    <CardDescription>{title}</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {value}
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <Layers3 />
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
        </div>
    )
}