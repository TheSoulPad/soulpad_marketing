// src/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

//remove the import fonts
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Spicy+Rice&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
