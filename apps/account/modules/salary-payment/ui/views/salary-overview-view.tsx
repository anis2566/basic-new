"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetOverview } from "../../hooks/use-get-overview";
import { StudentList } from "../components/student-list";
import { OverviewFilter } from "../components/overview-filter";

export const SalaryOverviewView = () => {

    const [filters, setFilters] = useGetOverview()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.salaryPayment.getOverview.queryOptions({
        ...filters
    }))

    return (
        <div className="flex flex-col gap-6">
            <ListCardWrapper
                title="Salary Overview"
                value={data?.totalCount}
            >
                <OverviewFilter />
                <StudentList students={data?.students} />
                <DesktopPagination
                    totalCount={data?.totalCount}
                    currentPage={filters.page}
                    pageSize={filters.limit}
                    onPageChange={(page) => setFilters({ page })}
                />
                <MobilePagination
                    totalCount={data?.totalCount}
                    currentPage={filters.page}
                    pageSize={filters.limit}
                    onPageChange={(page) => setFilters({ page })}
                />
            </ListCardWrapper>
        </div>
    )
}