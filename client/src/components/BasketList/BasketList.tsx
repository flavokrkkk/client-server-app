import { FC } from "react";
import { IDevice } from "../../models/IDevice";
import { Button, Card, CardBody, Image } from "react-bootstrap";
import { httpHost } from "../../utils/enums";
import { useActions } from "../../hooks/useActions";

interface BasketListProps {
  device: IDevice;
}

const BasketList: FC<BasketListProps> = ({ device }) => {
  const { deleteDevice } = useActions();

  const handleDeleteDevice = () => {
    deleteDevice(device.id);
  };

  return (
    <Card className=" p-2 mb-4">
      <Card.Header className="text-center">{device.name}</Card.Header>
      <CardBody className=" d-flex justify-content-center">
        <div>
          <Image src={httpHost.REACT_APP_API_URL + device.img} height={150} />
          <div className=" text-center mt-2">
            {device.info.map((el) => (
              <h5>{el.description}</h5>
            ))}
          </div>
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
