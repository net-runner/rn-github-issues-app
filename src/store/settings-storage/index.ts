import { MMKV } from 'react-native-mmkv';

export const settingsStorage = new MMKV({
  id: `settings-storage`,
  encryptionKey: 'settings',
});
