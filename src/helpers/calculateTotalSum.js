export const calculateTotalSum = (state) => {
  const cartItems = state.cart.cart;

  let totalSum = cartItems.reduce(function (sum, current) {
    return sum + current.price * current.qty;
  }, 0);

  return totalSum;
};
