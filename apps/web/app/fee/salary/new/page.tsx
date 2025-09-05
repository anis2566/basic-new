import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { SalaryFeeFormView } from "@/modules/salary-fee/ui/views/salary-fee-form-view";

export const metadata: Metadata = {
    title: "New Fee",
    description: "Form to create a new fee",
}

const NewSalaryFee = () => {
    return (
        <ContentLayout>
            <SalaryFeeFormView />
        </ContentLayout>
    )
}

export default NewSalaryFee;