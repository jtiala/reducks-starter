import { push } from 'react-router-redux';
import { reset } from './actions';

export const resetAndGotoHome = () => (dispatch) => {
  dispatch(reset());
  dispatch(push('/'));
};
