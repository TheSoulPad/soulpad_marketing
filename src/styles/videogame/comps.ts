import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { headerText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";
import {
  PaperType,
  CardType,
  CompType,
  RichTextType,
} from "../../Components/types";
import { backdropClasses } from "@mui/material";

const blackShadow = `1px 1px 1px ${c.black}`;
const whiteShadow = `1px 1px 1px ${c.white}`;
const borderRadius = `${s.xs * 0.5}rem`;

const threeDContentShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg00}, 0px 10px 15px -3px ${c.mainBg00}`,
};

const threeDBtnPrimaryShadow = {
  boxShadow: `0px 4px 6px -1px ${c.buttonPrimary}, 0px 10px 15px -3px ${c.buttonPrimary}`,
};

const threeDBtnSecShadow = {
  boxShadow: `0px 4px 6px -1px ${c.buttonSecondary}, 0px 10px 15px -3px ${c.buttonSecondary}`,
};

const threeDOrangeShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg02}, 0px 10px 15px -3px ${c.mainBg02}`,
};

const content = {
  ...f2,
  backgroundColor: c.mainBg00,
  border: `1px solid ${c.contentBorder}`,
  borderRadius,
  padding: `${s.xs}rem`,
  textShadow: whiteShadow,
};

const trapezoidBorder = {
  width: "200px",
  height: "0",
  borderTop: `50px solid ${c.skyBlue}`,
  borderBottom: `50px solid ${c.skyBlue}`,
  borderLeft: `100px solid ${c.skyBlue}`,
  borderRight: `100px solid ${c.skyBlue}`,
  position: "relative",
  margin: "0 auto",
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-100px",
    width: "200px",
    height: "100px",
    backgroundColor: c.headerBg,
    clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
  },
};

const header = {
  ...trapezoidBorder,
  // background: c.headerBg,
  background: c.headerBg,
  borderRadius,
  display: "flex",
  justifyContent: "center",
  padding: `${s.xs}rem`,
  textAlign: "left",
};

const icons = {
  backgroundColor: c.iconBg,
  color: c.icon,
  borderRadius: `${s.xs * 0.5}rem`,
};

const card: CardType = {
  ...content,
  display: "block",
};

const paper: PaperType = {
  borderRadius,
  boxShadow: "",
  backgroundColor: "",
  border: `1px solid ${c.contentBorder}`,
  display: "block",
  padding: "unset",
};

const customCard: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg02,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
    color: c.text01,
  },
  header: {
    styles: header,
    text: {
      ...f,
      textShadow: blackShadow,
    },
  },
};

const menuSelection: CompType = {
  activeText: {
    color: c.text00,
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    padding: `${s.xs}rem`,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: header,

    text: {
      ...f,
      textShadow: whiteShadow,
      margin: 0,
    },
  },
  list: {
    backgroundColor: c.headerBg,
    textShadow: whiteShadow,
  },
  text: {
    styles: {
      ...f,
      textAlign: "center",
      color: "",
      fontSize: "1.25rem", // 20px
      textShadow: "",
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
      color: "",
      width: "100%",
      textAlign: "center !important",
      "&:hover": {
        borderRadius,
        backgroundColor: "",
        color: `${c.text01} !important`,
        textShadow: "",
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: header,
    text: {
      ...f,
      textShadow: blackShadow,
    },
  },
};

const buttonPrimary = {
  ...threeDBtnPrimaryShadow,
  backgroundColor: c.buttonPrimary,
  border: `1px solid ${c.buttonPrimaryBorder}`,
  color: c.text01,
  borderRadius,
  "&:hover": {
    backgroundColor: c.buttonHover,
    color: c.green,
  },
};

const buttonSecondary = {
  ...threeDBtnSecShadow,
  borderRadius,
  color: c.text01,
  backgroundColor: c.buttonSecondary,
  border: `1px solid ${c.buttonSecondaryBorder}`,
  "&:hover": {
    backgroundColor: c.buttonHover,
    color: c.purple,
  },
};

///////// BOOKMARK - NOT COMPLETED //////////

export const videoGame = {
  ID: 3,
  themeID: "VIDEOGAME",
  buttonPrimary,
  buttonSecondary,
  card,
  customCard,
  content: {
    ...content,
  },
  hover: "",
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
    backgroundColor: "",
    textShadow: blackShadow,
  },
  mediaPlayer: {
    header: {
      ...header,
      backgroundColor: "",
      border: "none",
    },
  },
  menuSelection,
  paper,
  poll: {},
  progressBar: {},
  richTextPost,
  wordSticker: {},
};
