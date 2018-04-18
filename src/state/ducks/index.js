import { Record } from 'immutable';
import counter from './counter';
import router from './router';

export const reducers = {
  counter,
  router,
};

export const StoreRecord = Record({
  counter: undefined,
  router: undefined,
});
