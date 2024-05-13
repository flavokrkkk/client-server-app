import { $authHost, $host } from "../../http";
import { IBrand } from "../../models/IBrand";
import { IDeviceData } from "../../models/IDeviceData";
import { IType } from "../../models/IType";
import { deviceSlice } from "../reducers/deviceSlice/deviceSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const AsyncDataActions = {
  setAsyncTypes: deviceSlice.actions.setTypes,
  setAsyncBrands: deviceSlice.actions.setBrand,
  setAsyncDevices: deviceSlice.actions.setDevice,

  fetchAsyncTypes: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await $host.get<IType[]>("api/type");
      dispatch(AsyncDataActions.setAsyncTypes(data));
    } catch (err) {
      console.log(err);
    }
  },

  createAsyncType: (type: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await $authHost.post<IType[]>("api/type", {
        type,
      });
      dispatch(AsyncDataActions.setAsyncTypes(data));
    } catch (err) {
      console.log(err);
    }
  },

  // - бренды

  fetchAsyncBrands: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await $host.get<IBrand[]>("api/brand");
      dispatch(AsyncDataActions.setAsyncBrands(data));
    } catch (err) {
      console.log(err);
    }
  },
  createAsyncBrand: (brand: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await $authHost.post<IBrand[]>("api/brand", {
        brand,
      });
      dispatch(AsyncDataActions.setAsyncTypes(data));
    } catch (err) {
      console.log(err);
    }
  },

  // - девайсы

  fetchAsyncDevices: () => async (dispatch: Dispatch) => {
    try {
      const { data } = await $host.get<IDeviceData>("api/device");
      dispatch(AsyncDataActions.setAsyncDevices(data.rows));
    } catch (err) {
      console.log(err);
    }
  },
};
