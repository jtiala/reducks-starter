import * as transformers from './transformers';

const API_URL = 'https://api.github.com';

export const getRepositories = () => ({
  meta: {
    rest: {
      url: `${API_URL}/repositories`,
      options: {
        method: 'GET',
      },
      transformer: transformers.getRepositories,
    },
  },
});
