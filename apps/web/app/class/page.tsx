import { SearchParams } from "nuqs";

import { getQueryClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getClasses } from "@/modules/class/params/get-classes";
import { ClassesView } from "@/modules/class/ui/views/classes-view";

interface Props {
    searchParams: Promise<SearchParams>;
}

const Clases = async ({ searchParams }: Props) => {
    const params = await getClasses(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.class.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <ClassesView />
        </ContentLayout>
    )
}

export default Clases
