import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoute } from "../routes/routes";
import ShopPage from "../pages/ShopPage/ShopPage";
import { useAppSelector } from "../hooks/useAppSelector";
import { UserSelectors } from "../store/selectors/selectors";

const AppRouter = () => {
  const { isAuth } = useAppSelector(UserSelectors);

  return (
    <>
      <Routes>
        {isAuth &&
          privateRoute.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
        {publicRoute.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
        <Route path="*" Component={ShopPage} />
      </Routes>
    </>
  );
};

export default AppRouter;
