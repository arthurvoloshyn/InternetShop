import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { stringMiddleware, logMiddleware, getLocalStorageMiddleware, setLocalStorageMiddleware } from '../middlewares';
import { delayedActionCreator } from '../actions';

import reducer from '../reducers';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const persisedState = getLocalStorageMiddleware();

const configureStore = preloadedState => createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(setLocalStorageMiddleware, thunkMiddleware, stringMiddleware, logMiddleware)));

const store = configureStore(persisedState);

store.dispatch(delayedActionCreator(3000));

export default store;
