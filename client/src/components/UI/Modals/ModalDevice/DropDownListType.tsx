import { FC } from "react";
import { IType } from "../../../../models/IType";
import { Dropdown } from "react-bootstrap";

interface DropDownListTypeProps {
  item: IType;
  handleSelectType: (item: IType) => void;
}

const DropDownListType: FC<DropDownListTypeProps> = ({
  item,
  handleSelectType,
}) => {
  const handleSelectTypeList = () => {
    handleSelectType(item);
  };

  return (
    <Dropdown.Item onClick={handleSelectTypeList} key={item.id}>
      {item.name}
    </Dropdown.Item>
  );
};

export default DropDownListType;
