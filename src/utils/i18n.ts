import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  homeEn,
  homeAr,
  navAr,
  navEn,
  contactFormAr,
  contactFormEn,
  footerAr,
  footerEn,
  aboutAr,
  aboutEn,
  corporateAr,
  corporateEn,
  serviceAr,
  serviceEn,
  programsAr,
  programsEn,
  contactAr,
  contactEn,
} from "../../public/locals";

const resources = {
  en: {
    home: homeEn,
    nav: navEn,
    footer: footerEn,
    contactForm: contactFormEn,
    about: aboutEn,
    corporate: corporateEn,
    service: serviceEn,
    programs: programsEn,
    contact: contactEn,
  },
  ar: {
    home: homeAr,
    nav: navAr,
    footer: footerAr,
    contactForm: contactFormAr,
    about: aboutAr,
    corporate: corporateAr,
    service: serviceAr,
    programs: programsAr,
    contact: contactAr,
  },
} as const;

// ✅ Default language set to Arabic
const lang = localStorage.getItem("lang") || "ar";

// Set html attributes initially
document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: "ar", // ✅ fallback to Arabic if no match
  interpolation: { escapeValue: false },
});

export const changeLanguage = (lng: "en" | "ar") => {
  i18n.changeLanguage(lng);
  localStorage.setItem("lang", lng);
  // Update html lang and dir on language change
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

export default i18n;
