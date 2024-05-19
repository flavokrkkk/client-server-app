import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasketState } from "./types";
import { IDevice } from "../../../models/IDevice";

const initialState = <BasketState>{
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDevice(state, { payload }: PayloadAction<IDevice>) {
      state.basket.push(payload);
    },
    deleteDevice(state, { payload }: PayloadAction<number>) {
      state.basket = state.basket.filter((device) => device.id !== payload);
    },
  },
});

export default basketSlice.reducer;
