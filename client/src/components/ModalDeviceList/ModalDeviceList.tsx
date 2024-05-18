import { Button, Col, FormControl, Row } from "react-bootstrap";
import { IDescription } from "../../models/IDescription";
import { ChangeEventHandler, FC } from "react";

interface ModalDeviceListProps {
  info: IDescription;
  handleDeleteDescription: (id: number) => void;
  handleChangeInfo: (key: string, value: string, id: number) => void;
}

const ModalDeviceList: FC<ModalDeviceListProps> = ({
  info,
  handleDeleteDescription,
  handleChangeInfo,
}) => {
  const handleRemoveDescription = () => handleDeleteDescription(info.id);

  const handleChangeInfoTitle: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    handleChangeInfo("title", event.target.value, info.id);
  };

  const handleChangeInfoDescription: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    handleChangeInfo("description", event.target.value, info.id);
  };

  return (
    <Row key={info.id} className="mt-4">
      <Col md={4}>
        <FormControl
          placeholder="Введите название свйоства"
          value={info.title}
          onChange={handleChangeInfoTitle}
        />
      </Col>
      <Col md={4}>
        <FormControl
          placeholder="Введите описание свойства"
          value={info.description}
          onChange={handleChangeInfoDescription}
        />
      </Col>
      <Col md={4}>
        <Button variant="outline-dark" onClick={handleRemoveDescription}>
          Удалить
        </Button>
      </Col>
    </Row>
  );
};

export default ModalDeviceList;
