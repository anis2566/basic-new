"use client";

// import { ListCardWrapper } from "@/components/list-card-wrapper"
import { useSuspenseQuery } from "@tanstack/react-query";

// import { Stats } from "../components/stats"
import { useTRPC } from "@/trpc/client";
import { useGetClasses } from "../../hooks/use-get-classes";
import { Stats } from "../components/stats";
// import { Filter } from "../components/filter";
// import { Separator } from "@/components/ui/separator";
import { ListCardWrapper } from "@workspace/ui/shared/list-card-wrapper"

export const ClassesView = () => {

    const [filters] = useGetClasses()
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
                List
                {/* <Filter />
                <Separator className="my-3" /> */}
            </ListCardWrapper>
        </div>
    )
}