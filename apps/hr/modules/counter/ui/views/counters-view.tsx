"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetCounters } from "../../hooks/use-get-houses";
import { CounterList } from "../components/counter-list";
import { Filter } from "../components/filter";

export const CountersView = () => {

    const [filters, setFilters] = useGetCounters()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.counter.getMany.queryOptions({
        ...filters
    }))

    return (
        <div className="flex-1 flex flex-col gap-6">
            <ListCardWrapper
                title="Manage Counters"
                value={data?.totalCount}
            >
                <Filter />
                <CounterList counters={data?.counters} />
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