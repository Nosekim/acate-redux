import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICart, IProduct, ICartState } from "../../../types";
import { findItemInArray } from "./../../../util/findItemArray";
const initialState = {
  cart: [],
};

const CartData = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addNewItem: (state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItem: (state: ICart, action: PayloadAction<IProduct>) => {
      console.log("Payload", action.payload);
      console.log("Estado", state.cart);
      const { payload } = action;
      const itemPos = findItemInArray(state.cart, payload);
      state.cart.splice(itemPos, 1);
    },
  },
});

export const { addNewItem, removeItem } = CartData.actions;

export const cartStateData = (state: ICartState) => state.cart.cart;

export default CartData.reducer;
