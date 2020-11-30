import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
    font-size: calc( 24px + (22 - 18) * (( 100vw - 320px ) / (1920 - 320)));
    overflow-x: hidden;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  }

  html,
  body {
    min-height: 100%;
    min-height: 100vh;
  }

  div {
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }

  ul, ol, li {
    list-style: none
  }

  #nprogress .bar {
    height: 4px;
  }
`;

export default GlobalStyle;
