import { IBasket } from "../../../models/IBasket";

export interface BasketState {
  basket: IBasket[];
  isBasket: boolean;
  count: number;
}
