import { MMKV } from 'react-native-mmkv';

export const issueStorage = new MMKV({
  id: `issue-storage`,
  encryptionKey: 'issues',
});
