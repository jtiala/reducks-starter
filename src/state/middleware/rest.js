import fetchMock from 'fetch-mock';
import { apiRequestType, apiSuccessType, apiFailureType } from '../utils/actions';

export default ({ dispatch }) => (next) => async (action) => {
  if (!action.meta || !action.meta.rest || !action.meta.rest.url) {
    return next(action);
  }

  const { url, options = { method: 'GET' }, transformer, mock } = action.meta.rest;

  dispatch({ type: apiRequestType(action.type) });

  try {
    if (mock) {
      fetchMock[options.method.toLowerCase()](url, mock);
    }

    const response = await fetch(url, options);

    if (mock) {
      fetchMock.restore();
    }

    if (!response.ok) {
      throw response;
    }

    const payload = typeof response.json === 'function' ? await response.json() : response;

    return dispatch({
      type: apiSuccessType(action.type),
      payload: typeof transformer === 'function' ? transformer(payload) : payload,
    });
  } catch (e) {
    return dispatch({
      type: apiFailureType(action.type),
      error: true,
      payload: e,
    });
  }
};
