import { IDevice } from "../../../models/IDevice";

export interface IBasket extends IDevice {
  userId: number;
}

export interface BasketState {
  basket: IBasket[];
  isBasket: boolean;
  count: number;
}
