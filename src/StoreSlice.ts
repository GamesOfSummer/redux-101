import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  name: string;
  quantity: number;
}

export interface StoreState {
  cart: Array<Item>;
}

const initialState: StoreState = {
  cart: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cart.push({ name: "Dummy Item", quantity: 1 });
    },

    addToCartMerge: (state, action: PayloadAction<any>) => {
      console.log(action);
      const todo = state.cart.find((todo) => todo.name === action.payload);
      if (todo) {
        todo.quantity++;
      }
    },
  },
});

export const { addToCart, addToCartMerge } = storeSlice.actions;

export default storeSlice.reducer;
