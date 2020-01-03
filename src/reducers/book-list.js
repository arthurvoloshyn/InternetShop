import { load } from 'redux-localstorage-simple';

import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../constants';

let initialState = load({ namespace: 're-store' });

if (!initialState || !initialState.bookList || !initialState.books) {
  initialState = {
    bookList: {
      books: [],
      loading: true,
      error: null
    }
  };
}

const updateBookList = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        books: payload,
        loading: false,
        error: null
      };

    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: payload
      };

    default:
      return state.bookList;
  }
};

export default updateBookList;
