import { useLocation, useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/enums";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login, registration } from "../../http/userApi";
import { useActions } from "../../hooks/useActions";

const AuthPage = () => {
  const { setUser, setIsAuth } = useActions();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN;

  const handleNavigation = () => {
    isPathName ? navigate(RoutesName.REGISTRATION) : navigate(RoutesName.LOGIN);
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      let customer;
      if (isPathName) {
        customer = await login(email, password);
        console.log(customer);
      } else {
        customer = await registration(email, password);
        console.log(customer);
      }
      setUser(customer);
      setIsAuth(true);
      navigate(RoutesName.SHOP);
    } catch (err) {
      alert("Введен неверный логин или пароль!");
    }
  };

  return (
    <LoginForm
      isPathName={isPathName}
      handleNavigation={handleNavigation}
      handleSignIn={handleSignIn}
    />
  );
};

export default AuthPage;
