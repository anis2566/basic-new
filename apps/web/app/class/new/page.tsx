import { Metadata } from "next";

import { ClassFormViews } from "@/modules/class/ui/views/class-form-views";
import { ContentLayout } from "@/modules/ui/layout/content-layout";

export const metadata: Metadata = {
    title: "New Class",
    description: "Form to create a new class",
}

const NewClass = () => {
    return (
        <ContentLayout>
            <ClassFormViews />
        </ContentLayout>
    )
}

export default NewClass;