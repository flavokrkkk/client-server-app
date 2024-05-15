import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeviceState } from "./types";
import { IType } from "../../../models/IType";
import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";
import { IDescription } from "../../../models/IDescription";

export const initialState = <DeviceState>{
  types: [] as IType[],
  brands: [] as IBrand[],
  devices: [] as IDevice[],
  device: { info: [] as IDescription[] } as IDevice,
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
      state.brands = payload;
    },
    setDevices(state, { payload }: PayloadAction<IDevice[]>) {
      state.devices = payload;
    },
    setDevice(state, { payload }: PayloadAction<IDevice>) {
      state.device = payload;
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
