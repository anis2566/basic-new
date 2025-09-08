"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"
import { MobilePagination } from "@workspace/ui/shared/mobile-pagination"
import { DesktopPagination } from "@workspace/ui/shared/pagination"

import { useGetDuePayments } from "../../hooks/use-get-due-payments";
import { DuePaymentList } from "../components/due-payment-list";
import { DueFilter } from "../components/due-filter";

export const DueSalaryPaymentsView = () => {

    const [filters, setFilters] = useGetDuePayments()
    const trpc = useTRPC();


    const { data } = useSuspenseQuery(trpc.salaryPayment.getDueMany.queryOptions({
        ...filters
    }))

    return (
        <div className="flex-1 flex flex-col gap-6">
            <ListCardWrapper
                title="Manage Due Payments"
                value={data?.totalCount}
            >
                <DueFilter />
                <DuePaymentList payments={data?.payments} />
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