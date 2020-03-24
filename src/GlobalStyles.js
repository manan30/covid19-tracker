import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }


  svg {
    display: inline-block;
    vertical-align: middle;
  }


  #root {
    height: 100%;
    width: 100%;
  }

  .main-map {
    height: 100vh;
    width: 100vw;
  }

  .rsm-geographies{
    path {
      cursor: pointer
    }
  }
`;

export const Credits = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 16px;
`;
