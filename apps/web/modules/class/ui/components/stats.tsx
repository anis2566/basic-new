import { ListStatCard } from "@workspace/ui/shared/list-stat-card"

interface StatsProps {
    states: {
        total: number;
        primary: number;
        secondary: number;
        higherSecondary: number;
    } | undefined
}

export const Stats = ({ states }: StatsProps) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            <ListStatCard
                title="Total Classes"
                value={states?.total?.toString() ?? "0"}
            />
            <ListStatCard
                title="Primary"
                value={states?.primary?.toString() ?? "0"}
            />
            <ListStatCard
                title="Secondary"
                value={states?.secondary?.toString() ?? "0"}
            />
            <ListStatCard
                title="Higher Secondary"
                value={states?.higherSecondary?.toString() ?? "0"}
            />
        </div>
    )
}