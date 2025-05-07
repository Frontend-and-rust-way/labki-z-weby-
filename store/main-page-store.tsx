import { create } from "zustand";
import { mockDataIntroSection } from "@/mock/mock-intro-section";

export interface IUseMainPageStore {
  mockMainPageDataIndex: number;
  increaseMainPageDataIndex: () => void;
  decreaseMainPageDataIndex: () => void;
}

export const useMainPageStore = create<IUseMainPageStore>((set, get) => ({
  mockMainPageDataIndex: 0,

  increaseMainPageDataIndex: () => {
    const currentIndex = get().mockMainPageDataIndex;
    const maxIndex = mockDataIntroSection.length - 1;

    if (currentIndex >= maxIndex) {
      set({ mockMainPageDataIndex: 0 });
    } else 
      set({ mockMainPageDataIndex: currentIndex + 1 });

  },

  decreaseMainPageDataIndex: () => {
    const currentIndex = get().mockMainPageDataIndex;
    const maxIndex = mockDataIntroSection.length - 1;
    
    if (currentIndex > 0) {
      set({ mockMainPageDataIndex: currentIndex - 1 });
    }
    else 
      set({ mockMainPageDataIndex: maxIndex });
  },
}));
