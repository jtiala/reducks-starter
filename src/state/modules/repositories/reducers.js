import { combineReducers } from 'redux-immutable';
import { OrderedSet } from 'immutable';
import { Repositories } from './records';
import * as types from './types';

export const initialState = Repositories();

const dataReducer = (state = initialState.data, action = {}) => {
  switch (action.type) {
    case types.FETCH_REPOSITORIES_SUCCESS:
      return OrderedSet(action.payload);
    case types.FETCH_REPOSITORIES_FAILURE:
    case types.CLEAR:
      return initialState.data;
    default:
      return state;
  }
};

const statusReducer = (state = initialState.status, action = {}) => {
  switch (action.type) {
    case types.FETCH_REPOSITORIES_START:
      return state
        .set('fetching', true)
        .set('error', undefined);
    case types.FETCH_REPOSITORIES_SUCCESS:
      return state.set('fetching', false);
    case types.FETCH_REPOSITORIES_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
  status: statusReducer,
}, Repositories);
