import { IUser } from "../../../models/IUser";

export interface UserState {
  isAuth: boolean;
  user: IUser;
}
