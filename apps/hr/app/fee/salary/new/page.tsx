import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { SalaryFeeFormView } from "@/modules/salary-fee/ui/views/salary-fee-form-view";

export const metadata: Metadata = {
    title: "New Fee",
    description: "Form to create a new fee",
}

const NewSalaryFee = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <SalaryFeeFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewSalaryFee;