import {
  Button,
  Card,
  Container,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelectors } from "../../store/selectors/selectors";
import { ChangeEventHandler, useEffect, useState } from "react";

const ProfilePage = () => {
  const { user } = useAppSelector(UserSelectors);

  const [isAvailableEmail, setIsAvailableEmail] = useState(true);

  const [email, setEmail] = useState("");

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const toggleEmail = () => {
    setIsAvailableEmail(false);
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container className="mt-4">
      <div style={{ width: "100%" }}>
        <ListGroup as="ol">
          <ListGroup.Item className="p-3 text-center" as="li">
            Профиль
          </ListGroup.Item>
          <ListGroup.Item className="p-3 text-center" as="li">
            Главная
          </ListGroup.Item>
          <ListGroup.Item className="p-3 text-center" as="li">
            Корзина
          </ListGroup.Item>
        </ListGroup>
      </div>

      <Card className="p-4 mt-5">
        <h2 className="text-center mb-4">Пользователь</h2>
        <div className=" d-flex gap-5 justify-content-center">
          <div style={{ width: "100%" }}>
            <div className=" mb-4">
              <FormControl
                type="text"
                value={email}
                disabled={isAvailableEmail}
                onChange={handleChangeEmail}
              />
              <Button
                className="mt-2"
                size="sm"
                variant="outline-dark"
                onClick={toggleEmail}
              >
                Изменить E-mail
              </Button>
            </div>

            <div className=" mb-4">
              <FormControl
                type="password"
                placeholder={`*************`}
                disabled
                readOnly
              />
              <Button className="mt-2" size="sm" variant="outline-dark">
                Изменить Pasword
              </Button>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className=" mb-4">
              <FormControl
                type="text"
                placeholder="Phone number"
                disabled
                readOnly
              />
              <Button className="mt-2" size="sm" variant="outline-dark">
                Изменить Phone
              </Button>
            </div>

            <div className=" mb-4">
              <FormControl type="text" placeholder="Role" disabled readOnly />
              <Button className="mt-2" size="sm" variant="outline-dark">
                Изменить Role
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default ProfilePage;
