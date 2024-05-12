import { AsyncDataActions } from "../../async-data";
import { deviceSlice } from "../deviceSlice/deviceSlice";
import { userSlice } from "../userSlice/userSlice";

export const AllActionCreators = {
  ...userSlice.actions,
  ...deviceSlice.actions,
  ...AsyncDataActions,
};
