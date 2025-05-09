import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface IUseAccountStore {
  isSupportModalOpen: boolean;
  isLinkAccount:boolean;
  isRegistrationModalOpen: boolean;
  setLinkAccountTrue:() => void;
  openSupportModal: () => void;
  closeSupportModal: () => void;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
}

export const useAccountStore = create<IUseAccountStore>()(
  immer((set) => ({
    isSupportModalOpen: false,
    isRegistrationModalOpen: false,
    isLinkAccount: false,
    setLinkAccountTrue: () =>  set({isLinkAccount:true}),
    openSupportModal: () => set((state) => { state.isSupportModalOpen = true }),
    closeSupportModal: () => set((state) => { state.isSupportModalOpen = false }),
    openRegistrationModal: () => set((state) => { state.isRegistrationModalOpen = true }),
    closeRegistrationModal: () => set((state) => { state.isRegistrationModalOpen = false }),
  }))
);

export default useAccountStore;