import { Pagination } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DeviceSelectors } from "../../../store/selectors/selectors";
import { useActions } from "../../../hooks/useActions";
import PagesList from "./PagesList";

const Pages = () => {
  const { limit, page, totalCount } = useAppSelector(DeviceSelectors);

  const { setPage } = useActions();

  const pagesCount = Math.floor(totalCount / limit);

  const pages = [];
  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i + 1);
  }
  const handleAppendPage = (page: number) => {
    setPage(page);
  };

  return (
    <Pagination className="mt-5">
      {pages.map((pageCurrent) => (
        <PagesList
          pageCurrent={pageCurrent}
          page={page}
          handleAppendPage={handleAppendPage}
        />
      ))}
    </Pagination>
  );
};

export default Pages;
