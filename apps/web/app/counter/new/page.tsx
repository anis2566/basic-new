import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { CounterFormView } from "@/modules/counter/ui/views/counter-form-view";

export const metadata: Metadata = {
    title: "New Counter",
    description: "Form to create a new counter",
}

const NewHouse = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <CounterFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewHouse;