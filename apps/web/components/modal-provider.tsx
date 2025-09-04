import { DeleteCounterModal } from "@/modules/counter/ui/modal/delete-counter-modal";
import { DeleteHouseModal } from "@/modules/house/ui/modal/delete-house-modal";
import { DeleteRoomModal } from "@/modules/room/ui/modal/delete-room-modal";

export const ModalProvider = () => {
    return (
        <>
            <DeleteHouseModal />
            <DeleteRoomModal />
            <DeleteCounterModal />
        </>
    )
};