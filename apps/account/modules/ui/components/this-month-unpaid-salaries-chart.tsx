"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@workspace/ui/components/chart"
import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";

const createChartConfig = (data: { className: string; total: number }[]): ChartConfig => {
    const config: ChartConfig = {
        total: {
            label: "Total",
        },
    };

    data.forEach((item, index) => {
        config[item.className] = {
            label: item.className.charAt(0).toUpperCase() + item.className.slice(1),
            color: `var(--chart-${(index % 5) + 1})`,
        };
    });

    return config;
};

interface ThisMonthUnpaidChartProps {
    data: {
        className: string;
        total: number;
    }[]
}

export const ThisMonthUnpaidSalariesChart = ({ data }: ThisMonthUnpaidChartProps) => {
    // Transform data for the chart and add fill colors
    const chartData = data.map((item, index) => ({
        ...item,
        fill: `var(--chart-${(index % 5) + 1})`,
    }));

    const chartConfig = createChartConfig(data);

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs w-full overflow-hidden">
            <Card className="rounded-xs p-3 gap-y-3 w-full overflow-hidden">
                <CardHeader className="px-0">
                    <CardTitle>This Month's Unpaid Salaries</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie data={chartData} dataKey="total" nameKey="className" />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}