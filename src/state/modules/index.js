import { Record } from 'immutable';
import counter, { records as counterRecords } from './counter';
import repositories, { records as repositoriesRecords } from './repositories';
import router, { records as routerRecords } from './router';

export const reducers = {
  counter,
  repositories,
  router,
};

export const StoreRecord = Record({
  counter: counterRecords.Counter(),
  repositories: repositoriesRecords.Repositories(),
  router: routerRecords.Router(),
});
