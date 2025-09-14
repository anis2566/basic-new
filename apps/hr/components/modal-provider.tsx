import { DeleteAdmissionFeeModal } from "@/modules/admission-fee/ui/modal/delete-admission-fee-modal";
import { DeleteCounterModal } from "@/modules/counter/ui/modal/delete-counter-modal";
import { DeleteHouseModal } from "@/modules/house/ui/modal/delete-house-modal";
import { DeleteRoomModal } from "@/modules/room/ui/modal/delete-room-modal";
import { DeleteSalaryFeeModal } from "@/modules/salary-fee/ui/modal/delete-salary-fee-modal";
import { DeleteStudentModal } from "@/modules/student/ui/modal/delete-student-modal";
import { DeleteTeacherModal } from "@/modules/teacher/ui/modal/delete-teacher-modal";

export const ModalProvider = () => {
    return (
        <>
            <DeleteHouseModal />
            <DeleteRoomModal />
            <DeleteCounterModal />
            <DeleteAdmissionFeeModal />
            <DeleteSalaryFeeModal />
            <DeleteStudentModal />
            <DeleteTeacherModal />
        </>
    )
};