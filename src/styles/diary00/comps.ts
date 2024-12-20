import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { bodyText as f } from "./fonts";

const purpleShadow = `1px 1px 1px ${c.text02}`;
const pinkShadow = `1px 1px 1px ${c.text03}`;
const whiteShadow = `1px 1px 1px ${c.text01}`;

const content = {
  borderRadius: `${s.xs}em`,
  padding: `${s.xs}em`,
};

const header = {
  borderRadius: `${s.xs * 0.5}em`,
  display: "flex",
  padding: `${s.xs}em`,
  text: {
    ...f,
    textShadow: purpleShadow,
  },
};

const purpleHeader = {
  ...header,
  border: `1px solid ${c.headerBorder01}`,
  backgroundColor: c.headerBg01,
};

// const pinkHeader = {
//   ...header,
//   border: `1px solid ${c.headerBorder00}`,
//   backgroundColor: c.headerBg00,
// };

export const diary = {
  button: {
    borderRadius: `${s.xs}em`,
    color: c.text01,
    backgroundColor: c.button,
    border: `1px solid ${c.buttonBorder}`,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: c.text01,
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
  hover: c.mainBg02,

  icons: {
    backgroundColor: c.mainBg02,
    color: c.icon,
  },
  listBox: {},
  mediaPlayer: {},
  menuSelection: {
    header: {
      ...purpleHeader,
      backgroundColor: "transparent",
      border: "none",
    },
    content: {
      ...content,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      text: {
        ...f,
        color: c.text02,
        textShadow: "none",
        fontSize: "1.25rem", // 20px
        "&:hover": {
          color: c.text01,
        },
      },
    },
    text: {
      ...f,
      fontSize: "1.25rem", // 20px
      textShadow: pinkShadow,
      "&:hover": {
        backgroundColor: c.buttonHover,
        color: `${c.text01} !important`,
      },
    },
  },
  poll: {},
  paper: {
    backgroundColor: c.mainBg02,
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
    content: {
      ...content,
    },
    header: {
      ...purpleHeader,
    },
  },
  wordSticker: {},
};
