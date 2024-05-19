import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";
import { WrapperDeviceBar, WrapperNoDevice } from "./styled";
import DeviceList from "../../DeviceList/DeviceList";

const DeviceBar = () => {
  const { devices } = useAppSelector(DeviceSelectors);

  return (
    <WrapperDeviceBar>
      {devices.length ? (
        devices.map((device) => <DeviceList key={device.id} device={device} />)
      ) : (
        <WrapperNoDevice>
          <h2>На этой странцие отсутсвтуют девайсы!</h2>
        </WrapperNoDevice>
      )}
    </WrapperDeviceBar>
  );
};

export default DeviceBar;
