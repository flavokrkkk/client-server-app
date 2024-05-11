import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";

export const initialState = <UserState>{
  isAuth: true,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.user = payload;
    },
  },
});

export default userSlice.reducer;
