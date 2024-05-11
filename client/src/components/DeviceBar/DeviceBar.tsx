import { Button, Card, Col } from "react-bootstrap";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DeviceSelectors } from "../../store/selectors/selectors";
import { WrapperDeviceBar } from "./styled";

const DeviceBar = () => {
  const { devices } = useAppSelector(DeviceSelectors);

  return (
    <WrapperDeviceBar>
      {devices.map((device) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{device.name}</Card.Title>
            <Card.Text>{device.price}</Card.Text>
            <Button variant="primary">Купить</Button>
          </Card.Body>
        </Card>
      ))}
    </WrapperDeviceBar>
  );
};

export default DeviceBar;
