import { AsyncDataActions } from "../../async-data";
import { basketSlice } from "../basketSlice";
import { BasketActionCreators } from "../basketSlice/actions-creators";
import { deviceSlice } from "../deviceSlice/deviceSlice";
import { userSlice } from "../userSlice/userSlice";

export const AllActionCreators = {
  ...userSlice.actions,
  ...deviceSlice.actions,
  ...basketSlice.actions,
  ...AsyncDataActions,
  ...BasketActionCreators,
};
