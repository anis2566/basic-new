"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetHouses } from "../../hooks/use-get-houses";
import { HouseList } from "../components/house-list";
import { Filter } from "../components/filter";

export const HousesView = () => {

    const [filters, setFilters] = useGetHouses()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.house.getMany.queryOptions({
        ...filters
    }))

    return (
        <div className="flex-1 flex flex-col gap-6">
            <ListCardWrapper
                title="Manage Houses"
                value={data?.totalCount}
            >
                <Filter />
                <HouseList houses={data?.houses} />
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