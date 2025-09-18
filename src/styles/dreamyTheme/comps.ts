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
  fontFamily: `Gaegu, serif`,
  textAlign: "left",
  color: c.text01,
  fontSize: "2rem",
};

export const bodyText = {
  fontFamily: `Gaegu, serif`,
  textAlign: "left",
  color: c.text02,
  fontSize: "1.25rem",
};

const borderRadius = `50px`;
const softShadow = `1px 1px 1px ${c.text02}`;
const subtleShadow = `1px 1px 1px ${c.text03}`;

const allButtons = {
  ...headerText,
  borderRadius,
  width: "100%",
  textAlign: "center",
  color: `${c.text01}`,
};

const primaryButton = {
  ...allButtons,
  backgroundColor: c.button,
  textShadow: softShadow,
};

const secondaryButton = {
  ...allButtons,
  backgroundColor: c.buttonSecondary,
  textShadow: subtleShadow,
};

const content = {
  ...bodyText,
  backgroundColor: c.mainBg00,
  border: `1px solid ${c.contentBorder}`,
  borderRadius,
  padding: `${s.xs}rem`,
};

const header = {
  ...headerText,
  borderRadius,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  backgroundColor: c.headerBg00,
};
const card: CardType = {
  ...content,
  display: "block",
  backgroundColor: c.mainBg02,
};

const paper: PaperType = {
  ...headerText,
  borderRadius,
  boxShadow: "",
  backgroundColor: c.mainBg01,
  border: `1px solid ${c.contentBorder}`,
  display: "block",
  padding: "unset",
  height: "100%",
};

const customCard: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: {
      ...header,
      textShadow: softShadow,
      padding: `${s.xs}rem`,
      color: c.text01,
      textAlign: "center",
      display: "block",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    color: c.text01,
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    padding: `${s.xs}rem`,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: {
      ...header,
      backgroundColor: "transparent",
      padding: 0,
    },

    text: {
      ...headerText,
      textShadow: softShadow,
      margin: 0,
      textAlign: "center",
    },
  },

  text: {
    list: {
      ...headerText,
      textAlign: "center",
      color: c.text02,
      textShadow: "none",
      backgroundColor: "transparent",
      borderRadius,
      width: "100%",
      padding: `0 ${s.xs}rem 0 0`,
      "&:hover": {
        backgroundColor: c.button,
        color: `${c.text01}`,
        textShadow: softShadow,
      },
    },
    active: primaryButton,
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: header,
    text: {
      ...headerText,
      textShadow: softShadow,
    },
  },
};

const buttons: ButtonType = {
  primary: {
    ...primaryButton,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: `${c.text02}`,
    },
  },
  secondary: {
    ...secondaryButton,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: `${c.text02}`,
    },
  },
  custom: allButtons,
};

const dreamyTheme = {
  Button: buttons,
  Card: card,
  CustomCard: customCard,
  Content: content,
  Hover: c.mainBg03,
  ListBox: {
    ...content,
    ...headerText,
    display: "block",
    border: "unset",
    backgroundColor: c.mainBg03,
  },
  MenuSelection: menuSelection,
  Paper: paper,
  Poll: {},
  ProgressBar: {},
  RichTextPost: richTextPost,
  ThemeID: "DREAMY",
  WordSticker: {},
};

export default dreamyTheme;
