import { AxiosResponse } from "axios";
import { IType } from "../models/IType";
import { $host } from ".";
import { IBrand } from "../models/IBrand";
import { IDeviceData } from "../models/IDeviceData";
import { IDevice } from "../models/IDevice";

export class DeviceService {
  static async fetchTypes(): Promise<AxiosResponse<IType[]>> {
    return $host.get<IType[]>("api/type");
  }
  static async fetchBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $host.get<IBrand[]>("api/brand");
  }

  static async fetchDevices(): Promise<AxiosResponse<IDeviceData>> {
    return $host.get<IDeviceData>("api/device");
  }

  static async fetchDevice(id: string): Promise<AxiosResponse<IDevice>> {
    return $host.get<IDevice>(`api/device${id}`);
  }
}