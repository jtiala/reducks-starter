import { Record } from 'immutable';
import counter, { records as counterRecords } from './counter';
import repositories, { records as repositoriesRecords } from './repositories';

export const reducers = {
  counter,
  repositories,
};

export const StoreRecord = Record({
  counter: counterRecords.Counter(),
  repositories: repositoriesRecords.Repositories(),
});
