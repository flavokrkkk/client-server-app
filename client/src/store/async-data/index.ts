import { DeviceService } from "../../http/deviceApi";
import { IBrand } from "../../models/IBrand";
import { IFetchDeviceParams } from "../../models/IFetchDevice";
import { IType } from "../../models/IType";
import { deviceSlice } from "../reducers/deviceSlice/deviceSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AsyncDataActions = {
  setAsyncTypes: deviceSlice.actions.setTypes,
  setAsyncBrands: deviceSlice.actions.setBrand,
  setAsyncDevices: deviceSlice.actions.setDevices,
  setAsyncDevice: deviceSlice.actions.setDevice,
  setTotalCount: deviceSlice.actions.setTotalCount,

  fetchAsyncTypes: createAsyncThunk(
    "types/fetchingAsyncTypes",
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await DeviceService.fetchTypes();
        dispatch(AsyncDataActions.setAsyncTypes(data));
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  ),

  createAsyncType: createAsyncThunk(
    "types/createAsyncTypes",
    async (type: IType, { rejectWithValue }) => {
      try {
        const { data } = await DeviceService.createType(type);
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  ),

  fetchAsyncBrands: createAsyncThunk(
    "brands/fetchAsyncBrands",
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await DeviceService.fetchBrands();
        dispatch(AsyncDataActions.setAsyncBrands(data));
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  ),

  createAsyncBrands: createAsyncThunk(
    "brands/createAsyncBrands",
    async (brand: IBrand, { rejectWithValue }) => {
      try {
        const { data } = await DeviceService.createBrand(brand);
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  ),

  fetchAsyncDevices: createAsyncThunk(
    "devices/fetchAsyncDevices",
    async (
      requestParams: IFetchDeviceParams,
      { dispatch, rejectWithValue },
    ) => {
      try {
        const { typeId, brandId, page, limit } = requestParams;
        const { data } = await DeviceService.fetchDevices(
          typeId,
          brandId,
          page,
          limit,
        );
        dispatch(AsyncDataActions.setAsyncDevices(data.rows));
        dispatch(AsyncDataActions.setTotalCount(data.count));
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  ),

  fetchAsyncDevice: createAsyncThunk(
    "devices/fetchAsyncDevice",
    async (id: string, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await DeviceService.fetchDevice(id);
        dispatch(AsyncDataActions.setAsyncDevice(data));
      } catch (err) {
        rejectWithValue(err);
      }
    },
  ),

  createAsyncDevice: createAsyncThunk(
    "devices/createAsyncDevice",
    async (device: FormData, { rejectWithValue }) => {
      try {
        const { data } = await DeviceService.createDevice(device);
        return data;
      } catch (err) {
        rejectWithValue(err);
      }
    },
  ),
};
