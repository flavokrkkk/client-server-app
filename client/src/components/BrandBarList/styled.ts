import styled from "styled-components";

interface CardNameProps {
  isSelectedBrand: boolean;
}
export const WrapperCard = styled.div`
  width: 150px;
  margin-right: 10px;
`;

export const CardName = styled.div<CardNameProps>`
  cursor: pointer;
  color: ${({ isSelectedBrand }) => (isSelectedBrand ? "#fff" : "#000000")};
`;
