import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  #nprogress .bar {
    height: 4px;
  }
`;

export default GlobalStyle;
