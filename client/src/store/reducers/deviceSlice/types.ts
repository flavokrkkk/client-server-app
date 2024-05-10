import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";
import { IType } from "../../../models/IType";

export interface DeviceState {
  type: IType[];
  brand: IBrand[];
  device: IDevice[];
}
