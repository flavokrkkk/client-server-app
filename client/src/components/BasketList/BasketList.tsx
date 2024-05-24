import { FC, useEffect } from "react";
import { IDevice } from "../../models/IDevice";
import { Button, Card, CardBody, Image } from "react-bootstrap";
import { httpHost } from "../../utils/enums";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  BasketSelectors,
  UserSelectors,
} from "../../store/selectors/selectors";
import { IUser } from "../../models/IUser";

interface BasketListProps {
  device: IDevice;
}

const BasketList: FC<BasketListProps> = ({ device }) => {
  const {
    deleteBasketInLocalStorage,
    countDeviceInBasket,
    setIncrementCount,
    setDecrementCount,
  } = useActions();

  const { count } = useAppSelector(BasketSelectors);

  const { user } = useAppSelector(UserSelectors);

  const handleDeleteDevice = () => {
    deleteBasketInLocalStorage(user as IUser, device.id);
  };

  const handleIncrementDevice = () => {
    setIncrementCount();
  };
  const handleDecrementDevice = () => {
    if (count !== 1) {
      setDecrementCount();
    }
  };

  useEffect(() => {
    countDeviceInBasket(user as IUser, device);
  }, []);

  return (
    <Card className=" p-2 mb-4">
      <Card.Header className="text-center">{device.name}</Card.Header>
      <CardBody className=" d-flex justify-content-center">
        <div className=" text-center">
          <Image src={httpHost.REACT_APP_API_URL + device.img} height={150} />
          <div className=" text-center mt-2">
            {device.info.map((el) => (
              <h5>{el.description}</h5>
            ))}
          </div>
          <div className=" d-flex justify-content-center gap-3">
            <Button
              variant="outline-dark"
              className=" mb-2"
              onClick={handleDecrementDevice}
            >
              -
            </Button>
            <Button
              variant="outline-dark"
              className=" mb-2"
              onClick={handleIncrementDevice}
            >
              +
            </Button>
          </div>
          <div className=" text-center">{count}</div>
          <div>{device.price * count}$</div>
        </div>
      </CardBody>
      <Button variant="outline-dark" className=" mb-2">
        Купить
      </Button>
      <Button variant="outline-dark" onClick={handleDeleteDevice}>
        Удалить
      </Button>
    </Card>
  );
};

export default BasketList;
