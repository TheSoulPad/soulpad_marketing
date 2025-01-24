import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";
import { text } from "stream/consumers";

const purpleShadow = `1px 1px 1px ${c.text02}`;
const pinkShadow = `1px 1px 1px ${c.text03}`;
const whiteShadow = `1px 1px 1px ${c.text01}`;

const content = {
  borderRadius: `${s.xs}em`,
  padding: `${s.xs}em`,
};

const header = {
  borderRadius: `${s.xs}em`,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}em`,
  textAlign: "left",
  text: {
    ...f,
    textShadow: purpleShadow,
    margin: 0,
  },
};

const icons = {
  backgroundColor: c.mainBg01,
  color: c.icon,
  borderRadius: `${s.xs * 0.5}em`,
};

const purpleHeader = {
  ...header,
  border: `1px solid ${c.headerBorder01}`,
  backgroundColor: c.headerBg01,
};

const pinkHeader = {
  ...header,
  border: `1px solid ${c.headerBorder00}`,
  backgroundColor: c.headerBg00,
};

export const diary = {
  ID: 1,
  themeID: "DIARY",
  button: {
    borderRadius: `${s.xs}em`,
    color: c.text01,
    backgroundColor: c.button,
    border: `1px solid ${c.buttonBorder}`,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: c.text02,
    },
  },
  card: {
    ...content,
    display: "block",
    backgroundColor: c.mainBg02,
    border: "unset",
    text: {
      ...f,
      textShadow: purpleShadow,
    },
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    text: {
      ...f,
      fontSize: "1rem", // 16px
      textShadow: purpleShadow,
    },
  },
  hover: c.mainBg03,
  icons: {
    primary: icons,
    secondary: icons,
    iconClose: icons,
  },
  listBox: {
    ...content,
    display: "block",
    border: "unset",
    backgroundColor: c.mainBg03,
    text: {
      ...f,
      textShadow: purpleShadow,
    },
  },
  mediaPlayer: {
    header: {
      ...header,
      backgroundColor: c.headerBg02,
      border: "none",
    },
  },
  menuSelection: {
    header: {
      ...purpleHeader,
      backgroundColor: c.headerBg02,
      border: "none",
    },
    content: {
      ...content,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      fontWeight: "400",
    },
    list: {
      backgroundColor: c.button,
      textShadow: purpleShadow,
    },
    text: {
      ...f,
      textAlign: "center",
      color: c.text02,
      fontSize: "1.25rem", // 20px
      textShadow: pinkShadow,
      backgroundColor: c.mainBg00,
      borderRadius: `${s.xs}em`,
      "&:hover": {
        backgroundColor: c.buttonHover,
        color: `${c.text02} !important`,
        textShadow: pinkShadow,
      },
      sx: {
        ...f,
        fontSize: "1.25rem", // 20px
        color: c.text02,
        width: "100%",
        textAlign: "center !important",
        "&:hover": {
          backgroundColor: c.buttonHover,
          color: `${c.text02} !important`,
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
    text: {
      ...f,
      textShadow: purpleShadow,
    },
  },
  progressBar: {},
  richTextPost: {
    card: {
      ...content,
      display: "block",
      backgroundColor: c.mainBg03,
      border: "unset",
      text: {
        ...f,
        textShadow: purpleShadow,
      },
    },
    content: {
      ...content,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      fontWeight: "400",
    },
    header: pinkHeader,
    text: {
      ...f,
      color: c.text01,
      fontSize: "1.25rem", // 20px
      textShadow: whiteShadow,
      backgroundColor: c.mainBg00,
      borderRadius: `${s.xs}em`,
      margin: "unset",
    },
  },
  wordSticker: {},
};
