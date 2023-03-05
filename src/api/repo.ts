import Config from 'react-native-config';
import { Repo } from '../hooks/issues/types';
import { TOKEN } from './token';

export const getRepo = async (
  repo: string = 'facebook/react-native',
): Promise<Repo> => {
  return fetch(`https://api.github.com/repos/${repo}`, TOKEN).then(result =>
    result.json(),
  );
};
