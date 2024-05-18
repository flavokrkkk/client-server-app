import { AxiosResponse } from "axios";
import { IType } from "../models/IType";
import { $authHost, $host } from ".";
import { IBrand } from "../models/IBrand";
import { IDeviceData } from "../models/IDeviceData";
import { IDevice } from "../models/IDevice";

export class DeviceService {
  static async fetchTypes(): Promise<AxiosResponse<IType[]>> {
    return $host.get<IType[]>("api/type");
  }
  static async fetchBrands(
    typeId,
    brandId,
    page,
    limit = 5,
  ): Promise<AxiosResponse<IBrand[]>> {
    return $host.get<IBrand[]>("api/brand", {
      params: { typeId, brandId, page, limit },
    });
  }

  static async fetchDevices(): Promise<AxiosResponse<IDeviceData>> {
    return $host.get<IDeviceData>("api/device");
  }

  static async fetchDevice(id: string): Promise<AxiosResponse<IDevice>> {
    return $host.get<IDevice>(`api/device/${id}`);
  }

  static async createType(type: IType): Promise<AxiosResponse<IType>> {
    return $authHost.post<IType>("api/type", type);
  }

  static async createBrand(brand: IBrand): Promise<AxiosResponse<IBrand>> {
    return $authHost.post<IBrand>("api/brand", brand);
  }
}
