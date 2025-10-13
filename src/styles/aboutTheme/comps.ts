import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { text } from "stream/consumers";

const titleText = {
  fontFamily: "Galindo, sans-serif",
  textAlign: "left",
};

const bodyText = {
  fontFamily: "Roboto, sans-serif",
  color: c.text00,
};

// Common style fragments
const borderRadiusSm = `${s.sm}rem`;
const darkBrownShadow = `7px 6px 0px 0px ${c.darkBrown}`;
const redOrangeShadow = `5px 8px 0px 0px ${c.redOrange}`;
const yellowShadow = `7px 6px 0px 0px ${c.yellow}`;

const baseButton = {
  ...titleText,
  boxShadow: darkBrownShadow,
  borderRadius: borderRadiusSm,
  fontSize: "1rem",
  textAlign: "center",
  width: "100%",
  padding: `${s.xs}rem`,
  textTransform: "lowercase",
};

const baseContent = {
  borderBottomLeftRadius: borderRadiusSm,
  borderBottomRightRadius: borderRadiusSm,
  border: "none",
  padding: `${s.sm}rem`,
  backgroundColor: c.mainBg00,
};

const baseHeader = {
  backgroundColor: c.headerBg,
  borderTopLeftRadius: borderRadiusSm,
  borderTopRightRadius: borderRadiusSm,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  border: "none",
};

const baseHeaderText = {
  ...titleText,
  margin: "0",
  color: c.text01,
};

const aboutTheme = {
  Button: {
    primary: {
      ...baseButton,
      backgroundColor: c.buttonPrimary,
      color: c.text00,
      "&:hover": {
        backgroundColor: c.buttonPrimaryHover,
        boxShadow: redOrangeShadow,
        color: c.redOrange,
      },
    },
    secondary: {
      ...baseButton,
      backgroundColor: c.buttonSecondary,
      color: c.text00,
      "&:hover": {
        backgroundColor: c.buttonSecondaryHover,
        boxShadow: yellowShadow,
        color: c.yellow,
      },
    },
    custom: baseButton,
  },
  Card: {
    ...bodyText,
    borderRadius: borderRadiusSm,
    display: "block",
    backgroundColor: c.mainBg00,
  },
  CustomCard: {
    content: {
      ...baseContent,
      fontWeight: "400",
      color: c.text00,
    },
    header: {
      styles: {
        ...baseHeader,
        ...baseHeaderText,
        textShadow: darkBrownShadow,
        padding: `${s.xs}rem`,
        color: c.text01,
        textAlign: "center",
        display: "block",
      },
    },
  },
  Content: {
    ...baseContent,
    ...bodyText,
    fontSize: "1rem",
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
  },
  MenuSelection: {
    activeStyles: {
      border: "none",
      color: c.text01,
    },
    content: {
      ...baseContent,
      border: "unset",
      fontWeight: "400",
    },
    header: {
      styles: baseHeader,
      text: { ...baseHeaderText, textAlign: "center" },
    },
    text: {
      active: {
        ...baseButton,
        backgroundColor: c.buttonPrimary,
        color: c.text00,
      },
      list: {
        ...titleText,
        backgroundColor: "transparent",
        borderRadius: borderRadiusSm,
        color: c.text00,
        fontSize: "1rem",
        padding: `${s.xs * 0.5}rem`,
        textAlign: "center",
        width: "100%",
        textTransform: "lowercase",
        "&:hover": {
          backgroundColor: c.buttonPrimary,
          boxShadow: darkBrownShadow,
          color: `${c.text00}`,
        },
      },
    },
  },
  Paper: {
    borderRadius: borderRadiusSm,
    display: "block",
    padding: "unset",
    boxShadow: `7px 8px 0px 0px ${c.paperShadow}`,
    backgroundColor: c.mainBg00,
  },
  RichTextPost: {
    content: {
      ...baseContent,
      ...bodyText,
      fontSize: "1.25rem",
      fontWeight: "400",
      textShadow: "none",
      margin: "unset",
      padding: `${s.xs}rem`,
    },
    header: {
      styles: baseHeader,
      text: baseHeaderText,
    },
  },
  ThemeID: "SOULPAD",
  WordSticker: {},
};

export default aboutTheme;
