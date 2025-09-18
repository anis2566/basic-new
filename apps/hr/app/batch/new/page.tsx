import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { BatchFormView } from "@/modules/batch/ui/views/batch-form-view";

export const metadata: Metadata = {
    title: "New Batch",
    description: "Form to create a new batch",
}

const NewBatch = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <BatchFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewBatch;