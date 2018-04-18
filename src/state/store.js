import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducers, StoreRecord } from './ducks/index';

export const history = createHistory();

export const configureStore = (initialState = StoreRecord()) => {
  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }

    middleware.push(logger);
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const rootReducer = combineReducers(reducers, StoreRecord);

  return createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
};

export default configureStore();
