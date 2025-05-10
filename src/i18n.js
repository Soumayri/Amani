// src/i18n.js (version simplifiée sans fichiers JSON)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',             // forcé à l'anglais
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;