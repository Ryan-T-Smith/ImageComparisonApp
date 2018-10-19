import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
//TODO create loggerMiddleWare and monitorReducersEnhancer : Jeremy 10/19/18
// reference: https://redux.js.org/recipes/configuringyourstore
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from '../middleware/logger'

import rootReducer from '../reducers/RootReducer';

export const configureStore = (preloadedState) => {
  const middlewares = [
    // loggerMiddleware,
    thunkMiddleware
  ]

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [
    middlewareEnhancer,
    // monitorReducersEnhancer
  ];

  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};