import { combineReducers } from 'redux-immutable';
import { Repositories } from './records';
import * as types from './types';
import { apiRequestType, apiSuccessType, apiFailureType } from '../../utils/actions';

export const initialState = Repositories();

const dataReducer = (state = initialState.data, action = {}) => {
  switch (action.type) {
    case apiSuccessType(types.FETCH_REPOSITORIES):
      return action.payload;
    case apiFailureType(types.FETCH_REPOSITORIES):
    case types.CLEAR:
      return initialState.data;
    default:
      return state;
  }
};

const statusReducer = (state = initialState.status, action = {}) => {
  switch (action.type) {
    case apiRequestType(types.FETCH_REPOSITORIES):
      return state
        .set('fetching', true)
        .set('error', undefined);
    case apiSuccessType(types.FETCH_REPOSITORIES):
      return state.set('fetching', false);
    case apiFailureType(types.FETCH_REPOSITORIES):
      return state
        .set('fetching', false)
        .set('error', action.payload);
    case types.CLEAR:
      return initialState.status;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
  status: statusReducer,
}, Repositories);
