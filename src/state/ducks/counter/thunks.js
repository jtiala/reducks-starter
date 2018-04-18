import { push } from 'react-router-redux';
import { reset } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const resetAndGotoHome = () => (dispatch) => {
  dispatch(reset());
  dispatch(push('/'));
};
