import { colors as c } from "./colors";
import { spacing as s } from "../spacing";

import {
  PaperType,
  CardType,
  MenuType,
  RichTextType,
  ButtonType,
} from "../../Components/types";

export const headerText = {
  fontFamily: "'Turret Road Local', Turret Road, sans-serif",
  fontWeight: "800",
  textAlign: "center",
  color: c.text00,
  fontSize: "2rem",
};

export const bodyText = {
  fontFamily: `'Quantico Local', Quantico, sans-serif`,
  textAlign: "left",
  fontWeight: "300",
  color: `${c.text01}`,
  fontSize: "1.25rem",
};

const blackShadow = `-1px 2px 0px ${c.black}`;
const whiteShadow = `-1px 2px 0px ${c.white}`;
const borderRadius = `${s.sm}rem`;
const buttonStyles = {
  padding: `${s.xs * 0.5}rem`,
  border: "none",
  borderRadius: `${s.xs * 0.5}rem`,
  cursor: "pointer",
  transition: "all 0.2s ease",
};

const threeDContentShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg00}, 0px 10px 1px -4px ${c.mainBg00}`,
};

const threeDBtnPrimaryShadow = {
  ...buttonStyles,
  boxShadow: `0 6px 0 ${c.lightGreen}, 0 6px 10px rgba(0, 0, 0, 0.2)`,
};

const threeDBtnSecShadow = {
  ...buttonStyles,
  boxShadow: `0px 4px 6px -1px ${c.purple}, 0px 10px 1px -4px ${c.purple}`,
};

// const threeDOrangeShadow = {
//   boxShadow: `0px 4px 6px -1px ${c.mainBg02}, 0px 10px 1px -4px ${c.mainBg02}`,
// };

const content = {
  ...bodyText,
  ...threeDContentShadow,
  backgroundColor: c.mainBg00,
  border: `3px solid ${c.contentBorder}`,
  borderRadius,
  padding: `${s.xs}rem`,
};

const header = {
  background: c.headerBg,
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomLeftRadius: "40px",
  borderBottomRightRadius: "40px",
  boxShadow: "inset 0 -10px 0 #a2d3e4",
  margin: "0 auto",
  zIndex: 100,
};

const card: CardType = {
  ...content,
  display: "block",
  position: "relative",
};

const paper: PaperType = {
  borderRadius,
  boxShadow: "",
  backgroundColor: "",
  border: `unset`,
  display: "block",
  padding: "unset",
};

const buttonPrimary = {
  ...threeDBtnPrimaryShadow,
  background: c.buttonPrimary,
  border: `1px solid ${c.buttonPrimaryBorder}`,
  color: c.text01,
};

const buttonSecondary = {
  ...threeDBtnSecShadow,
  borderRadius,
  margin: `${s.xs}rem 0`,
  color: c.text01,
  backgroundColor: c.buttonSecondary,
  border: `1px solid ${c.buttonSecondaryBorder}`,
  "&:hover": {
    backgroundColor: c.buttonHover,
    color: c.purple,
  },
};

const customCard: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg02,
    border: "none",
    fontWeight: "400",
    color: c.text01,
  },
  header: {
    styles: {
      ...headerText,
      ...header,
      display: "block",
      padding: `0.1rem`,
      textShadow: whiteShadow,
      fontSize: "1.3rem",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    backgroundColor: "unset",
    background: c.buttonPrimary,
    color: c.text01,
    borderRadius: `${s.xs}rem`,
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `unset`,
    fontWeight: "400",
    position: "relative",
  },
  header: {
    styles: header,

    text: {
      ...headerText,
      textShadow: whiteShadow,
      margin: 0,
      textAlign: "center",
      fontSize: "1.2rem",
    },
  },

  text: {
    //regular text styles
    list: {
      ...headerText,
      textAlign: "center",
      color: c.text01,
      fontSize: "1.25rem", // 20px
      textShadow: "unset",
      backgroundColor: "transparent",
      padding: `0 ${s.xs}rem 0 0`,
      width: "100%",
      "&:hover": {
        ...buttonPrimary,
        textShadow: blackShadow,
        background: c.buttonPrimary,
      },
    },
    //active text styles
    active: {
      ...headerText,
      ...buttonPrimary,
      background: c.buttonPrimary,
      fontSize: "1.25rem", // 20px
      color: `${c.text01}`,
      width: "100%",
      textAlign: "center",
      textShadow: blackShadow,
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `unset`,
    fontWeight: "400",
    position: "relative",
  },
  header: {
    styles: header,
    text: {
      ...headerText,
      textShadow: whiteShadow,
    },
  },
};

const buttons: ButtonType = {
  primary: buttonPrimary,
  secondary: buttonSecondary,
  custom: buttonStyles,
};

export const videogameTheme = {
  Button: buttons,
  Card: card,
  CustomCard: customCard,
  Content: content,
  MenuSelection: menuSelection,
  Paper: paper,
  RichTextPost: richTextPost,
  ThemeID: "VIDEOGAME",
};
