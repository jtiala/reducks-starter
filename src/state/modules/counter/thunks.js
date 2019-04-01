import { push } from 'connected-react-router';
import { reset } from './actions';

export const resetAndGotoHome = () => (dispatch) => {
  dispatch(reset());
  dispatch(push('/'));
};
