import { Dispatch } from "@reduxjs/toolkit";
import { basketSlice } from ".";
import { IDevice } from "../../../models/IDevice";

export const BasketActionCreators = {
  addDevice: basketSlice.actions.addDevice,
  deleteBasket: basketSlice.actions.deleteDevice,

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

  countDeviceInBasket: (device: IDevice) => () => {
    try {
      if (localStorage.getItem("basket")) {
        const devices: IDevice[] = JSON.parse(
          localStorage.getItem("basket") || "[]",
        );

        const count = devices.filter(
          (basketDevice) => basketDevice.name === device.name,
        ).length;

        return count;
      }
    } catch (err) {
      console.log(err);
    }
  },

  hasDeviceInBasket: (device: IDevice) => () => {
    if (localStorage.getItem("basket")) {
      const devices: IDevice[] = JSON.parse(
        localStorage.getItem("basket") || "[]",
      );

      const isBasket = devices.filter((dev) => dev.id === device.id);

      return isBasket.length ? true : false;
    }
  },
};
