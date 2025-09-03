import { create } from "zustand";

interface DeleteState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useDeleteResource = create<DeleteState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
