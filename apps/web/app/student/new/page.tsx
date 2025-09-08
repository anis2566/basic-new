import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { StudentFormView } from "@/modules/student/ui/views/student-form-view";

export const metadata: Metadata = {
    title: "New Student",
    description: "Form to create a new student",
}

const NewStudent = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <StudentFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewStudent;