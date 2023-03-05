import Config from 'react-native-config';
import { Issue } from '../hooks/issues/types';
import { TOKEN } from './token';

export const getIssues = async (
  page: number = 1,
  ammount: number = 20,
  repo: string = 'facebook/react-native',
): Promise<Issue[]> => {
  return fetch(
    `https://api.github.com/repos/${repo}/issues?page=${page}&per_page=${ammount}`,
    TOKEN,
  ).then(result => result.json());
};
