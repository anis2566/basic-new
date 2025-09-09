import { create } from "zustand";

interface DeletePaymentState {
    isOpen: boolean;
    paymentId: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useDeleteOtherPayment = create<DeletePaymentState>((set) => ({
    isOpen: false,
    paymentId: "",
    onOpen: (id: string) => set({ isOpen: true, paymentId: id }),
    onClose: () => set({ isOpen: false, paymentId: "" }),
}));