import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getPayments } from "@/modules/admission-payment/params/get-payments";
import { AdmissionPaymentsView } from "@/modules/admission-payment/ui/views/admission-payments-view";

export const metadata: Metadata = {
    title: "Income | Admission",
    description: "List of admission incomes",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const AdmissionIncomes = async ({ searchParams }: Props) => {
    const params = await getPayments(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.admissionPayment.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <AdmissionPaymentsView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default AdmissionIncomes