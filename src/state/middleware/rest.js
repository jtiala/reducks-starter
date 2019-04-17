import { apiRequestType, apiSuccessType, apiFailureType } from '../utils/actions';

export default ({ dispatch }) => (next) => async (action) => {
  if (!action.meta || !action.meta.rest || !action.meta.rest.url) {
    return next(action);
  }

  const { url, options = { method: 'GET' }, transformer } = action.meta.rest;

  dispatch({ type: apiRequestType(action.type) });

  try {
    const response = await fetch(url, options);

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
