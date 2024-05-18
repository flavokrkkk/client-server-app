import { ListGroup, Row } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";
import { useActions } from "../../../hooks/useActions";
import TypeBarList from "../../TypeBarList/TypeBarList";

const TypeBar = () => {
  const { types, selectedType } = useAppSelector(DeviceSelectors);

  const { setSelectedType } = useActions();

  return (
    <Row className=" d-flex">
      <ListGroup as="ol" numbered>
        {types.map((type) => (
          <TypeBarList
            key={type.id}
            type={type}
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        ))}
      </ListGroup>
    </Row>
  );
};

export default TypeBar;
