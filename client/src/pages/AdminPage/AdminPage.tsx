import { Button, Container } from "react-bootstrap";
import ModalBrand from "../../components/UI/Modals/ModalBrand/ModalBrand";
import ModalDevice from "../../components/UI/Modals/ModalDevice/ModalDevice";
import ModalType from "../../components/UI/Modals/ModalType/ModalType";
import { useState } from "react";

const AdminPage = () => {
  const [isVisibleType, setIsVisibleType] = useState<boolean>(false);
  const [isVisibleBrand, setIsVisibleBrand] = useState<boolean>(false);
  const [isVisibleDevice, setIsVisibleDevice] = useState<boolean>(false);

  const handleCloseModalType = () => {
    setIsVisibleType(!isVisibleType);
  };

  const handleCloseModalBrand = () => {
    setIsVisibleBrand(!isVisibleBrand);
  };

  const handleCloseModalDevice = () => {
    setIsVisibleDevice(!isVisibleDevice);
  };

  return (
    <Container className=" d-flex flex-column">
      <Button
        onClick={handleCloseModalType}
        variant="outline-dark"
        className="mt-4 p-3"
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-3"
        onClick={handleCloseModalBrand}
      >
        Добавить бренд
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-3"
        onClick={handleCloseModalDevice}
      >
        Добавить устройство
      </Button>
      <ModalBrand isShow={isVisibleBrand} onHideModal={handleCloseModalBrand} />
      <ModalDevice
        isShow={isVisibleDevice}
        onHideModal={handleCloseModalDevice}
      />
      <ModalType isShow={isVisibleType} onHideModal={handleCloseModalType} />
    </Container>
  );
};

export default AdminPage;
