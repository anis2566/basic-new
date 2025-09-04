import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { HouseFormView } from "@/modules/house/ui/views/house-form-view";

export const metadata: Metadata = {
    title: "New House",
    description: "Form to create a new house",
}

const NewHouse = () => {
    return (
        <ContentLayout>
            <HouseFormView />
        </ContentLayout>
    )
}

export default NewHouse;