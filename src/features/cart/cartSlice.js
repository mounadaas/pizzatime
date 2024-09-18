import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item to cart
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    // delet item from cart
    deletItem(state, action) {
      // payload = pizzaID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    // increaseItemQuantity
    increaseItemQuantity(state, action) {
      // payload = pizzaID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    // decreaseItemQuantity
    decreaseItemQuantity(state, action) {
      // payload = pizzaID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deletItem(state, action);
    },
    // delet cart
    deletCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deletItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  deletCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
