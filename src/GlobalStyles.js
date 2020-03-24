import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden
  }

  #root {
    height: 100%;
    width: 100%;
  }

  .main-map {
    height: 100vh;
    width: 100vw;
  }
`;
