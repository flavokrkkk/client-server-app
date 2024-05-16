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

  fetchAsyncDevices: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await DeviceService.fetchDevices();
      dispatch(AsyncDataActions.setAsyncDevices(data.rows));
    } catch (err) {
      console.log(err);
    }
  },

  fetchAsyncDevice: (id: string) => async (dispatch: Dispatch) => {
    try {
      const response = await DeviceService.fetchDevice(id);
      console.log(response.data);
      dispatch(AsyncDataActions.setAsyncDevice(response.data));
    } catch (err) {
      console.log(err);
    }
  },
};
