import React from 'react';
import BookList from '../../containers/book-list';
import ShoppingCartTable from '../../containers/shopping-cart-table';

const HomePage = () => (
  <div>
    <BookList />
    <ShoppingCartTable />
  </div>
);

export default HomePage;
