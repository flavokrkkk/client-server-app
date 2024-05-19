import { RootState } from "..";

export const UserSelectors = (state: RootState) => state.userReducer;

export const DeviceSelectors = (state: RootState) => state.deviceReducer;

export const BasketSelectors = (state: RootState) => state.basketReducer;
