import { LOCATION_CHANGE } from 'react-router-redux';
import { Record, fromJS } from 'immutable';

// Records
const Router = Record({
  location: null,
});

export const records = {
  Router,
};

// Initial state
export const initialState = Router();

// Selectors
export const selectors = {
  getLocation: state => state.getIn(['router', 'location']),
};

// Types
export const types = {
  LOCATION_CHANGE,
};

// Operations
export const operations = {
  changeLocation: location => ({
    type: LOCATION_CHANGE,
    payload: location,
  }),
};

// Reducer
export default (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', fromJS(action.payload));
  }

  return state;
};
