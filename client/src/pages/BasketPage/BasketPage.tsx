import pdf from "./parse.pdf";

const BasketPage = () => {
  fetch(pdf)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });

  return <div></div>;
};

export default BasketPage;
