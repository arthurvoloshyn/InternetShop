import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART } from '../constants';

const booksRequested = () => ({
  type: FETCH_BOOKS_REQUEST
});

const booksLoaded = newBooks => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
});

const booksError = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error
});

export const bookAddedToCart = bookId => ({
  type: BOOK_ADDED_TO_CART,
  payload: bookId
});

export const bookRemovedFromCart = bookId => ({
  type: BOOK_REMOVED_FROM_CART,
  payload: bookId
});

export const allBooksRemovedFromCart = bookId => ({
  type: ALL_BOOKS_REMOVED_FROM_CART,
  payload: bookId
});

/* eslint-disable no-unused-vars */
const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};
/* eslint-enable */

const fetchBooks = bookstoreService => () => dispatch => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};

export { fetchBooks };
