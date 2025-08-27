// src/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

//remove the import fonts
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #edf9f9;;
  }
  html {
    font-size: 16px;
    }
`;

export default GlobalStyle;
