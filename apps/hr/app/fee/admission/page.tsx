import { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, HydrateClient, trpc } from "@/trpc/server"

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { getFees } from "@/modules/admission-fee/params/get-fees";
import { AdmissionFeesView } from "@/modules/admission-fee/ui/views/admission-fees-view";

export const metadata: Metadata = {
    title: "Admission Fees",
    description: "List of admission fees",
}

interface Props {
    searchParams: Promise<SearchParams>;
}

const AdmissionFees = async ({ searchParams }: Props) => {
    const params = await getFees(searchParams);

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.admissionFee.getMany.queryOptions({
        ...params
    }));

    return (
        <ContentLayout>
            <HydrateClient queryClient={queryClient}>
                <AdmissionFeesView />
            </HydrateClient>
        </ContentLayout>
    )
}

export default AdmissionFees