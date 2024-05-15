import { Container } from "react-bootstrap";
import DeviceItem from "../../DeviceItem/DeviceItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DeviceSelectors } from "../../store/selectors/selectors";

const DevicePage = () => {
  const { id } = useParams<string>();

  const { fetchAsyncDevice } = useActions();
  const { device } = useAppSelector(DeviceSelectors);

  useEffect(() => {
    fetchAsyncDevice(id!);
  }, []);

  return (
    <Container className="mt-5">
      <DeviceItem description={device.info} device={device} />
    </Container>
  );
};

export default DevicePage;
