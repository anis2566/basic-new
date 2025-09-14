"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetFees } from "../../hooks/use-get-fees";
import { FeeList } from "../components/fee-list";
import { Filter } from "../components/filter";

export const SalaryFeesView = () => {

    const [filters, setFilters] = useGetFees()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.salaryFee.getMany.queryOptions({
        ...filters
    }))

    return (
        <div className="flex-1 flex flex-col gap-6">
            <ListCardWrapper
                title="Manage Fees"
                value={data?.totalCount}
            >
                <Filter />
                <FeeList fees={data?.fees} />
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