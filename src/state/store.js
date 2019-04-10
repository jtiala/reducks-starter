import { Record } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import browserHistory from './history';
import restMiddleware from './middleware/rest';
import counter, { records as counterRecords } from './modules/counter';
import repositories, { records as repositoriesRecords } from './modules/repositories';

export const StoreRecord = Record({
  counter: counterRecords.Counter(),
  repositories: repositoriesRecords.Repositories(),
  router: undefined,
});

export const configureStore = (initialState = StoreRecord()) => {
  const reducers = {
    router: connectRouter(browserHistory),
    counter,
    repositories,
  };

  const rootReducer = combineReducers(reducers, initialState);
  const enhancers = [];
  const middleware = [routerMiddleware(browserHistory), restMiddleware, thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    } else {
      middleware.push(loggerMiddleware);
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  return createStore(rootReducer, initialState, composedEnhancers);
};

export default configureStore();
