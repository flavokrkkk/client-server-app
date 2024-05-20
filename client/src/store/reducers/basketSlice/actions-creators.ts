import { Dispatch } from "@reduxjs/toolkit";
import { basketSlice } from ".";
import { IDevice } from "../../../models/IDevice";

export const BasketActionCreators = {
  addDevice: basketSlice.actions.addDevice,
  deleteBasket: basketSlice.actions.deleteDevice,
  isBasket: basketSlice.actions.hasIsBasket,
  count: basketSlice.actions.setCount,

  addDeviceToBasket: (device: IDevice) => (dispatch: Dispatch) => {
    try {
      const devices = localStorage.getItem("basket") || "[]";

      const json = JSON.parse(devices) as IDevice[];

      json.push(device);

      dispatch(BasketActionCreators.addDevice(json));
      localStorage.setItem("basket", JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },

  fetchBasketInLocalStorage: () => (dispatch: Dispatch) => {
    if (localStorage.getItem("basket")) {
      const basket = localStorage.getItem("basket") || "[]";
      const basketJson = JSON.parse(basket);
      dispatch(BasketActionCreators.addDevice(basketJson));
    }
  },

  deleteBasketInLocalStorage: (id: number) => (dispatch: Dispatch) => {
    try {
      if (localStorage.getItem("basket")) {
        const basket: IDevice[] = JSON.parse(
          localStorage.getItem("basket") || "[]",
        );
        const removeDeviceInBasket = basket.filter(
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
        const devices: IDevice[] = JSON.parse(
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

  hasDeviceInBasket: (id: string) => (dispatch: Dispatch) => {
    if (localStorage.getItem("basket")) {
      const devices: IDevice[] = JSON.parse(
        localStorage.getItem("basket") || "[]",
      );
      console.log(devices);
      const isBasket = devices.find((c) => c.id === Number(id));
      return isBasket
        ? dispatch(BasketActionCreators.isBasket(true))
        : dispatch(BasketActionCreators.isBasket(false));
    }
  },
};
