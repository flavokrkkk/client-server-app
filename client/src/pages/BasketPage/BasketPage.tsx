import { Container } from "react-bootstrap";
import { useAppSelector } from "../../hooks/useAppSelector";
import { BasketSelectors } from "../../store/selectors/selectors";
import BasketList from "../../components/BasketList/BasketList";
import { BasketWrapperCard } from "../../styles/global";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

const BasketPage = () => {
  const { basket } = useAppSelector(BasketSelectors);

  const { fetchBasketInLocalStorage } = useActions();

  useEffect(() => {
    fetchBasketInLocalStorage();
  }, []);

  return (
    <Container>
      <h2 className="text-center mt-4">My Basket</h2>
      <BasketWrapperCard>
        {basket.map((device) => (
          <BasketList device={device} />
        ))}
      </BasketWrapperCard>
    </Container>
  );
};

export default BasketPage;
