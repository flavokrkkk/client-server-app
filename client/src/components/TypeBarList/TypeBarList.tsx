import { Badge, ListGroup } from "react-bootstrap";
import { IType } from "../../models/IType";
import { SelectableType } from "../../store/reducers/deviceSlice/types";
import { FC } from "react";
import { ListGroupName } from "./styled";

interface TypeBarListProps {
  type: IType;
  types: IType[];
  selected: SelectableType;
  setSelected: (type: SelectableType) => void;
}

const TypeBarList: FC<TypeBarListProps> = ({
  type,
  types,
  selected,
  setSelected,
}) => {
  const toggleSetSelected = () => {
    setSelected(type);
  };

  const isSelected = selected.id === type.id;

  return (
    <ListGroup.Item
      key={type.id}
      active={isSelected}
      variant={isSelected ? "dark" : ""}
      onClick={toggleSetSelected}
      className="d-flex justify-content-between align-items-start"
    >
      <ListGroupName className="ms-2 me-auto">
        <div>{type.name}</div>
      </ListGroupName>
      <Badge text="light" bg="secondary" color="#fff" pill>
        {types.length}
      </Badge>
    </ListGroup.Item>
  );
};

export default TypeBarList;
