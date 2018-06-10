import { Counter } from './records';
import * as types from './types';

export const initialState = Counter();

export default (state = initialState, action = {}) => {
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
