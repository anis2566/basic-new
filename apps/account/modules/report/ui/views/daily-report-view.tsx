"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"


export const DailyReportView = () => {
    const trpc = useTRPC()
    const { data, isLoading } = useQuery(trpc.report.daily.queryOptions())

    const totalIncome = (data?.dailySalary._sum.amount ?? 0) + (data?.dailyAdmission._sum.amount ?? 0) + (data?.dailyOthers._sum.amount ?? 0);
    const totalExpense = (data?.dailyHouseRent._sum.amount ?? 0) + (data?.dailyUtility._sum.amount ?? 0) + (data?.dailyTeacherAdvance._sum.amount ?? 0);
    const netBalance = totalIncome - totalExpense;



    return (
        <div className="flex flex-col gap-4">
            <ListCardWrapper
                title="Total Income"
            >
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background/60">
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Unit</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Total Salary</TableCell>
                            <TableCell className="text-right">{data?.dailySalary._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailySalary._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Admission</TableCell>
                            <TableCell className="text-right">{data?.dailyAdmission._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailyAdmission._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Others</TableCell>
                            <TableCell className="text-right">{data?.dailyOthers._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailyOthers._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow className="bg-background/60">
                            <TableCell colSpan={2} className="font-bold">Total Income</TableCell>
                            <TableCell className="font-bold text-right">{totalIncome}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ListCardWrapper>

            <ListCardWrapper
                title="Total Expense"
            >
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background/60">
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Unit</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Total House Rent</TableCell>
                            <TableCell className="text-right">{data?.dailyHouseRent._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailyHouseRent._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Utility</TableCell>
                            <TableCell className="text-right">{data?.dailyUtility._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailyUtility._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Teacher Advance</TableCell>
                            <TableCell className="text-right">{data?.dailyTeacherAdvance._count._all}</TableCell>
                            <TableCell className="text-right">{data?.dailyTeacherAdvance._sum.amount || 0}</TableCell>
                        </TableRow>
                        <TableRow className="bg-background/60">
                            <TableCell colSpan={2} className="font-bold">Total Expense</TableCell>
                            <TableCell className="font-bold text-right">{totalExpense}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ListCardWrapper>

            <ListCardWrapper
                title="Net Balance"
            >
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background/60">
                            <TableHead>Type</TableHead>
                            <TableHead></TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Total Income</TableCell>
                            <TableCell className="text-right">{totalIncome}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total Expense</TableCell>
                            <TableCell className="text-right">{totalExpense}</TableCell>
                        </TableRow>
                        <TableRow className="bg-background/60">
                            <TableCell colSpan={2} className="font-bold">Net Balance</TableCell>
                            <TableCell className="font-bold text-right">{netBalance}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ListCardWrapper>
        </div>
    )
}