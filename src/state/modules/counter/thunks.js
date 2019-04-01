import { reset } from './actions';

export const resetAndGotoHome = () => (dispatch) => {
  dispatch(reset());
  // TODO: navigate to home
};
