const updateCartItems = (cartItems, item, idx) => {
  const { count } = item;
  const firstCartItems = cartItems.slice(0, idx);
  const lastCartItems = cartItems.slice(idx + 1);

  if (count === 0) {
    return [...firstCartItems, ...lastCartItems];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...firstCartItems, item, ...lastCartItems];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id: bookId, title: bookTitle, price: bookPrice } = book;
  const { id = bookId, count = 0, title = bookTitle, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * bookPrice
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
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  const newItems = updateCartItems(cartItems, newItem, itemIndex);

  const totalOrder = updateTotalOrder(newItems, 'total');
  const totalCount = updateTotalOrder(newItems, 'count');

  return {
    totalOrder,
    totalCount,
    cartItems: newItems
  };
};

export default updateOrder;
