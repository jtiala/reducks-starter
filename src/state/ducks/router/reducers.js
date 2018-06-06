import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import { Router } from './records';

export const initialState = Router();

export default (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', fromJS(action.payload));
  }

  return state;
};
