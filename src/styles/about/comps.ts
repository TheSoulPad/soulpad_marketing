//About Theme

import { colors as c, redOrange, darkBrown } from "./colors";
import { spacing as s } from "../spacing";
import { titleText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";

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
  boxShadow: `10px 10px 0px 0px ${c.paperShadow}`,
  backgroundColor: c.mainBg00,
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
  borderRadius: borderRadiusXs,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  border: "none",
};

const headerText = {
  ...f,
  margin: "0",
  color: c.text01,
  textShadow: "",
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
    ...f2,
    borderRadius: borderRadiusSm,
    padding: `${s.xs}rem`,
    display: "block",
    backgroundColor: c.mainBg00,
    border: "unset",
    textShadow: "",
  },
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
  menuSelection: {
    activeText: {
      color: c.text01,
      border: "none",
    },
    header: {
      styles: {
        ...header,
      },

      text: headerText,
    },
    content: {
      ...content,
      padding: `${s.xs}rem 0 0 0`,
      border: "unset",
      fontWeight: "400",
    },
    list: {
      backgroundColor: c.buttonPrimary,
      textShadow: redOrangeShadow,
    },
    text: {
      styles: {
        ...f,
        fontSize: "1.25rem", // 20px
        backgroundColor: "transparent",
        borderRadius: `${s.xs}rem`,
        padding: `0 ${s.xs}rem 0 0`,
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
      styles: {
        ...content,
        display: "block",
        backgroundColor: c.mainBg00,
        border: "unset",
      },
      text: {
        ...f,
        textShadow: "",
      },
    },
    content: {
      ...content,
      ...f2,
      backgroundColor: c.mainBg00,
      border: `1px solid ${c.contentBorder}`,
      fontWeight: "400",
      fontSize: "1.25rem", // 20px
      textShadow: "none",
      borderRadius: `${s.xs}rem`,
      margin: "unset",
    },
    header: {
      styles: {
        ...header,
      },
      text: headerText,
    },
  },
  wordSticker: {},
};
