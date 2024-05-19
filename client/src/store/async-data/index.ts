import { $authHost } from "../../http";
import { DeviceService } from "../../http/deviceApi";
import { IBrand } from "../../models/IBrand";
import { IType } from "../../models/IType";
import { deviceSlice } from "../reducers/deviceSlice/deviceSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const AsyncDataActions = {
  setAsyncTypes: deviceSlice.actions.setTypes,
  setAsyncBrands: deviceSlice.actions.setBrand,
  setAsyncDevices: deviceSlice.actions.setDevices,
  setAsyncDevice: deviceSlice.actions.setDevice,
  setTotalCount: deviceSlice.actions.setTotalCount,

  fetchAsyncTypes: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await DeviceService.fetchTypes();
      dispatch(AsyncDataActions.setAsyncTypes(data));
    } catch (err) {
      console.log(err);
    }
  },

  createAsyncTypes: (type: IType) => async () => {
    const { data } = await DeviceService.createType(type);
    return data;
  },

  // - бренды

  fetchAsyncBrands: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await DeviceService.fetchBrands();
      dispatch(AsyncDataActions.setAsyncBrands(data));
    } catch (err) {
      console.log(err);
    }
  },

  createAsyncBrand: (brand: IBrand) => async () => {
    const { data } = await DeviceService.createBrand(brand);
    return data;
  },

  // - девайсы

  fetchAsyncDevices:
    (
      typeId: number | null,
      brandId: number | null,
      page: number,
      limit: number = 5,
    ) =>
    async (dispatch: Dispatch) => {
      try {
        const { data } = await DeviceService.fetchDevices(
          typeId,
          brandId,
          page,
          limit,
        );
        dispatch(AsyncDataActions.setTotalCount(data.count));
        dispatch(AsyncDataActions.setAsyncDevices(data.rows));
      } catch (err) {
        console.log(err);
      }
    },

  fetchAsyncDevice: (id: string) => async (dispatch: Dispatch) => {
    try {
      const response = await DeviceService.fetchDevice(id);
      dispatch(AsyncDataActions.setAsyncDevice(response.data));
    } catch (err) {
      console.log(err);
    }
  },

  createAsyncDevice: (device: FormData) => async () => {
    const { data } = await $authHost.post("api/device", device);
    return data;
  },
};
