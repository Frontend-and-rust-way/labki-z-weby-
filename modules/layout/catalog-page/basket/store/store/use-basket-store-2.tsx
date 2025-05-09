import { create } from "zustand";
import { booksEn } from "@/mock/mock-books-en";
import { booksUk } from "@/mock/mock-books-uk";
import { immer } from "zustand/middleware/immer";
import _ from "lodash";



export interface IUseBasketStore {
  ordering: (number | string)[];
  orderModal: boolean;
  chosenAuthor: string;
  chosenGenre: string;
  totalSummary: number;
  isBasketModalActive: boolean;
  mockBooks: typeof booksEn | typeof booksUk;
  addedBooks: typeof booksEn | typeof booksUk;
  openOrderModal: () => void;
  closeOrderModal: () => void;
  openBasketModal: () => void;
  closeBasketModal: () => void;
  clearAddedBooks: () => void;
  addChosenBookIntoBasket: (indexClickedBook: number) => void;
  increaseElement: (index: number) => void;
  decreaseElement: (index: number) => void;
  deleteChosenAddedBooks: (index: number) => void;
  setTotalSummary: () => void;
  setChosenGenreValue: (value: string) => void;
  setChosenAuthorValue: (value: string) => void;
  addOrderIntoArray: (orderValue: number | string) => void;
  getOrderingFromLocalStorage: () => void;
} 

export const useBasketStore2 = create<IUseBasketStore>()(
  immer((set, get) => ({
    ordering: [],
    orderModal: false,
    isBasketModalActive: false,
    chosenAuthor: "",
    chosenGenre: "",
    mockBooks:  _.shuffle(booksEn),
    addedBooks: [],
    totalSummary: 0,

    getOrderingFromLocalStorage: () => {
      const localData = localStorage.getItem("orders");
      if (localData) {
        try {
          const parsed = JSON.parse(localData);
          if (Array.isArray(parsed)) {
            set({ ordering: parsed });
          }
        } catch (e) {
          console.error("Failed to parse orders from localStorage", e);
        }
      }
    },

    addOrderIntoArray: (orderValue: number | string) =>
      set((state) => {
        state.ordering.push(orderValue);
      }),

    openOrderModal: () => set({ orderModal: true }),
    closeOrderModal: () => set({ orderModal: false }),

    openBasketModal: () => set({ isBasketModalActive: true }),
    closeBasketModal: () => set({ isBasketModalActive: false }),

    setChosenAuthorValue: (value: string) =>
      set({ chosenAuthor: value, chosenGenre: "" }),

    setChosenGenreValue: (value: string) =>
      set({ chosenGenre: value, chosenAuthor: "" }),

    clearAddedBooks: () =>
      set((state) => {
        state.addedBooks = [];
      }),

    deleteChosenAddedBooks: (index: number) =>
      set((state) => {
        state.addedBooks = state.addedBooks.filter((_, i) => i !== index);
      }),

    increaseElement: (index: number) =>
      set((state) => {
        state.addedBooks[index].countPurchase += 1;
      }),

    decreaseElement: (index: number) =>
      set((state) => {
        if (state.addedBooks[index].countPurchase > 0) {
          state.addedBooks[index].countPurchase -= 1;
        }
      }),

    setTotalSummary: () => {
      const total = get().addedBooks.reduce(
        (acc, book) => acc + book.price * book.countPurchase,
        0
      );
      set({ totalSummary: total });
    },

    addChosenBookIntoBasket: (indexClickedBook: number) => {
      const bookToAdd = get().mockBooks[indexClickedBook];
      const existingIndex = get().addedBooks.findIndex(
        (book) => book.code === bookToAdd.code
      );

      if (existingIndex === -1) {
        set((state) => {
          state.addedBooks.push({ ...bookToAdd, countPurchase: 1 });
        });
      } else {
        set((state) => {
          state.addedBooks[existingIndex].countPurchase += 1;
        });
      }
    },
  }))
);

