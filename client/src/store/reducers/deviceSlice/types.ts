import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";
import { IType } from "../../../models/IType";

export interface DeviceState {
  types: IType[];
  brands: IBrand[];
  devices: IDevice[];
  device: IDevice;
  selectedType: IType;
  selectedBrand: IBrand;
  page: number;
  totalCount: number;
  limit: number;
}
