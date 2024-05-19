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
  page: 1,
  totalCount: 0, //Общее кол-во товаров
  limit: 3, //Лимит товаров на странице
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
      state.page = 1;
      state.selectedType = payload;
    },
    setSelectedBrand(state, { payload }: PayloadAction<IBrand>) {
      state.page = 1;
      state.selectedBrand = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setTotalCount(state, { payload }: PayloadAction<number>) {
      state.totalCount = payload;
    },
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload;
    },
  },
});

export default deviceSlice.reducer;
