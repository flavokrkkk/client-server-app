import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../../components/UI/TypeBar/TypeBar";
import BrandBar from "../../components/UI/BrandBar/BrandBar";
import DeviceBar from "../../components/UI/DeviceBar/DeviceBar";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

const ShopPage = () => {
  const { fetchAsyncTypes, fetchAsyncBrands, fetchAsyncDevices } = useActions();

  useEffect(() => {
    fetchAsyncTypes();
    fetchAsyncBrands();
    fetchAsyncDevices();
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col md={3}>
            <TypeBar />
          </Col>
          <Col md={9}>
            <BrandBar />
            <DeviceBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
