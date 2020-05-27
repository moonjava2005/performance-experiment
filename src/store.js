import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers';

const middleWares = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleWares.push(createDebugger());
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));
export default store;
