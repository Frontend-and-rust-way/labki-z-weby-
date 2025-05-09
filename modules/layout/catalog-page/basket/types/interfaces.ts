export interface IBook {
  title: string;
  author: string;
  price: number;
  rating: number;
  imageUrl: string;  
}

import { books } from "@/mock/mock-books-en/";

export interface IUseBasketStore {
  // Кількість усіх книг (наприклад, для індикатора загального розміру кошика)
  allBooks: number;

  // Метод для встановлення кількості всіх книг
  readAllBooksCount: (countBook: number) => void;

  // Усі книги (наприклад, весь каталог)
  mockbooks: typeof books;

  // Поточна кількість товарів для покупки (можливо, як окрема лічильна змінна)
  countPurchase: number;

  // Обрані книги в кошику
  mockChosenBooks: typeof books;

  // Індекс вибраної картки (наприклад, для виділення)
  indexOfChosenCard: number;

  // Загальна вартість
  totalSummary: number;

  // Чи була куплена книга
  bookWasPurchased: boolean;

  // Статус модального вікна кошика
  isBasketModalOpen: boolean;

  // Оновлення обраних книг у кошику
  changeMockChosenBooks: (mockBooks: typeof books) => void;

  // Збільшити кількість покупок
  increaseCountPurchase: () => void;

  // Зменшити кількість покупок
  decreaseCountPurchase: () => void;

  // Видалити всі книги з кошика
  deleteAllBooksFromBasket: () => void;

  // Додати/оновити книгу в кошику за індексом
  updateMockChosenBooks: (index: number) => void;

  // Встановити індекс вибраної картки
  setIndexOfChosenCard: (index: number) => void;

  // Відкрити модалку кошика
  openBasketModal: () => void;

  // Закрити модалку кошика
  closeBasketModal: () => void;

  // Позначити книгу як куплену
  markBookPurchased: () => void;

  // Скасувати позначку купівлі
  unmarkBookPurchased: () => void;

  // Обнулити countPurchase
  deleteAllCountPurchase: () => void;

  // Збільшити підсумкову суму
  increaseTotalSummary: (pricePurchase: number) => void;

  // Зменшити підсумкову суму
  decreaseTotalSummary: (pricePurchase: number) => void;

  // Видалити конкретну книгу з кошика за індексом
  deleteChosenBook: (index: number) => void;
}

export interface IBasketPurchase {
  index: number;
  src: string;
  title: string;
  author: string;
  price: string | number;
  type: string;
  isExists: unknown;
  code: number;
}

export interface IBusket {
  className?: string;
  children?: string;
}
