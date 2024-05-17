import { FC, useState } from "react";
import { Button, Dropdown, Form, FormControl, Modal } from "react-bootstrap";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../../store/selectors/selectors";
import { IDescription } from "../../../../models/IDescription";
import ModalDeviceList from "../../../ModalDeviceList/ModalDeviceList";

interface ModalBrandProps {
  isShow: boolean;
  onHideModal?: () => void;
}
interface FileInputEvent extends React.SyntheticEvent {
  target: HTMLInputElement & EventTarget;
}

const ModalDevice: FC<ModalBrandProps> = ({ isShow, onHideModal }) => {
  const { types, brands } = useAppSelector(DeviceSelectors);

  const [info, setInfo] = useState<IDescription[]>([]);

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);

  const [type, setType] = useState<string>("");
  const [brand, setBrand] = useState<string>("");

  const handleSelectFile = (event: FileInputEvent) => {
    event.target.files && setFile(event.target.files[0]);
  };
  const handleSetDescription = () => {
    setInfo([
      ...info,
      {
        title: "",
        description: "",
        id: Date.now(),
      },
    ]);
  };

  const handleDeleteDescription = (id: number) => {
    setInfo(info.filter((el) => el.id !== id));
  };

  return (
    <Modal size="lg" centered show={isShow} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex gap-3 justify-content-center">
            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="outline-dark">
                {type ? type : "Выберите тип"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="outline-dark">
                Выберите бренд
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <FormControl
            className="mt-3"
            placeholder="Введите название устройства"
          />

          <FormControl
            className="mt-3"
            type="number"
            placeholder="Введите стоимость устройства"
          />

          <FormControl
            className="mt-3"
            type="file"
            onChange={handleSelectFile}
          />

          <hr />
          <Button variant="outline-dark" onClick={handleSetDescription}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <ModalDeviceList
              info={i}
              key={i.id}
              handleDeleteDescription={handleDeleteDescription}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHideModal}>
          Закрыть
        </Button>
        <Button variant="outline-dark">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDevice;
