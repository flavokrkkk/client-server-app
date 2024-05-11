import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";

const BrandBar = () => {
  const { brands } = useAppSelector(DeviceSelectors);

  return <div></div>;
};

export default BrandBar;
