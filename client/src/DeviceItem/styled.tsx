import styled from "styled-components";

interface DeviceCardProps {
  index: number;
}
export const TitleDevice = styled.h3`
  text-align: center;
  font-weight: 300;
  margin: 0 130px 20px 0;
`;

export const DeviceCard = styled.div<DeviceCardProps>`
  padding: 10px;
  background-color: ${({ index }) =>
    index % 2 === 0 ? "#343a40" : "transparent"};
  color: ${({ index }) => (index % 2 === 0 ? "#fff;" : "#000")};
`;
