import { create } from "zustand";

interface DeleteAdmissionFeeState {
    isOpen: boolean;
    feeId: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useDeleteAdmissionFee = create<DeleteAdmissionFeeState>((set) => ({
    isOpen: false,
    feeId: "",
    onOpen: (id: string) => set({ isOpen: true, feeId: id }),
    onClose: () => set({ isOpen: false, feeId: "" }),
}));