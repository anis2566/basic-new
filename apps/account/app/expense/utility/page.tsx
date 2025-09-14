import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getPayments } from "@/modules/utility-payment/params/get-payments";
import { UtilityPaymentView } from "@/modules/utility-payment/ui/views/utility-payments-view";

export const metadata: Metadata = {
    title: "Utility Payments",
    description: "List of counter",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const UtilityPayments = async ({ searchParams }: Props) => {
    const params = await getPayments(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.utilityPayment.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <UtilityPaymentView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default UtilityPayments