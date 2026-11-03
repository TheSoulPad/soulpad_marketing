// src/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

//remove the import fonts
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--bg, #fff8f5);
  }
  html {
    font-size: 16px;
  }
`;

export default GlobalStyle;
