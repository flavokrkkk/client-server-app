import { Container } from "react-bootstrap";
import DeviceItem from "../../DeviceItem/DeviceItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  BasketSelectors,
  DeviceSelectors,
} from "../../store/selectors/selectors";

const DevicePage = () => {
  const { id } = useParams<string>();

  const { fetchAsyncDevice, hasDeviceInBasket } = useActions();
  const { device } = useAppSelector(DeviceSelectors);
  const { isBasket } = useAppSelector(BasketSelectors);

  useEffect(() => {
    fetchAsyncDevice(id!);
  }, []);

  return (
    <Container className="mt-5">
      <DeviceItem
        description={device.info}
        device={device}
        isBasket={isBasket}
        id={id!}
        hasDeviceInBasket={hasDeviceInBasket}
      />
    </Container>
  );
};

export default DevicePage;
