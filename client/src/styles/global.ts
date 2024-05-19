import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  span {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }

`;

export const BasketWrapperCard = styled.div`
  width: 800px;
  margin: 0 auto;
`;
