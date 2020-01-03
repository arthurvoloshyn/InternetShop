import React from 'react';

import { getDisplayName } from '../../utils';

import { BookstoreServiceConsumer } from '../../context/bookstore-service-context';

const withBookstoreService = () => Wrapped => {
  const withBookstoreService = props => <BookstoreServiceConsumer>{bookstoreService => <Wrapped {...props} bookstoreService={bookstoreService} />}</BookstoreServiceConsumer>;

  withBookstoreService.displayName = `withBookstoreService(${getDisplayName(Wrapped)})`;

  return withBookstoreService;
};

export default withBookstoreService;
