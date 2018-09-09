import reducer, { records, initialState, selectors, types, operations } from '.';
import { mocks, transformers } from '../../apis/github';
import { StoreRecord } from '../index';
import { apiRequestType, apiSuccessType, apiFailureType } from '../../utils/actions';

describe('Repositories', () => {
  const getRepositoriesSuccessPayload =
    transformers.getRepositories(mocks.getRepositoriesSuccess.body);
  const getRepositoriesFailurePayload = mocks.getRepositoriesFailure.body;

  describe('data', () => {
    test('Initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.getRepositories(store).size).toBe(0);
      expect(selectors.hasRepositories(store)).toBe(false);
    });

    test(apiSuccessType(types.FETCH_REPOSITORIES), () => {
      const state = reducer(initialState, {
        type: apiSuccessType(types.FETCH_REPOSITORIES),
        payload: getRepositoriesSuccessPayload,
      });

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.getRepositories(store).size).toBe(mocks.getRepositoriesSuccess.body.length);
      expect(selectors.hasRepositories(store)).toBe(true);
    });

    test(apiFailureType(types.FETCH_REPOSITORIES), () => {
      const state = reducer(initialState, {
        type: apiFailureType(types.FETCH_REPOSITORIES),
        payload: getRepositoriesFailurePayload,
      });

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.getRepositories(store).size).toBe(0);
      expect(selectors.hasRepositories(store)).toBe(false);
    });

    test(types.CLEAR, () => {
      let state = reducer(records.Repositories({
        data: getRepositoriesSuccessPayload,
      }));

      let store = StoreRecord({
        repositories: state,
      });

      expect(selectors.hasRepositories(store)).toBe(true);

      state = reducer(state, operations.clear());

      store = StoreRecord({
        repositories: state,
      });

      expect(selectors.getRepositories(store).size).toBe(0);
      expect(selectors.hasRepositories(store)).toBe(false);
    });
  });

  describe('status', () => {
    test('Initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.isFetching(store)).toBe(false);
      expect(selectors.getError(store)).toBeUndefined();
      expect(selectors.hasError(store)).toBe(false);
    });

    test(apiRequestType(types.FETCH_REPOSITORIES), () => {
      const state = reducer(initialState, {
        type: apiRequestType(types.FETCH_REPOSITORIES),
      });

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.isFetching(store)).toBe(true);
    });

    test(apiSuccessType(types.FETCH_REPOSITORIES), () => {
      const state = reducer(initialState, {
        type: apiSuccessType(types.FETCH_REPOSITORIES),
        payload: getRepositoriesSuccessPayload,
      });

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.isFetching(store)).toBe(false);
      expect(selectors.getError(store)).toBeUndefined();
      expect(selectors.hasError(store)).toBe(false);
    });

    test(apiFailureType(types.FETCH_REPOSITORIES), () => {
      const state = reducer(initialState, {
        type: apiFailureType(types.FETCH_REPOSITORIES),
        payload: getRepositoriesFailurePayload,
      });

      const store = StoreRecord({
        repositories: state,
      });

      expect(selectors.isFetching(store)).toBe(false);
      expect(selectors.getError(store)).toBeDefined();
      expect(selectors.hasError(store)).toBe(true);
    });

    test(types.CLEAR, () => {
      let state = reducer(initialState, {
        type: apiFailureType(types.FETCH_REPOSITORIES),
        payload: mocks.getRepositoriesFailure.body,
      });

      let store = StoreRecord({
        repositories: state,
      });

      expect(selectors.hasError(store)).toBe(true);

      state = reducer(state, operations.clear());

      store = StoreRecord({
        repositories: state,
      });

      expect(selectors.isFetching(store)).toBe(false);
      expect(selectors.getError(store)).toBeUndefined();
      expect(selectors.hasError(store)).toBe(false);
    });
  });
});
