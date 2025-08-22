import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: {
    home: 'Home', search: 'Search', library: 'Library', profile: 'Profile',
    getStarted: 'Get Started', chooseLanguage: 'Choose your language',
    continue: 'Continue',
  }},
  ro: { translation: { // Romani placeholder (use your target locales later)
    home: 'Home', search: 'Căutare', library: 'Bibliotecă', profile: 'Profil',
    getStarted: 'Începe', chooseLanguage: 'Alege limba', continue: 'Continuă',
  }},
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: Localization.getLocales()[0]?.languageCode ?? 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
}

export default i18n;
