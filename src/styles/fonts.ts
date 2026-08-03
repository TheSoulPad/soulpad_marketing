import type { CSSObject } from "@mui/material/styles";

//official title font
const headline1Font: CSSObject = {
  fontFamily: "'Fredoka Local', Fredoka, sans-serif",
  fontWeight: "600",
  textAlign: "center",
  fontSize: "3rem", // 40px
  fontStyle: "normal",
  fontOpticalSizing: "auto",
};
const headline2Font: CSSObject = {
  margin: "auto",
  fontFamily: "'Fredoka Local', Fredoka, sans-serif",
  fontSize: "1.5rem", // 24px
  fontWeight: "500",
  textAlign: "center",
  width: "100%",
};

const body1Styles: CSSObject = {
  fontFamily: "'Fredoka Local', Fredoka, sans-serif",
  fontWeight: "500",
  fontSize: "1rem", // 16px
};

const funFont1: CSSObject = {
  fontFamily: "'Galindo Local', Galindo, sans-serif",
  fontSize: "1.5rem", // 24px
  lineHeight: "1.5",
  display: "inline",
  fontWeight: "800",
  margin: "0",
};

export { headline1Font, headline2Font, body1Styles, funFont1 };
