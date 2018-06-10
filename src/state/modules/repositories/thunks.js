import {
  fetchRepositoriesStart,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailure,
} from './actions';

export const fetchRepositories = () =>
  async (dispatch) => {
    dispatch(fetchRepositoriesStart());

    try {
      const response = await fetch('https://api.github.com/repositories', {
        method: 'GET',
      });

      const data = await response.json();

      dispatch(fetchRepositoriesSuccess(data));
    } catch (e) {
      dispatch(fetchRepositoriesFailure(e.toString()));
    }
  };
