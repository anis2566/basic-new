import { create } from "zustand";

interface DeleteSalaryFeeState {
    isOpen: boolean;
    feeId: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useDeleteSalaryFee = create<DeleteSalaryFeeState>((set) => ({
    isOpen: false,
    feeId: "",
    onOpen: (id: string) => set({ isOpen: true, feeId: id }),
    onClose: () => set({ isOpen: false, feeId: "" }),
}));