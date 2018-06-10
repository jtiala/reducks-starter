import { OrderedSet } from 'immutable';
import reducer, { records, initialState, selectors, types, operations } from '.';
import { repositories as repositoriesData } from './mocks';
import { StoreRecord } from '../index';

describe('Repositories', () => {
  const testRepository = records.Repository(repositoriesData[0]);

  describe('Selectors', () => {
    test('getRepositories', () => {
      let state = StoreRecord();
      expect(selectors.getRepositories(state).size).toBe(0);

      state = StoreRecord({
        repositories: records.Repositories({
          data: OrderedSet([testRepository]),
        }),
      });
      expect(selectors.getRepositories(state).size).toBe(1);
    });

    test('hasRepositories', () => {
      let state = StoreRecord();
      expect(selectors.hasRepositories(state)).toBe(false);

      state = StoreRecord({
        repositories: records.Repositories({
          data: OrderedSet([testRepository]),
        }),
      });
      expect(selectors.hasRepositories(state)).toBe(true);
    });
  });

  describe('Actions', () => {
    test(types.CLEAR, () => {
      const operation = operations.clear();
      expect(operation).toEqual({ type: types.CLEAR });
    });
  });

  describe('Reducers', () => {
    test('Without params', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });

    test(types.CLEAR, () => {
      const state = reducer(initialState, operations.clear());
      expect(state.get('data').size).toBe(initialState.get('data').size);
    });
  });
});
