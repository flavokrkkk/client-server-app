import { Button, Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../../models/IDevice";
import { FC } from "react";
import { CardBody, WrapperCard } from "./styled";
import { useNavigate } from "react-router-dom";
import { RoutesName, httpHost } from "../../utils/enums";

interface DeviceListProps {
  device: IDevice;
}

const DeviceList: FC<DeviceListProps> = ({ device }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(RoutesName.DEVICE + `/${device.id}`);
  };

  return (
    <Col md={3} className=" mb-5 mt-3">
      <WrapperCard>
        <Card border="white">
          <Image
            width={150}
            height={150}
            src={httpHost.REACT_APP_API_URL + device.img}
          />
          <CardBody>
            <div>{device.name}</div>
            <Button size="sm" variant="outline-dark" onClick={handleNavigate}>
              Buy
            </Button>
          </CardBody>
        </Card>
      </WrapperCard>
    </Col>
  );
};

export default DeviceList;
