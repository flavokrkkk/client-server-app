import { useAppSelector } from "../../hooks/useAppSelector";
import { DeviceSelectors } from "../../store/selectors/selectors";
import { WrapperDeviceBar } from "./styled";
import DeviceList from "../DeviceList/DeviceList";

const DeviceBar = () => {
  const { devices } = useAppSelector(DeviceSelectors);

  return (
    <WrapperDeviceBar>
      {devices.map((device) => (
        <DeviceList key={device.id} device={device} />
      ))}
    </WrapperDeviceBar>
  );
};

export default DeviceBar;
