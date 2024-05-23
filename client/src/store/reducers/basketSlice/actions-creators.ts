import { Dispatch } from "@reduxjs/toolkit";
import { basketSlice } from ".";
import { IDevice } from "../../../models/IDevice";
import { IBasket } from "./types";
import { IUser } from "../../../models/IUser";

export const BasketActionCreators = {
  addDevice: basketSlice.actions.addDevice,
  deleteBasket: basketSlice.actions.deleteDevice,
  isBasket: basketSlice.actions.hasIsBasket,
  count: basketSlice.actions.setCount,

  addDeviceToBasket: (user: IUser, device: IDevice) => (dispatch: Dispatch) => {
    try {
      const devices = localStorage.getItem("basket") || "[]";

      const json = JSON.parse(devices) as IBasket[];
      json.push({ ...device, userId: user.id });
      dispatch(BasketActionCreators.addDevice(json));
      localStorage.setItem("basket", JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },

  fetchBasketInLocalStorage: (user: IUser) => (dispatch: Dispatch) => {
    if (localStorage.getItem("basket")) {
      const basket = localStorage.getItem("basket") || "[]";
      const basketJson = JSON.parse(basket) as IBasket[];
      const userBasket = basketJson.filter(
        (basket) => basket.userId === user.id,
      );
      dispatch(BasketActionCreators.addDevice(userBasket));
    }
  },

  deleteBasketInLocalStorage:
    (user: IUser, id: number) => (dispatch: Dispatch) => {
      try {
        if (localStorage.getItem("basket")) {
          const basket: IBasket[] = JSON.parse(
            localStorage.getItem("basket") || "[]",
          );

          const userBasket = basket.filter(
            (basket) => basket.userId === user.id,
          );

          const removeDeviceInBasket = userBasket.filter(
            (device) => device.id !== id,
          );
          localStorage.setItem("basket", JSON.stringify(removeDeviceInBasket));
          dispatch(BasketActionCreators.deleteBasket(id));
        }
      } catch (err) {
        console.log(err);
      }
    },

  countDeviceInBasket: (device: IDevice) => (dispatch: Dispatch) => {
    try {
      if (localStorage.getItem("basket")) {
        const devices: IBasket[] = JSON.parse(
          localStorage.getItem("basket") || "[]",
        );

        const count = devices.filter(
          (basketDevice) => basketDevice.name === device.name,
        ).length;

        dispatch(BasketActionCreators.count(count));
      }
    } catch (err) {
      console.log(err);
    }
  },

  hasDeviceInBasket: (user: IUser, id: string) => (dispatch: Dispatch) => {
    if (localStorage.getItem("basket")) {
      const devices: IBasket[] = JSON.parse(
        localStorage.getItem("basket") || "[]",
      );
      const userBasket = devices.filter((basket) => basket.userId === user.id);
      const isBasket = userBasket.find((c) => c.id === Number(id));
      return isBasket
        ? dispatch(BasketActionCreators.isBasket(true))
        : dispatch(BasketActionCreators.isBasket(false));
    }
  },
};
