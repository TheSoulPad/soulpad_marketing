import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";
import { text } from "stream/consumers";

const purpleShadow = `1px 1px 1px ${c.text02}`;
const pinkShadow = `1px 1px 1px ${c.text03}`;
const whiteShadow = `1px 1px 1px ${c.text01}`;
const borderRadius = `${s.xs * 0.5}rem`;

const defaultPaper = {
  paper: {
    border: `1px solid ${c.contentBorder}`,
    borderRadius,
    display: "block",
    padding: "unset",
    text: {
      ...f,
      textShadow: purpleShadow,
    },
  },
};

const content = {
  borderRadius,
  padding: `${s.xs}rem`,
};

const header = {
  borderRadius,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
};

const icons = {
  backgroundColor: c.mainBg01,
  color: c.icon,
  borderRadius: `${s.xs * 0.5}rem`,
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
    borderRadius,
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
    iconClose: icons,
    primary: icons,
    secondary: icons,
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
    activeText: {
      color: c.text01,
      border: "none",
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
        ...purpleHeader,
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
      },

      text: {
        ...f,
        textShadow: purpleShadow,
        margin: 0,
      },
    },
    list: {
      backgroundColor: c.button,
      textShadow: purpleShadow,
    },
    paper: {
      ...defaultPaper,
      backgroundColor: c.mainBg02,
      border: `1px solid ${c.mainBg00}`,
    },
    text: {
      styles: {
        ...f,
        textAlign: "center",
        color: c.text02,
        fontSize: "1.25rem", // 20px
        textShadow: pinkShadow,
        backgroundColor: c.mainBg00,
        borderRadius,
        padding: `0 ${s.xs}rem 0 0`,
        "&:hover": {
          borderRadius,
        },
      },
      sx: {
        ...f,
        borderRadius,
        fontSize: "1.25rem", // 20px
        color: c.text02,
        width: "100%",
        textAlign: "center !important",
        "&:hover": {
          borderRadius,
          backgroundColor: c.button,
          color: `${c.text01} !important`,
          textShadow: purpleShadow,
        },
      },
    },
  },
  paper: {
    border: `1px solid ${c.contentBorder}`,
    borderRadius,
    display: "block",
    padding: "unset",
    boxShadow: `10px 10px 0px 0px ${c.mainBg00}`,
    text: {
      ...f,
      textShadow: purpleShadow,
    },
  },
  poll: {},
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
      borderRadius,
      margin: "unset",
    },
  },
  wordSticker: {},
};
