import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Carga las traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Inicializa con react-i18next
  .init({
    fallbackLng: "en", // Idioma por defecto
    supportedLngs: ["en", "es"], // Idiomas soportados
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta de los archivos
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"], // Dónde guardar el idioma detectado
    },
  });

export default i18n;
