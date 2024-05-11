import { FC } from "react";
import { IBrand } from "../../models/IBrand";
import { Card } from "react-bootstrap";
import { CardName, WrapperCard } from "./styled";

interface BrandBarListProps {
  brand: IBrand;
  selectedBrand: IBrand;
  setSelectedBrand: (CurrentBrand: IBrand) => void;
}

const BrandBarList: FC<BrandBarListProps> = ({
  brand,
  selectedBrand,
  setSelectedBrand,
}) => {
  const toggleSetSelected = () => {
    setSelectedBrand(brand);
  };

  const isSelectedBrand = selectedBrand.id === brand.id;

  return (
    <WrapperCard>
      <Card
        bg={isSelectedBrand ? "secondary" : ""}
        className="p-3 text-center"
        onClick={toggleSetSelected}
      >
        <CardName isSelectedBrand={isSelectedBrand}>{brand.name}</CardName>
      </Card>
    </WrapperCard>
  );
};

export default BrandBarList;
