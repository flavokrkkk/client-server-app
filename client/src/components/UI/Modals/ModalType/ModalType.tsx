import { FC } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

interface ModalTypeProps {
  isShow: boolean;
  onHideModal?: () => void;
}

const ModalType: FC<ModalTypeProps> = ({ isShow, onHideModal }) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl placeholder="Введите название типа" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark">Закрыть</Button>
        <Button variant="outline-dark">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalType;
