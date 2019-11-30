import { load } from 'redux-localstorage-simple';

let initialState = load({ namespace: 're-store' });

if (!initialState || !initialState.bookList || !initialState.bookList.length) {
  initialState = {
    bookList: {
      books: [],
      loading: true,
      error: null
    },
  }
}

const updateBookList = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
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
