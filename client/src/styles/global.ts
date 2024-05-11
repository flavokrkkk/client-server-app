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

export const WrapperPage = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  align-items: center;
  height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
`;

export const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const WrapperCard = styled.div`
  margin-top: 20px;
  width: 600px;
`;

export const FormTitle = styled.h6`
  text-align: center;
`;
