import { Button, Card, Form } from "react-bootstrap";
import { FormTitle, SubTitle, WrapperCard, WrapperPage } from "./styled";
import { FC } from "react";

interface LoginFormProps {
  isPathName: boolean;
  handleNavigation: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ isPathName, handleNavigation }) => {
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

export default LoginForm;
