import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasketState, IBasket } from "./types";

const initialState = <BasketState>{
  basket: [],
  isBasket: false,
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDevice(state, { payload }: PayloadAction<IBasket[]>) {
      state.basket = payload;
    },
    deleteDevice(state, { payload }: PayloadAction<number>) {
      state.basket = state.basket.filter((device) => device.id !== payload);
    },
    hasIsBasket(state, { payload }: PayloadAction<boolean>) {
      state.isBasket = payload;
    },
    setCount(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    },
  },
});

export default basketSlice.reducer;
