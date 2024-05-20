import { IDevice } from "../../../models/IDevice";

export interface BasketState {
  basket: Array<IDevice>;
  isBasket: boolean;
  count: number;
}
