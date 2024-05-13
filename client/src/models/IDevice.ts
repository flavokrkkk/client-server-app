import { IDescription } from "./IDescription";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: IDescription[];
}
