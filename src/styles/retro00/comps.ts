import { colors as c } from "./colors";
import { headerText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";
import { spacing } from "../spacing";
import {
  PaperType,
  CardType,
  CompType,
  RichTextType,
} from "../../Components/types";

const getBorder = (
  color: string,
  color2: string,
  color3: string,
  color4: string,
  opt: string,
  opt2: string,
  opt3: string,
  opt4: string
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
  c.button, //right
  c.button, //bottom
  "solid", //top
  "solid", //left
  "inset", //right
  "inset" //bottom
);

const cardBorder = getBorder(
  c.contentBorder, //top
  c.headerBorder, //left
  c.headerBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const headerIconBorder = getBorder(
  c.shine,
  c.shine,
  c.contentBorder,
  c.contentBorder,
  "solid", //top
  "inset", //left
  "inset", //right
  "inset" //bottom
);

const paperBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.contentBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const richTextContentBorder = getBorder(
  c.contentBorder,
  c.contentBorder,
  c.headerBorder,
  c.contentBorder,
  "solid",
  "solid",
  "inset",
  "inset"
);

const purpleHeader = {
  ...f,
  backgroundColor: c.mainBg02,
  color: c.text02,
  display: "flex",
  fontSize: "14px",
  margin: 0,
  padding: `${spacing.xs * 0.5}em`,
  textAlign: "left",
  width: "100%",
};

const icons = {
  ...headerIconBorder,
  backgroundColor: c.icon,
  color: "#000000",
};

const contentText = {
  ...f2,
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
  padding: `${spacing.xs}rem`,
};

const paper: PaperType = {
  ...paperBorder,
  backgroundColor: c.mainBg01,
};

const customCard: RichTextType = {
  content: {
    ...defaultContent,
  },
  header: {
    styles: purpleHeader,
    text: f,
  },
};

const menuSelection: CompType = {
  activeStyles: {
    color: c.text01,
    textShadow: `0px 0px 1px ${c.text01}`,
    border: `2px dashed ${c.buttonHover}`,
  },
  content: {
    ...contentText,
    backgroundColor: c.mainBg00,
    fontWeight: "400",
    borderRadius: "0px",
    padding: `${spacing.xs}rem 0 ${spacing.xs}rem 0`,
  },

  header: {
    styles: purpleHeader,
    text: f,
  },
  text: {
    list: {
      ...f2,
      backgroundColor: c.mainBg00,
      margin: 0,
      textAlign: "center",
      justifyContent: "center",
      width: "100%",
      padding: `${spacing.xs * 0.5}rem`,
      "&:hover": {
        backgroundColor: c.button,
        border: `2px dashed ${c.buttonHover}`,
        textShadow: `0px 0px 1px ${c.text01}`,
      },
    },

    active: {
      ...f2,
      border: `2px dashed ${c.buttonHover}`,
      textShadow: `0px 0px 1px ${c.text01}`,
      backgroundColor: c.button,
      color: c.buttonText,
      margin: 0,
      padding: `${spacing.xs * 0.5}rem`,
      textAlign: "center",
      width: "100%",
      justifyContent: "center",
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
    text: f,
  },
};

export const retro = {
  ID: 2,
  themeID: "RETRO",
  buttonPrimary: {
    ...buttonBorder,
    backgroundColor: c.button,
    color: c.buttonText,
    cursor: "pointer",
    fontWeight: "bold",
    margin: "5px",
    padding: "5px",
  },
  card,
  customCard,
  content: defaultContent,
  hover: c.mainBg02,
  icons: {
    iconClose: icons,
    primary: icons,
    secondary: icons,
  },
  listBox: {
    header: purpleHeader,
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.icon,
    },
  },
  menuSelection,
  paper,
  poll: {
    ...f,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
  progressBar: {
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
  richTextPost,
  text: {
    ...f2,
    color: c.text01,
  },
  wordSticker: {
    ...f2,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
};
