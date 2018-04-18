import stateRecord from './records';
import * as types from './types';

const initialState = stateRecord();

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state.set('count', state.get('count') + 1);
    case types.DECREMENT:
      return state.set('count', state.get('count') - 1);
    case types.RESET:
      return initialState;
    default:
      return state;
  }
};
