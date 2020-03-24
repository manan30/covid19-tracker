import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden
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
