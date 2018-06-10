import { Repositories } from './records';
import * as types from './types';

export const initialState = Repositories();

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CLEAR:
      return initialState;
    default:
      return state;
  }
};
