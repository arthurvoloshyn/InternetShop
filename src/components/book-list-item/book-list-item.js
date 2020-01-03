import React from 'react';
import PropTypes from 'prop-types';

import './book-list-item.css';

const BookListItem = ({ title, author, price, coverImage, onAddedToCart }) => (
  <div className="book-list-item">
    <div className="book-cover">
      <img src={coverImage} alt="cover" />
    </div>
    <div className="book-details">
      <span className="book-title">{title}</span>
      <div className="book-author">{author}</div>
      <div className="book-price">${price}</div>
      <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
        Add to cart
      </button>
    </div>
  </div>
);

BookListItem.propTypes = {
  onAddedToCart: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  coverImage: PropTypes.string
};

BookListItem.defaultProps = {
  onAddedToCart: () => {},
  title: '',
  author: '',
  price: 0,
  coverImage: ''
};

export default BookListItem;
