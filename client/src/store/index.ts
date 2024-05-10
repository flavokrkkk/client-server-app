import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index.ts";

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

//RootState - тип который знает о reducers с которыми мы работаем
export type RootState = ReturnType<typeof store.getState>;

//AppDispatch - тип который знает о actions нашего приложения
export const AppDispatch = typeof store.dispatch;
