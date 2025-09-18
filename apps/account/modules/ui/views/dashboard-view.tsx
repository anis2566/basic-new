"use client";

import { useTRPC } from "@/trpc/client";
import { DollarSign } from "lucide-react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { StatCard } from "@workspace/ui/shared/state-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import {
    Card,
    CardContent,
} from "@workspace/ui/components/card"

import { ThisMonthSalaryChart } from "../components/this-month-salary-chart";
import { LastMonthSalaryChart } from "../components/last-month-salary-chart";
import { OverallSalaryChart } from "../components/overall-salary-chart";
import { TodoContainer } from "../components/todo-container";
import { TodaySalariesChart } from "../components/today-salaries-chart";
import { RecentSalaries } from "../components/recent-salaries";
import { ThisMonthUnpaidSalariesChart } from "../components/this-month-unpaid-salaries-chart";

export const DashboardView = () => {
    const trpc = useTRPC()

    const { data } = useQuery(trpc.report.accoundDashboard.queryOptions())

    return (
        <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard
                            title="This Month"
                            primaryValue={data?.thisMonthPaidSalaryCount || 0}
                            secondaryValue={data?.thisMonthSalaryCount}
                            icon={DollarSign}
                            percent={
                                data?.thisMonthSalaryCount && data?.thisMonthPaidSalaryCount
                                    ? Math.round(
                                        (data.thisMonthPaidSalaryCount / data.thisMonthSalaryCount) * 100
                                    )
                                    : 0
                            }
                        />
                        <StatCard
                            title="Last Month"
                            primaryValue={data?.lastMonthPaidSalaryCount || 0}
                            secondaryValue={data?.lastMonthSalaryCount}
                            icon={DollarSign}
                            percent={
                                data?.lastMonthSalaryCount && data?.lastMonthPaidSalaryCount
                                    ? Math.round(
                                        (data.lastMonthPaidSalaryCount / data.lastMonthSalaryCount) * 100
                                    )
                                    : 0
                            }
                        />
                        <StatCard
                            title="Overall"
                            primaryValue={data?.totalPaidSalaryCount || 0}
                            secondaryValue={data?.totalSalaryCount}
                            icon={DollarSign}
                            percent={
                                data?.totalSalaryCount && data?.totalPaidSalaryCount
                                    ? Math.round(
                                        (data.totalPaidSalaryCount / data.totalSalaryCount) * 100
                                    )
                                    : 0
                            }
                        />
                    </div>
                    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs w-full overflow-hidden">
                        <Card className="rounded-xs p-3 gap-y-3 w-full overflow-hidden">
                            <CardContent className="p-0">
                                <Tabs defaultValue="thisMonth" className="w-full">
                                    <TabsList>
                                        <TabsTrigger value="thisMonth">This Month</TabsTrigger>
                                        <TabsTrigger value="lastMonth">Last Month</TabsTrigger>
                                        <TabsTrigger value="overall">Overall</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="thisMonth">
                                        <ThisMonthSalaryChart data={data?.thisMonthSalaries} />
                                    </TabsContent>
                                    <TabsContent value="lastMonth">
                                        <LastMonthSalaryChart data={data?.lastMonthSalaries} />
                                    </TabsContent>
                                    <TabsContent value="overall">
                                        <OverallSalaryChart data={data?.overallSalaries} />
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
                    <RecentSalaries payments={data?.recentSalaries || []} />
                </div>
                <div className="md:col-span-2 w-full flex flex-col gap-6">
                    <TodoContainer />
                    <TodaySalariesChart data={data?.todaySalaries || []} />
                    <ThisMonthUnpaidSalariesChart data={data?.thisMonthUnpaidSalaries || []} />
                </div>
            </div>
        </div>
    )
}