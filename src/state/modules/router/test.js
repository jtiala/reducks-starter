import { Map } from 'immutable';
import reducer, { records, initialState, selectors, types, operations } from '.';
import { StoreRecord } from '../index';

describe('Router', () => {
  const testLocation = Map({
    pathname: '/',
    search: '',
    hash: '',
    key: 'f0Ob4R',
  });

  describe('Selectors', () => {
    test('getLocation', () => {
      let state = StoreRecord();
      expect(selectors.getLocation(state)).toBe(initialState.get('location'));

      state = StoreRecord({ router: records.Router({ location: testLocation }) });
      expect(selectors.getLocation(state)).toBe(testLocation);
    });
  });

  describe('Actions', () => {
    test(types.LOCATION_CHANGE, () => {
      const operation = operations.changeLocation(testLocation);
      expect(operation).toEqual({ type: types.LOCATION_CHANGE, payload: testLocation });
    });
  });

  describe('Reducers', () => {
    test('Without params', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });

    test(types.LOCATION_CHANGE, () => {
      const state = reducer(initialState, operations.changeLocation(testLocation));
      expect(state.get('location')).toEqual(testLocation);
    });
  });
});
