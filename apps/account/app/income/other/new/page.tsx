import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { OtherPaymentFormView } from "@/modules/other-payment/ui/views/other-payment-form-view";

export const metadata: Metadata = {
    title: "New Payment",
    description: "Form to create a new payment",
}

const NewOtherPayment = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherPaymentFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewOtherPayment;