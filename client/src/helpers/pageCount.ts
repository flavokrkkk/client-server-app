export const handlePagesCount = (totalCount: number, limit: number) => {
  const pagesCount = Math.floor(totalCount / limit);
  const pages = [];
  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i + 1);
  }

  return pages;
};
