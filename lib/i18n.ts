'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '@/translations/en';
import esTranslations from '@/translations/es';

// Initialize i18next on the client side only
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations,
        },
        es: {
          translation: esTranslations,
        },
      },
      lng: 'es', // Set default language
      fallbackLng: 'es',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;