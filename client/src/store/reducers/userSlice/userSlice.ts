import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";
import { JwtPayload } from "jwt-decode";

export const initialState = <UserState>{
  isAuth: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser | JwtPayload>) {
      state.user = payload;
    },
  },
});

export default userSlice.reducer;
