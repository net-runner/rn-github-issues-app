import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/index';
import pl from './pl/index';
import languageDetectorPlugin from './languageDetectorPlugin';

const resources = {
  en,
  pl,
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    fallbackLng: 'en',
    resources,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,
    react: { useSuspense: false },
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });
const t = i18n.t.bind(i18n);
export { t };

export default i18n;
