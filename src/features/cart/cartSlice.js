import { createSlice } from "@reduxjs/toolkit";
// initial state
const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterraan",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
//creating a cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find(item => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
// getting cart from the Redux store
export const getCart = state => state.cart.cart;

// computing the  total quantity of cart
export const getTotalCartQuantity = state =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// computing the totalPrice of cart
export const getTotalCartPrice = state =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
