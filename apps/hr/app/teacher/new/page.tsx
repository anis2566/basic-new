import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { TeacherFormView } from "@/modules/teacher/ui/views/teacher-form-view";

export const metadata: Metadata = {
    title: "New Teacher",
    description: "Form to create a new teacher",
}

const NewStudent = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <TeacherFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewStudent;