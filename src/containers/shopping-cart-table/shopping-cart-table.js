import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';

import ShoppingCartRow from '../../components/shopping-cart-row';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => (
  <div className="shopping-cart-table">
    <h2>Your Order</h2>

    {items?.length ? (
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
            {items.map(({ id, title, count, total }, idx) => (
              <ShoppingCartRow key={idx} idx={idx} id={id} title={title} count={count} total={total} onIncrease={onIncrease} onDecrease={onDecrease} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    ) : null}

    <div className="total">Total: ${total}</div>
  </div>
);

const mapStateToProps = ({ shoppingCart: { cartItems, totalOrder } }) => ({
  items: cartItems,
  total: totalOrder
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

ShoppingCartTable.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onDelete: PropTypes.func
};

ShoppingCartTable.defaultProps = {
  items: [],
  total: 0,
  onIncrease: () => {},
  onDecrease: () => {},
  onDelete: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
