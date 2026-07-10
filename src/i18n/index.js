import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./locales/pt-BR.json";
import enUS from "./locales/en-US.json";
import esES from "./locales/es-ES.json";

export const SUPPORTED_LANGUAGES = [
  { code: "pt-BR", label: "PT" },
  { code: "en-US", label: "EN" },
  { code: "es-ES", label: "ES" },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      "en-US": { translation: enUS },
      "es-ES": { translation: esES },
    },
    // Mapeia códigos base do navegador ("pt", "en", "es") para a variante
    // regional correspondente; qualquer outro idioma cai em pt-BR (default).
    fallbackLng: {
      pt: ["pt-BR"],
      en: ["en-US"],
      es: ["es-ES"],
      default: ["pt-BR"],
    },
    supportedLngs: ["pt-BR", "en-US", "es-ES"],
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

// Mantém o atributo lang do <html> sincronizado com o idioma atual (acessibilidade/SEO).
const applyDocumentLang = (lng) => {
  if (typeof document !== "undefined" && lng) {
    document.documentElement.lang = lng;
  }
};
applyDocumentLang(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", applyDocumentLang);

export default i18n;
