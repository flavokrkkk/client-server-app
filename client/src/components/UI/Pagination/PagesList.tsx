import { FC } from "react";
import { Pagination } from "react-bootstrap";

interface PageListProps {
  page: number;
  pageCurrent: number;
  handleAppendPage: (page: number) => void;
}

const PagesList: FC<PageListProps> = ({
  page,
  pageCurrent,
  handleAppendPage,
}) => {
  const handleAppendPageList = () => {
    handleAppendPage(pageCurrent);
  };

  return (
    <Pagination.Item
      active={page === pageCurrent}
      onClick={handleAppendPageList}
    >
      {pageCurrent}
    </Pagination.Item>
  );
};

export default PagesList;
