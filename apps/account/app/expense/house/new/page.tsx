import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { HousePaymentFormView } from "@/modules/house-payment/ui/views/house-payment-form-view";

export const metadata: Metadata = {
    title: "New House Payment",
    description: "Form to create a new house payment",
}

const NewHousePayment = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <HousePaymentFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewHousePayment;