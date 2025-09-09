import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getPayments } from "@/modules/other-payment/params/get-payments";
import { OtherPaymentView } from "@/modules/other-payment/ui/views/other-payments-view";

export const metadata: Metadata = {
    title: "Other Payments",
    description: "List of counter",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const OtherPayments = async ({ searchParams }: Props) => {
    const params = await getPayments(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.otherPayment.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <OtherPaymentView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default OtherPayments