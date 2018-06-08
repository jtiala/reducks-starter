import { LOCATION_CHANGE } from 'react-router-redux';
import { Record, fromJS } from 'immutable';

// Record
export const Router = Record({
  location: null,
});

// Reducer
export const initialState = Router();

export default (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', fromJS(action.payload));
  }

  return state;
};
