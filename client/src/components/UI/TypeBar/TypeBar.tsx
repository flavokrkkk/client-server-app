import { ListGroup } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";
import { TypeBarWrapper } from "./styled";
import { useActions } from "../../../hooks/useActions";
import TypeBarList from "../../TypeBarList/TypeBarList";

const TypeBar = () => {
  const { types, selected } = useAppSelector(DeviceSelectors);

  const { setSelected } = useActions();

  return (
    <TypeBarWrapper>
      <ListGroup as="ol" numbered>
        {types.map((type) => (
          <TypeBarList
            key={type.id}
            type={type}
            types={types}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ListGroup>
    </TypeBarWrapper>
  );
};

export default TypeBar;
