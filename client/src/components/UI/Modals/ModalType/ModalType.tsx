import React, { FC, useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { IType } from "../../../../models/IType";
import { useActions } from "../../../../hooks/useActions";

interface ModalTypeProps {
  isShow: boolean;
  onHideModal: () => void;
}

const ModalType: FC<ModalTypeProps> = ({ isShow, onHideModal }) => {
  const [type, setType] = useState<string>("");

  const { createAsyncType } = useActions();

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleCreateType = () => {
    createAsyncType({ name: type } as IType);
    setType("");
    onHideModal();
  };

  return (
    <Modal size="lg" centered show={isShow} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            value={type}
            placeholder="Введите название типа"
            onChange={handleChangeEvent}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHideModal}>
          Закрыть
        </Button>
        <Button variant="outline-dark" onClick={handleCreateType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalType;
