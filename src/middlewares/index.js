import { styles } from '../constants';

export const logMiddleware = ({ getState }) => next => action => {
  const { type } = action;
  const result = next(action);
  const state = getState();
  const msg = `%c ${type} `;

  /* eslint-disable no-console */
  console.log(msg, styles, state);
  /* eslint-enable */

  return result;
};

export const stringMiddleware = () => next => action => {
  const result = next(action);

  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  return result;
};

export const setLocalStorageMiddleware = ({ getState }) => next => action => {
  const result = next(action);
  const state = getState();
  const serializedState = JSON.stringify(state);

  localStorage.setItem('re-store', serializedState);

  return result;
};

export const getLocalStorageMiddleware = () => {
  try {
    const serializedState = localStorage.getItem('re-store');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};
