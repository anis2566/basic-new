import { Metadata } from "next";

import { ContentLayout } from "@/modules/ui/layout/content-layout";
import { RoomFormView } from "@/modules/room/ui/views/room-form-view";

export const metadata: Metadata = {
    title: "New Room",
    description: "Form to create a new room",
}

const NewRoom = () => {
    return (
        <ContentLayout>
            <RoomFormView />
        </ContentLayout>
    )
}

export default NewRoom;