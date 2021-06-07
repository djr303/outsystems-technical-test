import { applyMiddleware, createStore, } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import * as api from './api';
import rootEpic from './albumsEpics';
import rootReducer from './albumsReducer';
import { composeEnhancers } from './utils';

export const epicMiddleware = createEpicMiddleware<
  any,
  any,
  any,
  any
>({
  dependencies: api,
});

const configureStore = (initialState?: any) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const createdStore = createStore(rootReducer, initialState!, enhancer);

  epicMiddleware.run(rootEpic);
  return createdStore;
};

const store = configureStore({});

export default store;