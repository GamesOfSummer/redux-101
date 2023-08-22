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
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cart.push({ name: "Dummy Item", quantity: 1 });
    },
  },
});

export const { addToCart } = storeSlice.actions;

export default storeSlice.reducer;
