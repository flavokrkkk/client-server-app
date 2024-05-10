import { IRoute } from "../models/IRoute";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import DevicePage from "../pages/DevicePage/DevicePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import { RoutesName } from "../utils/enums";

export const privateRoute: IRoute[] = [
  {
    path: RoutesName.ADMIN,
    component: AdminPage,
  },

  {
    path: RoutesName.BASKET,
    component: BasketPage,
  },
];

export const publicRoute = [
  {
    path: RoutesName.LOGIN,
    component: AuthPage,
  },
  {
    path: RoutesName.REGISTRATION,
    component: AuthPage,
  },
  {
    path: RoutesName.SHOP,
    component: ShopPage,
  },
  {
    path: RoutesName.DEVICE + "/:id",
    component: DevicePage,
  },
];
