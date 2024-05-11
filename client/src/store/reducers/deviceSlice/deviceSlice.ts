import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { brands, devices, types } from "../../../utils/mockData";
import { DeviceState, SelectableType } from "./types";
import { IType } from "../../../models/IType";
import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";

export const initialState = <DeviceState>{
  types: types,
  brands: brands,
  devices: devices,
  selected: {},
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setTypes(state, { payload }: PayloadAction<IType[]>) {
      state.types = payload;
    },
    setBrand(state, { payload }: PayloadAction<IBrand[]>) {
      state.types = payload;
    },
    setDevice(state, { payload }: PayloadAction<IDevice[]>) {
      state.types = payload;
    },
    setSelected(state, { payload }: PayloadAction<SelectableType>) {
      state.selected = payload;
    },
  },
});

export default deviceSlice.reducer;
