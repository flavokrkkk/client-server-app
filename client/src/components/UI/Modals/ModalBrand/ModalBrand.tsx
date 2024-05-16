import React, { FC, useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useActions } from "../../../../hooks/useActions";
import { IBrand } from "../../../../models/IBrand";

interface ModalBrandProps {
  isShow: boolean;
  onHideModal: () => void;
}

const ModalBrand: FC<ModalBrandProps> = ({ isShow, onHideModal }) => {
  const [brand, setBrand] = useState<string>("");

  const { createAsyncBrand } = useActions();

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const handleCreateBrand = () => {
    createAsyncBrand({ name: brand } as IBrand);
    setBrand("");
    onHideModal();
  };

  return (
    <Modal size="lg" centered show={isShow} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            value={brand}
            placeholder="Введите название бренд"
            onChange={handleChangeEvent}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHideModal}>
          Закрыть
        </Button>
        <Button variant="outline-dark" onClick={handleCreateBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBrand;
