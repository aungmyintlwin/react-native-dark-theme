import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';


import appStateReducer from '../reducer/appState';


const appReducer = combineReducers({
  app: appStateReducer,
});



const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});
export default store;