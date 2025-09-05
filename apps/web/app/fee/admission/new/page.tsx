import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { AdmissionFeeFormView } from "@/modules/admission-fee/ui/views/admission-fee-form-view";

export const metadata: Metadata = {
    title: "New Fee",
    description: "Form to create a new fee",
}

const NewAdmissionFee = () => {
    return (
        <ContentLayout>
            <AdmissionFeeFormView />
        </ContentLayout>
    )
}

export default NewAdmissionFee;