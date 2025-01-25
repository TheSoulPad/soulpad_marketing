//About Theme

import { colors as c, redOrange, darkBrown } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";
import { text } from "stream/consumers";

const borderRadiusSm = `${s.sm}rem`;
const borderRadiusXs = `${s.xs}rem`;
const redOrangeShadow = `1px 1px 1px ${redOrange}`;
// const darkBrownShadow = `1px 1px 1px ${darkBrown}`;
// const beigeShadow = `1px 1px 1px ${c.text01}`;

const defaultPaper = {
  border: `1px solid ${c.paperBorder}`,
  borderRadius: borderRadiusSm,
  display: "block",
  padding: "unset",
  boxShadow: `17px 21px 0px 0px ${c.paperShadow}`,
  text: {
    ...f,
    textShadow: "",
  },
};

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
  borderRadius: borderRadiusSm,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  border: "none",
  text: {
    ...f,
    margin: "0",
    color: c.text01,
    textShadow: "",
  },
};

export const about = {
  ID: 0,
  themeID: "SOULPAD",
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
  card: {
    borderRadius: borderRadiusSm,
    padding: `${s.xs}rem`,
    display: "block",
    backgroundColor: c.mainBg00,
    border: "unset",
    text: {
      ...f,
      textShadow: "",
    },
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    text: {
      ...f,
      fontSize: "1rem", // 16px
      textShadow: redOrangeShadow,
    },
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
    header: {
      ...header,
      backgroundColor: c.headerBg00,
    },
  },
  menuSelection: {
    activeText: {
      color: c.text01,
      border: "none",
    },
    header,
    content: {
      ...content,
      backgroundColor: c.mainBg01,
      border: `1px solid ${c.mainBg01}`,
      fontWeight: "400",
    },
    list: {
      backgroundColor: c.buttonPrimary,
      textShadow: redOrangeShadow,
    },
    paper: {
      ...defaultPaper,
      backgroundColor: "transparent",
      boxShadow: `10px 10px 0px 0px ${c.paperShadow}`,
    },
    text: {
      styles: {
        ...f,
        fontSize: "1.25rem", // 20px
        backgroundColor: "transparent",
        borderRadius: `${s.xs}rem`,
        "&:hover": {
          borderRadius: `${s.xs}rem`,
        },
      },
      sx: {
        ...f,
        borderRadius: borderRadiusSm,
        padding: `${s.xs * 0.5}rem`,
        fontSize: "1.25rem", // 20px
        color: c.text02,
        width: "100%",
        textAlign: "center",
        "&:hover": {
          backgroundColor: c.buttonPrimary,
          color: `${c.text01} !important`,
          textShadow: redOrangeShadow,
        },
      },
    },
  },
  poll: {},
  paper: defaultPaper,
  progressBar: {},
  richTextPost: {
    card: {
      ...content,
      display: "block",
      backgroundColor: c.mainBg00,
      border: "unset",
      text: {
        ...f,
        textShadow: "",
      },
    },
    content: {
      ...content,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      fontWeight: "400",
    },
    header,
    text: {
      ...f,
      color: c.text00,
      fontSize: "1.25rem", // 20px
      textShadow: "none",
      backgroundColor: c.mainBg00,
      borderRadius: `${s.xs}rem`,
      margin: "unset",
    },
  },
  wordSticker: {},
};
