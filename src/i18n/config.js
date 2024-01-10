import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { getUserLang } from "../helpers/common/authtoke";

const getUserLanguage =  () => {
  getUserLang().then(res => {
    return res;
  }).catch(err => {
    console.log(err);
    return null;
  })
}
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: "en",
  // lng: getUserLanguage() ? getUserLanguage() : "en",
  lng: "en",
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    mm: {
      translations: require("./locales/mm/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "cn", "mm"];

export default i18n;
