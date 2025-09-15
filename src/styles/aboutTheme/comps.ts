import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { titleText as f, bodyText as f2 } from "./fonts";

// Common style fragments
const borderRadiusSm = `${s.sm}rem`;
const darkBrownShadow = `7px 6px 0px 0px ${c.darkBrown}`;
const redOrangeShadow = `7px 6px 1px ${c.redOrange}`;
const yellowShadow = `7px 6px 0px 0px ${c.yellow}`;

const baseButton = {
  ...f,
  boxShadow: darkBrownShadow,
  borderRadius: borderRadiusSm,
  fontSize: "1.25rem",
  padding: `${s.xs * 0.5}rem`,
  textAlign: "center",
  width: "100%",
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
  ...f,
  margin: "0",
  color: c.text01,
};

const baseIconsClass = {
  color: c.text00,
  fontSize: "1.25rem",
  borderRadius: borderRadiusSm,
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
    ...f2,
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
    ...f2,
    fontSize: "1rem",
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
  },
  Icons: {
    primary: {
      ...baseIconsClass,
      backgroundColor: c.iconPrimary,
    },
    secondary: {
      ...baseIconsClass,
      backgroundColor: c.iconSecondary,
    },
    iconClose: {
      ...baseIconsClass,
      backgroundColor: c.iconClose,
    },
  },
  ListBox: {},
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
        ...f,
        backgroundColor: "transparent",
        borderRadius: borderRadiusSm,
        color: c.text00,
        fontSize: "1.25rem",
        padding: `${s.xs * 0.5}rem`,
        textAlign: "center",
        width: "100%",
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
    boxShadow: `10px 10px 0px 0px ${c.paperShadow}`,
    backgroundColor: c.mainBg00,
  },
  Poll: {},
  ProgressBar: {},
  RichTextPost: {
    content: {
      ...baseContent,
      ...f2,
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
