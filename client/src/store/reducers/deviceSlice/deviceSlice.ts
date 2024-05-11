import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { brands, devices, types } from "../../../utils/mockData";
import { DeviceState } from "./types";
import { IType } from "../../../models/IType";
import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";

export const initialState = <DeviceState>{
  types: types,
  brands: brands,
  devices: devices,
  selectedType: {},
  selectedBrand: {},
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
    setSelectedType(state, { payload }: PayloadAction<IType>) {
      state.selectedType = payload;
    },
    setSelectedBrand(state, { payload }: PayloadAction<IBrand>) {
      state.selectedBrand = payload;
    },
  },
});

export default deviceSlice.reducer;
