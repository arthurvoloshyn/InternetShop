import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import BookstoreService from '../../services/bookstore-service';

import { BookstoreServiceProvider } from '../../context/bookstore-service-context';

import store from '../../store/';

import ShopHeader from '../../containers/shop-header';

import ErrorBoundry from '../error-boundry';
import { HomePage, CartPage } from '../pages';

const bookstoreService = new BookstoreService();

const App = () => (
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <main className="container">
            <ShopHeader />

            <Switch>
              <Route path="/" component={HomePage} exact />

              <Route path="/cart" component={CartPage} />
            </Switch>
          </main>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);

export default App;
