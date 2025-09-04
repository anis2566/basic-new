import { create } from "zustand";

interface DeleteCounterState {
    isOpen: boolean;
    counterId: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useDeleteCounter = create<DeleteCounterState>((set) => ({
    isOpen: false,
    counterId: "",
    onOpen: (id: string) => set({ isOpen: true, counterId: id }),
    onClose: () => set({ isOpen: false, counterId: "" }),
}));