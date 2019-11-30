import { load } from 'redux-localstorage-simple';
import { amounts, updateOrder } from '../utils';

let initialState = load({ namespace: 're-store' });

if (!initialState || !initialState.shoppingCart || !initialState.shoppingCart.length) {
  initialState = {
    shoppingCart: {
      cartItems: [],
      orderTotal: 0,
      countTotal: 0,
    },
  }
}

const updateShoppingCart = (state = initialState, { type, payload }) => {
  const { negativeAmount, positiveAmount } = amounts;

  switch(type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, payload, positiveAmount);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, payload, negativeAmount);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === payload);
      return updateOrder(state, payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
