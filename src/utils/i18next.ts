import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ua: 'UA',
        en: 'EN',
        es: 'ES',
        photographerFrom: 'Photographer based in Valencia',
        fullName: 'Olha Sausya',
        home: 'HOME',
        posters: 'POSTERS',
        wallpapers: 'WALLPAPERS',
      },
    },
    es: {
      translation: {
        ua: 'UA',
        en: 'EN',
        es: 'ES',
        photographerFrom: 'Fotógrafa con sede en Valencia',
        fullName: 'Olha Sausya',
        home: 'INICIO',
        posters: 'CARTELES',
        wallpapers: 'FONDO DE PANTALLA',
      },
    },
    ua: {
      translation: {
        ua: 'UA',
        en: 'EN',
        es: 'ES',
        photographerFrom: 'Фотограф із Валенсії',
        fullName: 'Olha Sausya',
        home: 'ГОЛОВНА',
        posters: 'ПОСТЕРИ',
        wallpapers: 'ШПАЛЕРИ',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
