import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


export interface IUseAccountStore {
  isEnterModalOpen: boolean;
  openEnterModal: () => void;
  closeEnterModal: () => void;
  isSupportModalOpen: boolean;
  dateOrder: string[];
  isLinkAccount: boolean;
  isRegistrationModalOpen: boolean;
  setLinkAccountTrue: () => void;
  openSupportModal: () => void;
  closeSupportModal: () => void;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
  setDateOrder: () => void;
  enterInAccount:boolean;
  setEnterInAccount: () => void;
  exitFromAccount: () => void;
}

export const useAccountStore = create<IUseAccountStore>()(
  persist(
    immer((set) => ({
      isEnterModalOpen: false,
      openEnterModal: () => set({isEnterModalOpen: true }),
      closeEnterModal: () =>  set({isEnterModalOpen: false}),
      enterInAccount: false,
      exitFromAccount:() => set({enterInAccount: false}),
      setEnterInAccount:() => set({enterInAccount: true}),
      dateOrder: [],
      setDateOrder: () => {
        const now = new Date();
        const dateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        set((state) => {
          state.dateOrder.push(dateString);
        });
      },
      isSupportModalOpen: false,
      isRegistrationModalOpen: false,
      isLinkAccount: false,
      setLinkAccountTrue: () =>
        set((state) => {
          state.isLinkAccount = true;
        }),
      openSupportModal: () =>
        set((state) => {
          state.isSupportModalOpen = true;
        }),
      closeSupportModal: () =>
        set((state) => {
          state.isSupportModalOpen = false;
        }),
      openRegistrationModal: () =>
        set((state) => {
          state.isRegistrationModalOpen = true;
        }),
      closeRegistrationModal: () =>
        set((state) => {
          state.isRegistrationModalOpen = false;
        }),
    })),
    {
      name: "account-storage", 
    }
  )
);

export default useAccountStore;