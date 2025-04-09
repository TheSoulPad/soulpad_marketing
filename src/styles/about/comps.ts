//About Theme

import { colors as c, redOrange, darkBrown } from "./colors";
import { spacing as s } from "../spacing";
import { titleText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";
import {
  PaperType,
  CardType,
  CompType,
  RichTextType,
} from "../../Components/types";

const borderRadiusSm = `${s.sm}rem`;
const borderRadiusXs = `${s.xs}rem`;
const redOrangeShadow = `1px 1px 1px ${redOrange}`;
const darkBrownShadow = `1px 1px 1px ${darkBrown}`;
// const beigeShadow = `1px 1px 1px ${c.text01}`;

const content = {
  borderRadius: borderRadiusSm,
  padding: `${s.xs}rem`,
};

const iconsClass = {
  color: c.text00,
  fontSize: "1.25rem", // 20px
  borderRadius: borderRadiusSm,
};

const header = {
  backgroundColor: c.headerBg00,
  borderRadius: borderRadiusXs,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  border: "none",
};

//for sx MUI Typography componet
//has to be seperate from main header styles
const headerText = {
  ...f,
  margin: "0",
  color: c.text01,
};

const card: CardType = {
  ...f2,
  borderRadius: borderRadiusSm,
  padding: `${s.xs}rem`,
  display: "block",
  backgroundColor: c.mainBg00,
};

const paper: PaperType = {
  border: `1px solid ${c.paperBorder}`,
  borderRadius: borderRadiusSm,
  display: "block",
  padding: "unset",
  boxShadow: `10px 10px 0px 0px ${c.paperShadow}`,
  backgroundColor: c.mainBg00,
};

const customCard: RichTextType = {
  content: {
    ...card,
    fontWeight: "400",
    color: c.text01,
    backgroundColor: c.mainBg01,
  },
  header: {
    styles: header,
    text: {
      ...f,
      textShadow: darkBrownShadow,
    },
  },
};

const menuSelection: CompType = {
  activeText: {
    color: c.text01,
    border: "none",
  },
  content: {
    ...content,
    padding: `${s.xs}rem 0 0 0`,
    border: "unset",
    fontWeight: "400",
  },
  header: {
    styles: header,
    text: headerText,
  },
  list: {
    backgroundColor: c.buttonPrimary,
    textShadow: redOrangeShadow,
  },
  text: {
    styles: {
      ...f,
      backgroundColor: "transparent",
      borderRadius: `${s.xs}rem`,
      fontSize: "1.25rem", // 20px
      padding: `0 ${s.xs}rem 0 0`,
      "&:hover": {
        borderRadius: `${s.xs}rem`,
      },
    },
    sx: {
      ...f,
      borderRadius: borderRadiusSm,
      color: c.text02,
      fontSize: "1.25rem", // 20px
      padding: `${s.xs * 0.5}rem`,
      textAlign: "center",
      width: "100%",
      "&:hover": {
        backgroundColor: c.buttonPrimary,
        color: `${c.text01} !important`,
        textShadow: redOrangeShadow,
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    ...f2,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontSize: "1.25rem", // 20px
    fontWeight: "400",
    textShadow: "none",
    borderRadius: `${s.xs}rem`,
    margin: "unset",
  },
  header: {
    styles: header,
    text: headerText,
  },
};

export const about = {
  ID: 0,
  buttonPrimary: {
    borderRadius: `${s.xs}rem`,
    color: c.text00,
    backgroundColor: c.buttonPrimary,
    padding: `${s.xs}rem ${s.xs * 2}rem`,
    boxShadow: `1px 1px 1px ${c.buttonShadow}`,
    "&:hover": {
      backgroundColor: c.buttonPrimaryHover,
      color: c.text01,
    },
  },
  card,
  customCard,
  content: {
    ...content,
    ...f2,
    fontSize: "1rem", // 16px
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
  },
  icons: {
    primary: {
      ...iconsClass,
      backgroundColor: c.iconPrimary,
    },
    secondary: {
      ...iconsClass,
      backgroundColor: c.iconSecondary,
    },
    iconClose: {
      ...iconsClass,
      backgroundColor: c.iconClose,
    },
  },
  listBox: {},
  mediaPlayer: {
    header,
  },
  menuSelection,
  paper,
  poll: {},
  progressBar: {},
  richTextPost,
  themeID: "SOULPAD",
  wordSticker: {},
};
