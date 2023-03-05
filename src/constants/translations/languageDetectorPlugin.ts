// eslint-disable-file

import { LanguageDetectorAsyncModule } from 'i18next';
import { settingsStorage } from '../../store/settings-storage';
import { Platform, NativeModules, Dimensions } from 'react-native';

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
    const appLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    return callback(appLanguage);
  },
  cacheUserLanguage: (language: string) =>
    settingsStorage.set(STORE_LANGUAGE_KEY, language),
};
export default languageDetectorPlugin;
