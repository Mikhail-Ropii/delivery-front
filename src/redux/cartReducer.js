import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  cart: [],
  sum: 0,
  shopLocation: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    setShopLocation: (state, { payload }) => {
      state.shopLocation = { ...payload };
    },
    minusQty: (state, { payload }) => {
      state.cart.map((product) => {
        if (product._id === payload) {
          product.qty -= 1;
          product.totalPrice = product.qty * product.price;
        }
        return product;
      });
    },
    plusQty: (state, { payload }) => {
      state.cart.map((product) => {
        if (product._id === payload) {
          product.qty += 1;
          product.totalPrice = product.qty * product.price;
        }
        return product;
      });
    },
    changeSum: (state) => {
      state.sum = state.cart.reduce((sum, current) => {
        return sum + current.price * current.qty;
      }, 0);
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product._id !== payload);
    },
    resetCart: (state) => {
      return (state = initialValue);
    },
  },
});
