import { Button, Container } from "react-bootstrap";
import ModalBrand from "../../components/UI/Modals/ModalBrand/ModalBrand";
import ModalDevice from "../../components/UI/Modals/ModalDevice/ModalDevice";
import ModalType from "../../components/UI/Modals/ModalType/ModalType";

const AdminPage = () => {
  return (
    <Container className=" d-flex flex-column">
      <Button variant="outline-dark" className="mt-4 p-3">
        Добавить тип
      </Button>
      <Button variant="outline-dark" className="mt-4 p-3">
        Добавить бренд
      </Button>
      <Button variant="outline-dark" className="mt-4 p-3">
        Добавить устройство
      </Button>
      <ModalBrand />
      <ModalDevice />
      <ModalType isShow={true} />
    </Container>
  );
};

export default AdminPage;
