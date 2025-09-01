import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Separator } from "../components/separator"

interface FormCardWrapperProps {
    children: React.ReactNode
    title: string
    description: string
}

export const FormCardWrapper = ({ children, title, description }: FormCardWrapperProps) => {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
            <Card className="rounded-xs p-3 gap-y-3">
                <CardHeader className="px-0">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <Separator />
                </CardHeader>
                <CardContent className="p-0">{children}</CardContent>
            </Card>
        </div>

    )
}