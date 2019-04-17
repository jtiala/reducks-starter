import * as types from './types';
import { getRepositories } from '../../apis/github/requests';

export const fetchRepositories = () => ({
  type: types.FETCH_REPOSITORIES,
  ...getRepositories(),
});

export const clear = () => ({
  type: types.CLEAR,
});
