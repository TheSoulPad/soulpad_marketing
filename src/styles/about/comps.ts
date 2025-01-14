import { colors as c, redOrange, darkBrown } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";

const redOrangeShadow = `1px 1px 1px ${redOrange}`;
const darkBrownShadow = `1px 1px 1px ${darkBrown}`;

const content = {
  borderRadius: `${s.xs}em`,
  padding: `${s.xs}em`,
};

const header = {
  backgroundColor: c.headerBg00,
  borderRadius: `${s.xs}em`,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}em`,
  textAlign: "left",
  border: "none",
  text: {
    ...f,
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
    text: {
      ...f,
      fontSize: "1rem", // 16px
      textShadow: redOrangeShadow,
    },
  },
  icons: {
    primary: {
      backgroundColor: c.iconPrimary,
      color: c.text01,
      borderRadius: `${s.xs * 0.5}em`,
    },
    secondary: {
      backgroundColor: c.iconSecondary,
      color: c.text01,
      borderRadius: `${s.xs * 0.5}em`,
    },
    iconClose: {
      backgroundColor: c.iconClose,
      color: c.text01,
      borderRadius: `${s.xs * 0.5}em`,
    },
  },
  listBox: {},
  mediaPlayer: {},
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
    border: `1px solid ${c.contentBorder}`,
    borderRadius: `${s.xs}em`,
    display: "block",
    padding: "unset",
    boxShadow: `9px 9px 0px 0px ${c.paperShadow}`,
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
