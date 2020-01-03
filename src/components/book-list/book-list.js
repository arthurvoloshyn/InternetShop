import React from 'react';
import PropTypes from 'prop-types';

import BookListItem from '../book-list-item';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => (
  <ul className="book-list">
    {books.map(({ title, author, price, coverImage, id }) => (
      <li key={id}>
        <BookListItem title={title} author={author} price={price} coverImage={coverImage} onAddedToCart={() => onAddedToCart(id)} />
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  onAddedToCart: PropTypes.func,
  books: PropTypes.array
};

BookList.defaultProps = {
  onAddedToCart: () => {},
  books: []
};

export default BookList;
