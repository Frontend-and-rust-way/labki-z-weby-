import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { booksEn } from "./mock/mock-books-en";
import { booksUk } from "./mock/mock-books-uk";
import { mockDataIntroSectionEn } from "./mock/mock-intro-section-en";
import { mockDataIntroSectionUk } from "./mock/mock-into-section-uk";
import { bookDescriptionUk } from "./modules/layout/catalog-page/grid-book-cards/mock/mock-book-description";
import { footerInfoEn, footerInfoUkr, blogPostsEn, blogPostsUkr, popularTagsEn, popularTagsUkr } from "./modules/layout/footer/footer";
import { bookDescriptionEn } from "./modules/layout/catalog-page/grid-book-cards/mock/mock-book-description";

i18n.use(initReactI18next).init({
  resources: {
    uk: {
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
          footerInfo: footerInfoUkr,
          blogPosts: blogPostsUkr,
          aboutStore: "Про магазин",
          storeDescription:
            "BookVerse — це інтернет-магазин книг, де ви можете знайти художню, наукову, бізнес-літературу та багато іншого. Наша місія — зробити читання зручним і доступним.",
          blog: "Блог",
          howToReadMore: "Як читати більше",
          howToReadMoreSubtitle: "Поради для зайнятих людей",
          newReleases: "Нові релізи місяця",
          newReleasesSubtitle: "Нові надходження в нашому каталозі",
          popularTags: popularTagsUkr,
          popular:"Популярні теги",
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
          ukrainian: "українська",
          english: "англійська",
          contactSupport: "Зв'язатися з підтримкою",
          contactSupportModal: "Будь ласка, введіть повідомлення",
          supportMessagePlaceholder: "Будь ласка, введіть ваше повідомлення для підтримки",
          supportMessageAlert: "Ваше повідомлення підтримки надіслано!",
          sendMessage: "Надіслати повідомлення",
          bookDescription: bookDescriptionUk,
          addressCity: "м. Київ, вул. Прикладна, 1",
          enterMessage: "будь ласка введіть  повідомлення",
        },
        catalog: {
          close: "Закрити модальне вікно",
          totalSummary: "Загальна сума",
          orderBooks: "Замовити книги",
          addToBasket: "додати до кошика",
          delete: "Видалити все"
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
          dataIntroSection: mockDataIntroSectionEn,
          bookDescription: bookDescriptionEn,
        },
        footer: {
          footerInfo: footerInfoEn,
          blogPosts: blogPostsEn,
          aboutStore: "About the Store",
          storeDescription:
            "BookVerse is an online bookstore where you can find fiction, scientific, business literature, and more. Our mission is to make reading convenient and accessible.",
          blog: "Blog",
          howToReadMore: "How to Read More",
          howToReadMoreSubtitle: "Tips for busy people",
          newReleases: "New Releases of the Month",
          newReleasesSubtitle: "Fresh arrivals in our catalog",
          popularTags: popularTagsEn,
          popular:"Popular Tags",
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
          contactSupportModal: "Please enter a message",
          supportMessagePlaceholder: "Please enter your support message",
          supportMessageAlert: "Your support message has been sent!",
          sendMessage: "Send Message",
          addressCity: "Kyiv, Example Street, 1",
          bookDescription: bookDescriptionEn,
          enterMessage: "please enter a message",
        },
        catalog: { 
          title: "Total Amount",
          orderButton: "Order Books",
          closeModalAria: "Close modal window",
          delete: "Delete everything"
        }
      }
    }
  },
  lng: "uk", 
  fallbackLng: "uk", 
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
