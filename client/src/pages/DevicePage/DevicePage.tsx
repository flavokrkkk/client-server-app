import { Container } from "react-bootstrap";
import DeviceItem from "../../DeviceItem/DeviceItem";
import { description, device } from "../../utils/mockData";

const DevicePage = () => {
  return (
    <Container className="mt-5">
      <DeviceItem description={description} device={device} />
    </Container>
  );
};

export default DevicePage;
