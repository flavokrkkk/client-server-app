import { useEffect, useState } from "react";
import pdf from "./parse.pdf";
import pdfToText from "react-pdftotext";

const BasketPage = () => {
  const [datas, setData] = useState<string[]>([]);

  const extractText = async () => {
    const file = await fetch(pdf)
      .then((res) => res.blob())
      .catch((err) => console.log(err));
    pdfToText(file).then((text) => setData([...datas, text]));
  };

  useEffect(() => {
    extractText();
  }, []);

  return (
    <div>
      {datas.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
};

export default BasketPage;
