import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  #nprogress .bar {
    height: 4px;
  }

  .ant-form-vertical .ant-form-item-label {
    padding: 0px !important;
  }
`;

export default GlobalStyle;
