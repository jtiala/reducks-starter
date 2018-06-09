import { Record } from 'immutable';
import counter, { records as counterRecords } from './counter';
import router, { records as routerRecords } from './router';

export const reducers = {
  counter,
  router,
};

export const StoreRecord = Record({
  counter: counterRecords.Counter(),
  router: routerRecords.Router(),
});
