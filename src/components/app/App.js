import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = ({ count, total }) => (
  <main role="main" className="container">
    <ShopHeader numItems={count} total={total} />

    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact />

      <Route
        path="/cart"
        component={CartPage}
        />
    </Switch>
  </main>
);

const mapStateToProps = ({ shoppingCart: { countTotal, orderTotal }}) => ({
  count: countTotal,
  total: orderTotal
});

export default connect(mapStateToProps)(App);
