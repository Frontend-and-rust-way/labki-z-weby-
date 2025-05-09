import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { booksEn } from "./mock/mock-books-en";
import { booksUk } from "./mock/mock-books-uk";
import { mockDataIntroSectionEn } from "./mock/mock-intro-section-en";
import { mockDataIntroSectionUk } from "./mock/mock-into-section-uk";
import { bookDescriptionEn, bookDescriptionUk } from "./modules/layout/catalog-page/grid-book-cards/mock/mock-book-description";

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: {
        mainPage: {
          headingsData: ["BookVerse", "Каталог", "Картки"],
          registrationPanelType: ["Мій акаунт"],
          author: "Автор",
          books: booksUk,
          email: "Email",
          genre: "Жанр",
          password: "Пароль",
          phone: "Телефон",
          button: "Зареєструватися",
          prevButton: "Попередній",
          nextButton: "Наступний",
          myAccount: "Мій акаунт",
          closeModal: "Закрити модальне вікно",
          totalSummary: "Загальна сума",
          orderBooks: "Замовити книги",
          addToBasket: "додати до кошика",  
          dataIntroSection: mockDataIntroSectionUk,
          bookDescription: bookDescriptionUk,
        },
        footer: {
          aboutStore: "Про магазин",
          storeDescription:
            "BookVerse — це інтернет-магазин книг, де ви можете знайти художню, наукову, бізнес-літературу та багато іншого. Наша місія — зробити читання зручним і доступним.",
          blog: "Блог",
          howToReadMore: "Як читати більше",
          howToReadMoreSubtitle: "Поради для зайнятих людей",
          newReleases: "Нові релізи місяця",
          newReleasesSubtitle: "Нові надходження в нашому каталозі",
          popularTags: [
            "Фентезі", "Бізнес", "Наука", "Психологія", "Класика",
            "Нові релізи", "Художня література", "Історія", "Детективи",
            "Мотивація", "Саморозвиток", "Комікси"
          ]
        },
        accountPage: {
          myAccount: "Мій акаунт",
          personalData: "Особисті дані",
          orderHistory: "Історія замовлень",
          settings: "Налаштування",
          support: "Підтримка",
          phone: "Телефон",
          address: "Адреса",
          edit: "Редагувати",
          orderNumber: "№ Замовлення",
          date: "Дата",
          status: "Статус",
          total: "Сума",
          delivered: "Доставлено",
          language: "Мова",
          ukrainian: "Українська",
          english: "English",
          contactSupport: "Зв'язатися з підтримкою",
          contactSupportModal: "Please enter a message",
          supportMessagePlaceholder: "Please enter your support message",
          supportMessageAlert: "Your support message has been sent!",
          sendMessage: "Send Message",  
          bookDescription: bookDescriptionEn,
        },
        catalog:{
          close: "Close modal",
          totalSummary: "загальна сума",
          orderBooks: "зомовити книги",
          addToBasket: "додати до кошика",
          "delete": "видалити все"
        }
      }
    },
    en: {
      translation: {
        mainPage: {
          headingsData: ["BookVerse", "Catalog", "Carts"],
          registrationPanelType: ["My Account"],
          author: "Author",
          books: booksEn,
          email: "Email",
          genre: "Genre",
          password: "Password",
          phone: "Phone",
          button: "Register",
          prevButton: "Prev",
          nextButton: "Next",
          myAccount: "My Account",
          closeModal: "Close modal",
          totalSummary: "Total Summary",
          orderBooks: "Order books",
          dataIntroSection:mockDataIntroSectionEn,
        },
        footer: {
          aboutStore: "About the Store",
          storeDescription:
            "BookVerse is an online bookstore where you can find fiction, scientific, business literature, and more. Our mission is to make reading convenient and accessible.",
          blog: "Blog",
          howToReadMore: "How to Read More",
          howToReadMoreSubtitle: "Tips for busy people",
          newReleases: "New Releases of the Month",
          newReleasesSubtitle: "Fresh arrivals in our catalog",
          popularTags: [
            "Fantasy", "Business", "Science", "Psychology", "Classics",
            "New Releases", "Fiction", "History", "Detective", "Motivation",
            "Self-help", "Comics"
          ]
        },
        accountPage: {
          myAccount: "My Account",
          personalData: "Personal Data",
          orderHistory: "Order History",
          settings: "Settings",
          support: "Support",
          phone: "Phone",
          address: "Address",
          edit: "Edit",
          orderNumber: "Order No.",
          date: "Date",
          status: "Status",
          total: "Total",
          delivered: "Delivered",
          language: "Language",
          ukrainian: "Ukrainian",
          english: "English",
          contactSupport: "Contact Support",
          contactSupportModal: "Будь ласка, введіть повідомлення",
          supportMessagePlaceholder: "Будь ласка, введіть ваше повідомлення для підтримки",
          supportMessageAlert: "Ваше повідомлення підтримки надіслано!",
          sendMessage: "Надіслати повідомлення",
        },
        catalog: { 
          "title": "Загальна сума",
          "orderButton": "Замовити книги",
          "closeModalAria": "Закрити модальне вікно",
          "delete": "Delete everything"
        }
      }
    }
  },
  lng: "ua", 
  fallbackLng: "ua", 
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
