import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  name: string;
  quantity: number;
}

export interface CartState {
  cart: Array<Item>;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ name: string }>) => {
      state.cart.push({ name: action.payload.name, quantity: 1 });
    },

    addToCartMerge: (state, action: PayloadAction<{ name: string }>) => {
      const item = state.cart.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ name: action.payload.name, quantity: 1 });
      }
    },
  },
});

export const { addToCart, addToCartMerge } = cartSlice.actions;

export default cartSlice.reducer;
