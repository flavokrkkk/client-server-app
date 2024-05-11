import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../../components/UI/TypeBar/TypeBar";

const ShopPage = () => {
  return (
    <Container>
      <Row className="mt-3">
        <TypeBar />
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
