import { FC } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

interface ModalBrandProps {
  isShow: boolean;
  onHideModal?: () => void;
}

const ModalDevice: FC<ModalBrandProps> = ({ isShow, onHideModal }) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl placeholder="Введите название устройства" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark">Закрыть</Button>
        <Button variant="outline-dark">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDevice;
