import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ count, total }) => (
  <header className="shop-header row">
    <Link to="/">
      <div className="logo text-dark">InternetShop</div>
    </Link>
    <Link to="/cart">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {count} items (${total})
      </div>
    </Link>
  </header>
);

const mapStateToProps = ({ shoppingCart: { totalCount, totalOrder } }) => ({
  count: totalCount,
  total: totalOrder
});

ShopHeader.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number
};

ShopHeader.defaultProps = {
  count: 0,
  total: 0
};

export default connect(mapStateToProps)(ShopHeader);
