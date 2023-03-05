import Config from 'react-native-config';

export const TOKEN = Config.GIT_API_TOKEN
  ? {
      headers: {
        authorization: 'token ' + Config.GIT_API_TOKEN,
      },
    }
  : {};
