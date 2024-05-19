import { Container } from "react-bootstrap";
import { useAppSelector } from "../../hooks/useAppSelector";
import { BasketSelectors } from "../../store/selectors/selectors";
import BasketList from "../../components/BasketList/BasketList";
import { BasketWrapperCard } from "../../styles/global";

const BasketPage = () => {
  const { basket } = useAppSelector(BasketSelectors);

  return (
    <Container>
      <h2 className="text-center mt-4">My Basket</h2>
      <hr />
      <BasketWrapperCard>
        {basket.map((device) => (
          <BasketList device={device} />
        ))}
      </BasketWrapperCard>
    </Container>
  );
};

export default BasketPage;
