"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetClasses } from "../../hooks/use-get-classes";
import { Stats } from "../components/stats";
import { Filter } from "../components/filter";
import { ClassList } from "../components/class-list";

import { useTRPC } from "@/trpc/client";

export const ClassesView = () => {

    const [filters, setFilters] = useGetClasses()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.class.getMany.queryOptions({
        ...filters
    }))

    return (
        <div className="flex-1 flex flex-col gap-6">
            <Stats states={data?.stats} />
            <ListCardWrapper
                title="Manage Classes"
                value={data?.totalCount}
            >
                <Filter />
                <ClassList classes={data?.classes} />
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