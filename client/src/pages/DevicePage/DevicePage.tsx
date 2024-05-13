import { Container } from "react-bootstrap";
import DeviceItem from "../../DeviceItem/DeviceItem";
import { useEffect, useState } from "react";
import { IDevice } from "../../models/IDevice";
import { fetchAsyncDeviceById } from "../../http/deviceApi";
import { useParams } from "react-router-dom";
import { IDescription } from "../../models/IDescription";

const DevicePage = () => {
  const [device, setDevice] = useState<IDevice>({
    info: [] as IDescription[],
  } as IDevice);
  const { id } = useParams<string>();

  useEffect(() => {
    fetchAsyncDeviceById(id!).then((dev) => setDevice(dev));
  }, []);

  return (
    <Container className="mt-5">
      <DeviceItem description={device.info} device={device} />
    </Container>
  );
};

export default DevicePage;
