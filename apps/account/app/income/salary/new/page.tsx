import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout"
import { SalaryFormView } from "@/modules/salary-payment/ui/views/salary-form-view";

export const metadata: Metadata = {
    title: "Income | New Salary",
    description: "Make a new salary payment",
}

const NewSalary = async () => {

    return (
        <ContentLayout>
            <SalaryFormView />
        </ContentLayout>
    )
}

export default NewSalary