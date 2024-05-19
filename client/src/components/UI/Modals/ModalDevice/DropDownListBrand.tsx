import { FC } from "react";
import { IBrand } from "../../../../models/IBrand";
import { IType } from "../../../../models/IType";
import { Dropdown } from "react-bootstrap";

interface DropDownListBrandProps {
  item: IBrand | IType;
  handleSelectBrand: (value: IBrand) => void;
}

const DropDownListBrand: FC<DropDownListBrandProps> = ({
  item,
  handleSelectBrand,
}) => {
  const handleSelectListBrand = () => {
    handleSelectBrand(item);
  };

  return (
    <Dropdown.Item onClick={handleSelectListBrand}>{item.name}</Dropdown.Item>
  );
};

export default DropDownListBrand;
