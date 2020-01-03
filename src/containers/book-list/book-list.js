import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withBookstoreService } from '../../hocs/hoc';

import { fetchBooks, bookAddedToCart } from '../../actions';

import BookList from '../../components/book-list';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) =>
  bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart
    },
    dispatch
  );

BookListContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  fetchBooks: PropTypes.func,
  onAddedToCart: PropTypes.func,
  books: PropTypes.array
};

BookListContainer.defaultProps = {
  loading: false,
  error: {},
  fetchBooks: () => {},
  onAddedToCart: () => {},
  books: []
};

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
