import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Button, Dropdown, Form, FormControl, Modal } from "react-bootstrap";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../../store/selectors/selectors";
import { IDescription } from "../../../../models/IDescription";
import ModalDeviceList from "../../../ModalDeviceList/ModalDeviceList";
import { useActions } from "../../../../hooks/useActions";
import { IType } from "../../../../models/IType";
import { IBrand } from "../../../../models/IBrand";
import DropDownListBrand from "./DropDownListBrand";
import DropDownListType from "./DropDownListType";

interface ModalBrandProps {
  isShow: boolean;
  onHideModal?: () => void;
}
interface FileInputEvent extends React.SyntheticEvent {
  target: HTMLInputElement & EventTarget;
}

const ModalDevice: FC<ModalBrandProps> = ({ isShow, onHideModal }) => {
  const { types, brands, selectedBrand, selectedType } =
    useAppSelector(DeviceSelectors);

  const {
    setSelectedBrand,
    setSelectedType,
    fetchAsyncBrands,
    fetchAsyncTypes,
    createAsyncDevice,
  } = useActions();

  const [info, setInfo] = useState<IDescription[]>([]);

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSelectType = (value: IType) => {
    setSelectedType(value);
  };

  const handleSelectBrand = (value: IBrand) => {
    setSelectedBrand(value);
  };

  const handleSelectFile: ChangeEventHandler = (event: FileInputEvent) => {
    setFile(event.target.files && event.target.files[0]);
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

  const handleChangeInfo = (key: string, value: string, id: number) => {
    setInfo(info.map((el) => (el.id === id ? { ...el, [key]: value } : el)));
  };

  const handleAppendDevice = () => {
    const formData = new FormData();
    formData.append("name", title);
    formData.append("price", `${price}`);
    formData.append("img", file!);
    formData.append("BrandId", `${selectedBrand.id}`);
    formData.append("TypeId", `${selectedType.id}`);
    formData.append("info", JSON.stringify(info));
    createAsyncDevice(formData);
    onHideModal?.();
  };

  useEffect(() => {
    fetchAsyncTypes();
    fetchAsyncBrands();
  }, []);

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
                {selectedType.name ? selectedType.name : "Выберите тип"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map((type) => (
                  <DropDownListType
                    item={type}
                    key={type.id}
                    handleSelectType={handleSelectType}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="outline-dark">
                {selectedBrand.name ? selectedBrand.name : "Выберите бренд"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => (
                  <DropDownListBrand
                    item={brand}
                    key={brand.id}
                    handleSelectBrand={handleSelectBrand}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <FormControl
            className="mt-3"
            placeholder="Введите название устройства"
            value={title}
            onChange={handleChangeTitle}
          />

          <FormControl
            className="mt-3"
            type="number"
            placeholder="Введите стоимость устройства"
            value={price}
            onChange={handleChangePrice}
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
              handleChangeInfo={handleChangeInfo}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHideModal}>
          Закрыть
        </Button>
        <Button variant="outline-dark" onClick={handleAppendDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDevice;
