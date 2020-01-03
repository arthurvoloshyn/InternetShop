import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { save } from 'redux-localstorage-simple';

import { stringMiddleware, logMiddleware } from '../middlewares';

import { DELAYED_ACTION } from '../constants';

import reducer from '../reducers';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(save({ namespace: 're-store' }), thunkMiddleware, stringMiddleware, logMiddleware)));

const delayedActionCreator = timeout => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: DELAYED_ACTION
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(3000));

export default store;
