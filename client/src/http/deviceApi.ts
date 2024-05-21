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
  static async fetchBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $host.get<IBrand[]>("api/brand");
  }

  static async fetchDevices(
    TypeId: number | null,
    BrandId: number | null,
    page: number,
    limit: number = 5,
  ): Promise<AxiosResponse<IDeviceData>> {
    return $host.get<IDeviceData>("api/device", {
      params: { TypeId, BrandId, page, limit },
    });
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

  static async createDevice(device: FormData): Promise<AxiosResponse<IDevice>> {
    return $authHost.post<IDevice>("api/device", device);
  }
}
