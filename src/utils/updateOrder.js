const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateTotalOrder = (cartItems, val) => {
  let total = 0;

  cartItems.forEach(obj => {
    total += obj[val];
  });

  return total;
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  const newItems = updateCartItems(cartItems, newItem, itemIndex);

  const orderTotal = updateTotalOrder(newItems, 'total');
  const countTotal = updateTotalOrder(newItems, 'count');

  return {
    orderTotal,
    countTotal,
    cartItems: newItems
  };
};

export default updateOrder;
