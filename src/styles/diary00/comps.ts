import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { headerText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";

const purpleShadow = `1px 1px 1px ${c.text02}`;
const pinkShadow = `1px 1px 1px ${c.text03}`;
const whiteShadow = `1px 1px 1px ${c.text01}`;
const borderRadius = `${s.xs * 0.5}rem`;

const content = {
  ...f2,
  borderRadius,
  padding: `${s.xs}rem`,
  backgroundColor: c.mainBg00,
  border: `1px solid ${c.contentBorder}`,
  textShadow: whiteShadow,
};

const header = {
  ...f,
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
  backgroundColor: c.headerBg02,
};

const pinkHeader = {
  ...header,
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
  },
  content: {
    ...content,
  },
  hover: c.mainBg03,
  icons: {
    iconClose: icons,
    primary: icons,
    secondary: icons,
  },
  listBox: {
    ...content,
    ...f,
    display: "block",
    border: "unset",
    backgroundColor: c.mainBg03,
    textShadow: purpleShadow,
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
  },
  poll: {},
  progressBar: {},
  richTextPost: {
    card: {
      styles: {
        ...content,
        display: "block",
        backgroundColor: c.mainBg03,
        border: "unset",
      },
      text: {
        ...f2,
        textShadow: purpleShadow,
      },
    },
    content: {
      ...content,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      fontWeight: "400",
    },
    header: {
      styles: pinkHeader,
      text: {
        ...f,
        textShadow: purpleShadow,
      },
    },
  },
  wordSticker: {},
};
