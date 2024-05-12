import { Button, Card, Form } from "react-bootstrap";
import { FormTitle, SubTitle, WrapperCard, WrapperPage } from "./styled";
import { FC, useState } from "react";

interface LoginFormProps {
  isPathName: boolean;
  handleNavigation: () => void;
  handleSignIn: (email: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  isPathName,
  handleNavigation,
  handleSignIn,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuthentication = () => {
    handleSignIn(email, password);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <WrapperPage>
      <Card>
        <WrapperCard className="p-3">
          <SubTitle>{isPathName ? "Authorization" : "Registration"}</SubTitle>
          <Form className="d-flex flex-column gap-4 m-5">
            <Form.Control
              placeholder="E-mail"
              value={email}
              onChange={handleChangeEmail}
            />
            <Form.Control
              placeholder="Password"
              value={password}
              type="password"
              onChange={handleChangePassword}
            />
            <Button
              className="mt-4 "
              variant="outline-dark"
              onClick={handleAuthentication}
            >
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
