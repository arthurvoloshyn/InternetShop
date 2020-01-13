import { BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART, amounts } from '../constants';

import { updateOrder } from '../utils';

const initialState = {
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
    countTotal: 0
  }
};

const updateShoppingCart = (state = initialState, { type, payload }) => {
  const { negativeAmount, positiveAmount } = amounts;

  switch (type) {
    case BOOK_ADDED_TO_CART: {
      return updateOrder(state, payload, positiveAmount);
    }

    case BOOK_REMOVED_FROM_CART: {
      return updateOrder(state, payload, negativeAmount);
    }

    case ALL_BOOKS_REMOVED_FROM_CART: {
      const {
        shoppingCart: { cartItems }
      } = state;
      const item = cartItems.find(({ id }) => id === payload);
      const { count } = item;
      return updateOrder(state, payload, -count);
    }

    default: {
      return state.shoppingCart;
    }
  }
};

export default updateShoppingCart;
