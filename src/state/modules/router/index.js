import { LOCATION_CHANGE } from 'react-router-redux';
import { Record } from 'immutable';

// Records
const Location = Record({
  pathname: undefined,
  search: undefined,
  hash: undefined,
  key: undefined,
});

const Router = Record({
  location: Location(),
});

export const records = {
  Location,
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
    return state.set('location', Location(action.payload));
  }

  return state;
};
