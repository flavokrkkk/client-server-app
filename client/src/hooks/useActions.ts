import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch";
import { AllActionCreators } from "../store/reducers/action-creators/action-creators";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};
