var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// src/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";
//remove the import fonts
var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background-color: #edf9f9;;\n  }\n  html {\n    font-size: 16px;\n    }\n"], ["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background-color: #edf9f9;;\n  }\n  html {\n    font-size: 16px;\n    }\n"])));
export default GlobalStyle;
var templateObject_1;
