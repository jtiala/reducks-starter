import reducer, { records, initialState, selectors, types, operations } from '.';
import { StoreRecord } from '../index';

describe('Counter', () => {
  describe('Selectors', () => {
    test('getCount', () => {
      let state = StoreRecord();
      expect(selectors.getCount(state)).toBe(initialState.get('count'));

      state = StoreRecord({ counter: records.Counter({ count: 9001 }) });
      expect(selectors.getCount(state)).toBe(9001);
    });

    test('isCountNegative', () => {
      let state = StoreRecord({ counter: records.Counter({ count: 1 }) });
      expect(selectors.isCountNegative(state)).toBe(false);

      state = StoreRecord({ counter: records.Counter({ count: 0 }) });
      expect(selectors.isCountNegative(state)).toBe(false);

      state = StoreRecord({ counter: records.Counter({ count: -1 }) });
      expect(selectors.isCountNegative(state)).toBe(true);
    });

    test('isCountPositive', () => {
      let state = StoreRecord({ counter: records.Counter({ count: 1 }) });
      expect(selectors.isCountPositive(state)).toBe(true);

      state = StoreRecord({ counter: records.Counter({ count: 0 }) });
      expect(selectors.isCountPositive(state)).toBe(false);

      state = StoreRecord({ counter: records.Counter({ count: -1 }) });
      expect(selectors.isCountPositive(state)).toBe(false);
    });
  });

  describe('Actions', () => {
    test(types.INCREMENT, () => {
      const operation = operations.increment();
      expect(operation).toEqual({ type: types.INCREMENT });
    });

    test(types.DECREMENT, () => {
      const operation = operations.decrement();
      expect(operation).toEqual({ type: types.DECREMENT });
    });

    test(types.RESET, () => {
      const operation = operations.reset();
      expect(operation).toEqual({ type: types.RESET });
    });
  });

  describe('Thunks', () => {
    test('resetAndGotoHome', () => {
      const operation = operations.resetAndGotoHome();
      expect(typeof operation).toEqual('function');
    });
  });

  describe('Reducers', () => {
    test('Without params', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });

    test(types.INCREMENT, () => {
      let state = reducer(initialState, operations.increment());
      expect(state.get('count')).toBe(initialState.get('count') + 1);

      state = reducer(state, operations.increment());
      expect(state.get('count')).toBe(initialState.get('count') + 2);
    });

    test(types.DECREMENT, () => {
      let state = reducer(initialState, operations.decrement());
      expect(state.get('count')).toBe(initialState.get('count') - 1);

      state = reducer(state, operations.decrement());
      expect(state.get('count')).toBe(initialState.get('count') - 2);
    });

    test(types.RESET, () => {
      let state = reducer(initialState, operations.increment());
      expect(state.get('count')).toBe(initialState.get('count') + 1);

      state = reducer(state, operations.reset());
      expect(state.get('count')).toBe(initialState.get('count'));
    });
  });
});
