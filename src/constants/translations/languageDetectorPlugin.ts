// eslint-disable-file
import * as Localization from 'expo-localization';
import { LanguageDetectorAsyncModule } from 'i18next';
import { settingsStorage } from '../../store/settings-storage';

const STORE_LANGUAGE_KEY = 'lang';

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => null,
  detect: (callback: (lang: string) => void) => {
    if (settingsStorage.contains(STORE_LANGUAGE_KEY)) {
      const l = settingsStorage.getString(STORE_LANGUAGE_KEY);

      return callback(l as string);
    }
    return callback(Localization.locale);
  },
  cacheUserLanguage: (language: string) =>
    settingsStorage.set(STORE_LANGUAGE_KEY, language),
};
export default languageDetectorPlugin;
