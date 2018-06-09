import { LOCATION_CHANGE } from 'react-router-redux';
import { Record, fromJS } from 'immutable';

// Records
const Router = Record({
  location: null,
});

export const records = {
  Router,
};

// Reducer
export const initialState = Router();

export default (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', fromJS(action.payload));
  }

  return state;
};
