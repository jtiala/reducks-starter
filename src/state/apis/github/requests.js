import * as transformers from './transformers';

export const API_URL = 'https://api.github.com';

export const getRepositories = (mock = undefined) => ({
  meta: {
    fetch: {
      url: `${API_URL}/repositoriess`,
      options: {
        method: 'GET',
      },
      transformer: transformers.getRepositories,
      mock,
    },
  },
});
