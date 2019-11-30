import React, { Component } from 'react';
import BookList from '../../components/book-list';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withBookstoreService } from '../../hocs/hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
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

const mapStateToProps = ({ bookList: { books, loading, error }}) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => (
  bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch)
);

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
