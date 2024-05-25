import {
  Button,
  Card,
  Container,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelectors } from "../../store/selectors/selectors";
import { IUser } from "../../models/IUser";
import { useState } from "react";

const ProfilePage = () => {
  const { user } = useAppSelector(UserSelectors);

  const [isAvailableEmail, setIsAvailableEmail] = useState(false);

  const userInfo: IUser = user;

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
                placeholder={userInfo.email}
                disabled={isAvailableEmail}
                readOnly
              />
              <Button className="mt-2" size="sm" variant="outline-dark">
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
