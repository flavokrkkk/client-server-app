import { Button, Col, FormControl, Row } from "react-bootstrap";
import { IDescription } from "../../models/IDescription";
import { FC } from "react";

interface ModalDeviceListProps {
  info: IDescription;
  handleDeleteDescription: (id: number) => void;
}

const ModalDeviceList: FC<ModalDeviceListProps> = ({
  info,
  handleDeleteDescription,
}) => {
  const handleRemoveDescription = () => handleDeleteDescription(info.id);

  return (
    <Row key={info.id} className="mt-4">
      <Col md={4}>
        <FormControl placeholder="Введите название свйоства" />
      </Col>
      <Col md={4}>
        <FormControl placeholder="Введите описание свойства" />
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
