//Create the store by calling configureStore and passing an object with a reducer property. This property is an object where we assign the user slice to the imported userReducer. Finally, export the store.
// Configuring the Redux Store

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
