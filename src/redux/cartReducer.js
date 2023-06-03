import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push({ ...payload, qty: 1 });
    },
    addQty: (state, { payload }) => {
      state.cart = state.cart.map((product) => {
        if (product.id === payload) {
          product.qty = product.qty + 1;
        }
        return product;
      });
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product.id !== payload);
    },
  },
});
