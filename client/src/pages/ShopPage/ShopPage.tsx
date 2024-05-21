import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../../components/UI/TypeBar/TypeBar";
import BrandBar from "../../components/UI/BrandBar/BrandBar";
import DeviceBar from "../../components/UI/DeviceBar/DeviceBar";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import Pages from "../../components/UI/Pagination/Pages";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DeviceSelectors } from "../../store/selectors/selectors";
import {} from "../../store/async-data";
import { IFetchDeviceParams } from "../../models/IFetchDevice";

const ShopPage = () => {
  const { fetchAsyncTypes, fetchAsyncBrands, fetchAsyncDevices } = useActions();

  const { page, selectedBrand, selectedType } = useAppSelector(DeviceSelectors);

  useEffect(() => {
    fetchAsyncTypes();
    fetchAsyncBrands();
    fetchAsyncDevices({
      typeId: null,
      brandId: null,
      page: 1,
      limit: 3,
    } as IFetchDeviceParams);
  }, []);

  useEffect(() => {
    fetchAsyncDevices({
      typeId: selectedType.id,
      brandId: selectedBrand.id,
      page,
      limit: 4,
    } as IFetchDeviceParams);
  }, [page, selectedType, selectedBrand]);

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
            <Pages />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
