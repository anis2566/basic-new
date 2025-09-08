import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { AdmissionFeeFormView } from "@/modules/admission-fee/ui/views/admission-fee-form-view";

export const metadata: Metadata = {
    title: "New Fee",
    description: "Form to create a new fee",
}

const NewAdmissionFee = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <AdmissionFeeFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewAdmissionFee;