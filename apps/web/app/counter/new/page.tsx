import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { CounterFormView } from "@/modules/counter/ui/views/counter-form-view";

export const metadata: Metadata = {
    title: "New Counter",
    description: "Form to create a new counter",
}

const NewHouse = () => {
    return (
        <ContentLayout>
            <CounterFormView />
        </ContentLayout>
    )
}

export default NewHouse;