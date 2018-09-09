import * as types from './types';
import { getRepositories } from '../../apis/github/requests';

export const fetchRepositories = (mock = undefined) => ({
  type: types.FETCH_REPOSITORIES,
  ...getRepositories(mock),
});

export const clear = () => ({
  type: types.CLEAR,
});
