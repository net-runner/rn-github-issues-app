import { GIT_API_TOKEN } from '@env';
export const getIssues = async (
  page: number = 1,
  ammount: number = 20,
  repo?: string,
): Promise<any[]> => {
  return fetch(
    `https://api.github.com/repos/${
      repo ? repo : 'facebook/react-native'
    }/issues?page=${page}&per_page=${ammount}`,
    GIT_API_TOKEN
      ? {
          headers: {
            authorization: 'token ' + GIT_API_TOKEN,
          },
        }
      : {},
  ).then(result => result.json());
};
