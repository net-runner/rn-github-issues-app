export const getRepo = async (
  repo: string = 'facebook/react-native',
): Promise<any[]> => {
  return fetch(`https://api.github.com/repos/${repo}`).then(result =>
    result.json(),
  );
};
