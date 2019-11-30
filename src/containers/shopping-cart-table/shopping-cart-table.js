import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartRow from '../../components/shopping-cart-row';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart } from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => (
  <div className="shopping-cart-table">
    <h2>Your Order</h2>

    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => (
            <ShoppingCartRow
              key={idx}
              item={item}
              idx={idx}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>

    <div className="total">
      Total: ${total}
    </div>
  </div>
);

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => ({
  items: cartItems,
  total: orderTotal
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
