import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartData from "./modules/cart/reducer";
import productsData from "./modules/products/reducer";

const rootReducers = combineReducers({
  cart: cartData,
  products: productsData,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
