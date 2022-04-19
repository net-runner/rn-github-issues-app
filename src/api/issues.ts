import { GIT_API_TOKEN } from '@env';
import { Issue } from '../hooks/issues/types';
export const getIssues = async (
  page: number = 1,
  ammount: number = 20,
  repo: string = 'facebook/react-native',
): Promise<Issue[]> => {
  return fetch(
    `https://api.github.com/repos/${repo}/issues?page=${page}&per_page=${ammount}`,
    GIT_API_TOKEN
      ? {
          headers: {
            authorization: 'token ' + GIT_API_TOKEN,
          },
        }
      : {},
  ).then(result => result.json());
};
