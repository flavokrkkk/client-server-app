import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";
import BrandBarList from "../../BrandBarList/BrandBarList";
import { WrapperBrandBar } from "./styled";

const BrandBar = () => {
  const { brands, selectedBrand } = useAppSelector(DeviceSelectors);

  const { setSelectedBrand } = useActions();

  return (
    <WrapperBrandBar>
      {brands.map((brand) => (
        <BrandBarList
          key={brand.id}
          brand={brand}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      ))}
    </WrapperBrandBar>
  );
};

export default BrandBar;
