import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import StateRecord from './records';

const initialState = StateRecord();

export default (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', fromJS(action.payload));
  }

  return state;
};
