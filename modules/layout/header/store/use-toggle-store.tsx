import { create } from "zustand";
import { IUseToggleStore } from "../types/interfaces";

export const useToggleStore = create<IUseToggleStore>((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
  toggleModal: () => set((state) => ({ modal: !state.modal })),
}));


