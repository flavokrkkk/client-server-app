import { IBrand } from "../../../models/IBrand";
import { IDevice } from "../../../models/IDevice";
import { IType } from "../../../models/IType";

export type SelectableType = IType | IDevice | IBrand;
export interface DeviceState {
  types: IType[];
  brands: IBrand[];
  devices: IDevice[];
  selected: SelectableType;
}
