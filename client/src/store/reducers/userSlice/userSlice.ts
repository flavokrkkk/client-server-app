import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";
// import { JwtPayload } from "jwt-decode";

export const initialState = <UserState>{
  isAuth: false,
  user: {},
  isLoading: true,
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
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    setEmailUser(state, { payload }: PayloadAction<string>) {
      state.user.email = payload;
    },
  },
});

export default userSlice.reducer;
