import * as transformers from './transformers';

export const API_URL = 'https://api.github.com';

export const getRepositories = (mock = undefined) => ({
  meta: {
    rest: {
      url: `${API_URL}/repositories`,
      options: {
        method: 'GET',
      },
      transformer: transformers.getRepositories,
      mock,
    },
  },
});
