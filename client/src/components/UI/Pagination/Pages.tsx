import { Pagination } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";

const Pages = () => {
  const {} = useAppSelector(DeviceSelectors);

  const pages = [1, 2, 3, 4, 5];

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item>{page}</Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
