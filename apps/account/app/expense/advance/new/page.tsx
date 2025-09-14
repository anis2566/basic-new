import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { TeacherAdvanceFormView } from "@/modules/teacher-advance/ui/views/teacher-advance-form-view";

export const metadata: Metadata = {
    title: "New Teacher Advance",
    description: "Form to create a new teacher advance",
}

const NewTeacherAdvance = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <TeacherAdvanceFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewTeacherAdvance;