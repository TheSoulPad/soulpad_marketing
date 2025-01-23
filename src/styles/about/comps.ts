//About Theme

import { colors as c, redOrange, darkBrown } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";

const redOrangeShadow = `1px 1px 1px ${redOrange}`;
const darkBrownShadow = `1px 1px 1px ${darkBrown}`;

const content = {
  borderRadius: `${s.sm}em`,
  padding: `${s.xs}em`,
};

const iconsClass = {
  color: c.text00,
  fontSize: "1.25rem", // 20px
  borderRadius: `${s.sm}em`,
};

const header = {
  backgroundColor: c.headerBg00,
  borderRadius: `${s.sm}em`,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}em`,
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
  buttonPrimary: {
    borderRadius: `${s.xs}em`,
    color: c.text00,
    backgroundColor: c.buttonPrimary,
    padding: `${s.xs}em ${s.xs * 2}em`,
    boxShadow: `1px 1px 1px ${c.buttonShadow}`,
    "&:hover": {
      backgroundColor: c.buttonPrimaryHover,
      color: c.text01,
    },
  },
  card: {
    borderRadius: `${s.sm}em`,
    padding: `${s.xs}em`,
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
      backgroundColor: c.headerBg00,    }
  },
  menuSelection: {
    header,
    content: {
      ...content,
      backgroundColor: c.mainBg01,
      border: `1px solid ${c.mainBg01}`,
      fontWeight: "400",
    },
    text: {
      ...f,
      fontSize: "1.25rem", // 20px
      textShadow: darkBrownShadow,
      backgroundColor: c.mainBg01,
      borderRadius: `${s.xs}em`,
      "&:hover": {
        backgroundColor: c.buttonPrimaryHover,
        color: `${c.text01} !important`,
        textShadow: "",
      },
      sx: {
        ...f,
        fontSize: "1.25rem", // 20px
        color: c.text02,
        width: "100%",
        "&:hover": {
          backgroundColor: c.buttonPrimaryHover,
          color: `${c.text01} !important`,
        },
      },
    },
  },
  poll: {},
  paper: {
    border: `1px solid ${c.paperBorder}`,
    borderRadius: `${s.sm}em`,
    display: "block",
    padding: "unset",
    boxShadow: `17px 21px 0px 0px ${c.paperShadow}`,
    text: {
      ...f,
      textShadow: "",
    },
  },
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
      borderRadius: `${s.xs}em`,
      margin: "unset",
    },
  },
  wordSticker: {},
};
