export const getIssues = async (
  page: number = 1,
  ammount: number = 20,
  repo?: string,
): Promise<any[]> => {
  return fetch(
    `https://api.github.com/repos/${
      repo ? repo : 'facebook/react-native'
    }/issues?page=${page}&per_page=${ammount}`,
  ).then(result => result.json());
};
