import { Button, ButtonGroup, Card, Col, Image, Row } from "react-bootstrap";
import { DeviceCard, TitleDevice } from "./styled";
import { IDevice } from "../models/IDevice";
import { FC } from "react";
import { IDescription } from "../models/IDescription";

interface DeviceItemProps {
  device: IDevice;
  description: IDescription[];
}

const DeviceItem: FC<DeviceItemProps> = ({ device, description }) => {
  return (
    <>
      <Row className=" d-flex justify-content-around">
        <Col md={4}>
          <TitleDevice>{device.name}</TitleDevice>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column">
            <div className=" mt-2">
              <span>Накопитель: </span>
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark">128 ГБ</Button>
                <Button variant="dark">256 ГБ</Button>
                <Button variant="outline-dark">512 ГБ</Button>
                <Button variant="dark">1 ТБ</Button>
              </ButtonGroup>
            </div>
            <div className=" mt-3">
              <Card className=" p-2">
                Приобретая любое устройство в нашем магазине, Вы имеете право
                осуществить его полную проверку непосредственно ДО ОПЛАТЫ. Никто
                не будет Вас торопить, при этом всю интересующую Вас информацию
                Вы сможете уточнить у курьера или на пункте самовывоза в момент
                распаковки устройства. Подробнее о доставке
              </Card>
            </div>
            <div className="d-flex">
              <TitleDevice className=" mt-4">{device.price}$</TitleDevice>
            </div>
            <Button className=" mt-3" variant="outline-dark">
              Купить
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {description.map((info, index) => (
          <DeviceCard index={index}>
            <Row
              className=" p-2"
              key={info.id}
            >{`${info.title}: ${info.description}`}</Row>
          </DeviceCard>
        ))}
      </Row>
    </>
  );
};

export default DeviceItem;
