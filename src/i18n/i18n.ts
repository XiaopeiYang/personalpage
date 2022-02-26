import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

import en from "./locales/en.json";
import zh from "./locales/zh.json";
import de from "./locales/de.json";

const resources = {
  en,
  zh,
  de,
};

i18n
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    debug: true,
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
