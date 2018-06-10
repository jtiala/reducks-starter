import * as types from './types';

export const fetchRepositoriesStart = () => ({
  type: types.FETCH_REPOSITORIES_START,
});

export const fetchRepositoriesSuccess = repositories => ({
  type: types.FETCH_REPOSITORIES_SUCCESS,
  payload: repositories,
});

export const fetchRepositoriesFailure = error => ({
  type: types.FETCH_REPOSITORIES_FAILURE,
  payload: error,
});

export const clear = () => ({
  type: types.CLEAR,
});
