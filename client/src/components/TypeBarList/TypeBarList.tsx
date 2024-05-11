import { Badge, ListGroup } from "react-bootstrap";
import { IType } from "../../models/IType";
import { FC } from "react";
import { ListGroupName } from "./styled";

interface TypeBarListProps {
  type: IType;
  types: IType[];
  selectedType: IType;
  setSelectedType: (currentType: IType) => void;
}

const TypeBarList: FC<TypeBarListProps> = ({
  type,
  types,
  selectedType,
  setSelectedType,
}) => {
  const toggleSetSelected = () => {
    setSelectedType(type);
  };

  const isSelectedType = selectedType.id === type.id;

  return (
    <ListGroup.Item
      key={type.id}
      active={isSelectedType}
      variant={isSelectedType ? "dark" : ""}
      onClick={toggleSetSelected}
      className="d-flex justify-content-between align-items-start"
    >
      <ListGroupName className="ms-2 me-auto">{type.name}</ListGroupName>
      <Badge text="light" bg="secondary" color="#fff" pill>
        {types.length}
      </Badge>
    </ListGroup.Item>
  );
};

export default TypeBarList;
