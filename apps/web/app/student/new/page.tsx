import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { StudentFormView } from "@/modules/student/ui/views/student-form-view";

export const metadata: Metadata = {
    title: "New Student",
    description: "Form to create a new student",
}

const NewStudent = () => {
    return (
        <ContentLayout>
            <StudentFormView />
        </ContentLayout>
    )
}

export default NewStudent;