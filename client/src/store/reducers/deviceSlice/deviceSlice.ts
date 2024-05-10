import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { brands, devices, types } from "../../../utils/mockData";
import { DeviceState } from "./types";
import { IType } from "../../../models/IType";
import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";

export const initialState = <DeviceState>{
  type: types,
  brand: brands,
  device: devices,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setTypes(state, { payload }: PayloadAction<IType[]>) {
      state.type = payload;
    },
    setBrand(state, { payload }: PayloadAction<IBrand[]>) {
      state.type = payload;
    },
    setDevice(state, { payload }: PayloadAction<IDevice[]>) {
      state.type = payload;
    },
  },
});

export default deviceSlice.reducer;
