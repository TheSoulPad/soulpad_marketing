import { colors as c } from "./colors";
import { spacing } from "../spacing";
import {
  PaperType,
  CardType,
  MenuType,
  RichTextType,
  ButtonType,
} from "../../Components/types";

export const headerText = {
  color: c.text02, //lightgrey
  fontFamily: `Quantico, sans-serif`,
  fontSize: "1.5rem",
  textAlign: "left",
  textShadow: `0px 0px 1px ${c.text01}`,
};

export const bodyText = {
  color: c.text01, //purple
  fontFamily: `Quantico, sans-serif`,
  fontSize: "1.25rem",
  textShadow: `0px 0px 1px ${c.text01}`,
};

const getBorder = (
  color: string,
  color2: string,
  color3: string,
  color4: string,
  opt: string,
  opt2: string,
  opt3: string,
  opt4: string,
) => {
  const borderStyles = {
    borderTop: `2px ${opt} ${color}`,
    borderLeft: `2px ${opt2} ${color2}`,
    borderRight: `2px ${opt3} ${color3}`,
    borderBottom: `2px ${opt4} ${color4}`,
    borderRadius: "0px",
  };
  return borderStyles;
};

const buttonBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.navyBlue, //right
  c.navyBlue, //bottom
  "solid", //top
  "solid", //left
  "inset", //right
  "inset", //bottom
);

const baseButton = {
  ...bodyText,
  ...buttonBorder,
  cursor: "pointer",
  padding: `${spacing.xs * 0.5}rem`,
  textAlign: "center" as const,
  width: "100%",
  justifyContent: "center",
  margin: 0,
};

const primaryButton = {
  ...baseButton,
  backgroundColor: c.button,
  textShadow: `0px 0px 1px ${c.text01}`,
  color: c.buttonText,
};

const secondaryButton = {
  ...baseButton,
  backgroundColor: c.mainBg02,
  textShadow: `0px 0px 1px ${c.text02}`,
  color: c.text02,
};

const cardBorder = getBorder(
  c.contentBorder, //top
  c.headerBorder, //left
  c.headerBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset",
);

const richTextContentBorder = getBorder(
  c.contentBorder,
  c.contentBorder,
  c.headerBorder,
  c.contentBorder,
  "solid",
  "solid",
  "inset",
  "inset",
);

const purpleHeader = {
  ...headerText,
  backgroundColor: c.mainBg02,
  color: c.text02,
  margin: 0,
  textAlign: "left",
  width: "100%",
  display: "block",
  fontSize: "1.5rem",
  minHeight: "36px",
  height: "100%",
};

const contentText = {
  ...bodyText,
  padding: `${spacing.xs}em`,
};

const defaultContent = {
  ...cardBorder,
  ...contentText,
  backgroundColor: c.mainBg00,
  padding: `0 ${spacing.xs}rem 0 0`,
};

const card: CardType = {
  ...cardBorder,
  ...contentText,
  display: "block",
  backgroundColor: c.mainBg00,
  padding: "0",
};

const paperBorder = getBorder(
  c.shine,
  c.shine,
  c.contentBorder,
  c.contentBorder,
  "solid",
  "solid",
  "inset",
  "inset",
);

const paper: PaperType = {
  ...paperBorder,
  backgroundColor: c.mainBg01,
  height: "100%",
};

const customCard: RichTextType = {
  content: {
    ...defaultContent,
  },
  header: {
    styles: {
      ...purpleHeader,
      textAlign: "center",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    border: `2px dashed ${c.buttonHover}`,
    color: c.text01,
    textShadow: `0px 0px 1px ${c.text01}`,
  },
  content: {
    ...contentText,
    backgroundColor: c.mainBg00,
    borderRadius: "0px",
    fontWeight: "400",
    // padding: `${spacing.xs}rem 0 ${spacing.xs}rem 0`,
  },
  header: {
    styles: purpleHeader,
    text: { ...headerText, marginLeft: spacing.sm, textAlign: "center" },
  },
  text: {
    active: {
      ...primaryButton,
      fontSize: "1.5rem",
      border: `2px dashed ${c.buttonHover}`,
    },
    list: {
      ...primaryButton,
      backgroundColor: "transparent",
      border: "none",
      fontSize: "1.5rem",
      "&:hover": {
        backgroundColor: c.button,
        border: `2px dashed ${c.buttonHover}`,
        textShadow: `0px 0px 1px ${c.text01}`,
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...contentText,
    backgroundColor: c.contentBg,
    padding: `${spacing.md}rem ${spacing.md}rem`,
  },
  header: {
    styles: purpleHeader,
    text: { ...headerText, marginLeft: spacing.sm },
  },
};

const buttons: ButtonType = {
  primary: {
    ...primaryButton,
    "&:hover": {
      border: `2px dashed ${c.buttonHover}`,
    },
  },
  secondary: {
    ...secondaryButton,
    "&:hover": {
      border: `2px dashed ${c.text03}`,
    },
  },
  custom: baseButton,
};

const retroTheme = {
  Button: buttons,
  Card: card,
  CustomCard: customCard,
  Content: defaultContent,
  Hover: c.mainBg02,

  ListBox: {
    header: purpleHeader,
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.icon,
    },
  },
  MenuSelection: menuSelection,
  Paper: paper,
  Poll: {
    ...headerText,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
  ProgressBar: {
    header: {
      ...purpleHeader,
    },
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.mainBg01,
      fontSize: "14px",
      padding: `${spacing.xs}em`,
    },
  },
  RichTextPost: richTextPost,
  Text: {
    ...bodyText,
    color: c.text01,
  },
  WordSticker: {
    ...bodyText,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
  ThemeID: "RETRO",
};

export default retroTheme;
