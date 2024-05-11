import { useLocation, useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/enums";
import LoginForm from "../../components/LoginForm/LoginForm";

const AuthPage = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN;

  const handleNavigation = () => {
    isPathName ? navigate(RoutesName.REGISTRATION) : navigate(RoutesName.LOGIN);
  };

  return (
    <LoginForm handleNavigation={handleNavigation} isPathName={isPathName} />
  );
};

export default AuthPage;
