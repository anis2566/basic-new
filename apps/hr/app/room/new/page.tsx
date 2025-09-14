import { Metadata } from "next";
import { Suspense } from "react";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { RoomFormView } from "@/modules/room/ui/views/room-form-view";

export const metadata: Metadata = {
    title: "New Room",
    description: "Form to create a new room",
}

const NewRoom = () => {
    return (
        <ContentLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <RoomFormView />
            </Suspense>
        </ContentLayout>
    )
}

export default NewRoom;