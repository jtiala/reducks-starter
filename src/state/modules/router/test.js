import reducer, {
  records, initialState, selectors, types, actions,
} from '.';
import { StoreRecord } from '../index';

describe('Router', () => {
  const testLocation = records.Location({
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
      const action = actions.changeLocation(testLocation);
      expect(action).toEqual({ type: types.LOCATION_CHANGE, payload: testLocation });
    });
  });

  describe('Reducers', () => {
    test('Without params', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });

    test(types.LOCATION_CHANGE, () => {
      const state = reducer(initialState, actions.changeLocation(testLocation));
      expect(state.get('location')).toEqual(testLocation);
    });
  });
});
