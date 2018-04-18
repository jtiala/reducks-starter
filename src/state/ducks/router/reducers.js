import stateRecord from './records';
import * as types from './types';

const initialState = stateRecord();

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATION_CHANGE:
      return state
        .set('location', action.payload.location)
        .set('action', action.payload.action);
    default:
      return state;
  }
};
