import { styles } from '../constants';

export const logMiddleware = ({ getState }) => next => action => {
  const { type } = action;
  /* eslint-disable no-console */
  console.log(`%c ${type} `, styles, getState());
  /* eslint-enable */
  return next(action);
};

export const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  return next(action);
};
