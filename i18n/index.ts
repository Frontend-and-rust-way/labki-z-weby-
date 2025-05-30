import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; 

i18n
  .use(Backend) 
  .use(initReactI18next) 
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },
    lng: "uk", 
    fallbackLng: "uk", 
    supportedLngs: ['uk', 'en'], 
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
