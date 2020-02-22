import { BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART, quantity } from '../constants';

import { updateOrder } from '../utils';

const initialState = {
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
    countTotal: 0
  }
};

const updateShoppingCart = (state = initialState, { type, payload }) => {
  const { negativeQuantity, positiveQuantity } = quantity;

  switch (type) {
    case BOOK_ADDED_TO_CART: {
      return updateOrder(state, payload, positiveQuantity);
    }

    case BOOK_REMOVED_FROM_CART: {
      return updateOrder(state, payload, negativeQuantity);
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
