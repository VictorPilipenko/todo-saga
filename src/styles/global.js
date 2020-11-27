import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

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

  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: ${({ theme: { bodyBg } }) => bodyBg};
    color: ${({ theme: { fontColor } }) => fontColor};
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

  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export default GlobalStyle;
