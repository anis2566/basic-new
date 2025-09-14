import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { UtilityPaymentFormView } from "@/modules/utility-payment/ui/views/utility-payment-form-view";

export const metadata: Metadata = {
    title: "New Utility Payment",
    description: "Form to create a new utility payment",
}

const NewUtilityPayment = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <UtilityPaymentFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewUtilityPayment;