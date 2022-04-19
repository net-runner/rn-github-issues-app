import { GIT_API_TOKEN } from '@env';
import { Repo } from '../hooks/issues/types';

export const getRepo = async (
  repo: string = 'facebook/react-native',
): Promise<Repo> => {
  return fetch(
    `https://api.github.com/repos/${repo}`,
    GIT_API_TOKEN
      ? {
          headers: {
            authorization: 'token ' + GIT_API_TOKEN,
          },
        }
      : {},
  ).then(result => result.json());
};
