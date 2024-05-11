import { useLocation, useNavigate } from "react-router-dom";
import {
  FormTitle,
  SubTitle,
  WrapperCard,
  WrapperPage,
} from "../../styles/global";
import { Button, Card, Form } from "react-bootstrap";
import { RoutesName } from "../../utils/enums";

const AuthPage = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN;

  const handleNavigation = () => {
    isPathName ? navigate(RoutesName.REGISTRATION) : navigate(RoutesName.LOGIN);
  };

  return (
    <WrapperPage>
      <Card>
        <WrapperCard className="p-3">
          <SubTitle>{isPathName ? "Authorization" : "Registration"}</SubTitle>
          <Form className="d-flex flex-column gap-4 m-5">
            <Form.Control placeholder="E-mail" />
            <Form.Control placeholder="Password" />
            <Button className="mt-4 " variant="outline-dark">
              {isPathName ? "Sign in" : "Registration"}
            </Button>
            {isPathName ? (
              <FormTitle>
                Нет аккаунта ?{" "}
                <span onClick={handleNavigation}>Зарегистрируйтесь!</span>
              </FormTitle>
            ) : (
              <FormTitle>
                Есть аккаунт ? <span onClick={handleNavigation}>Войдите!</span>
              </FormTitle>
            )}
          </Form>
        </WrapperCard>
      </Card>
    </WrapperPage>
  );
};

export default AuthPage;
