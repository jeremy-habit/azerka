import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@config/i18n/locales/en.json";
import translationFR from "@config/i18n/locales/fr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
