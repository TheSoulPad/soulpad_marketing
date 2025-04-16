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
import { PostAddOutlined } from "@mui/icons-material";

const blackShadow = `-1px 2px 0px ${c.black}`;
const whiteShadow = `-1px 2px 0px ${c.white}`;
const borderRadius = `${s.sm}rem`;

const threeDContentShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg00}, 0px 10px 1px -4px ${c.mainBg00}`,
};

const threeDBtnPrimaryShadow = {
  boxShadow: `0px 4px 6px -1px ${c.green}, 0px 10px 1px -4px ${c.green}`,
};

const threeDBtnSecShadow = {
  boxShadow: `0px 4px 6px -1px ${c.purple}, 0px 10px 1px -4px ${c.purple}`,
};

const threeDOrangeShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg02}, 0px 10px 1px -4px ${c.mainBg02}`,
};

const content = {
  ...f2,
  ...threeDContentShadow,
  backgroundColor: c.mainBg00,
  border: `3px solid ${c.contentBorder}`,
  borderRadius,
  padding: `${s.sm}rem`,
};

const header = {
  // background: c.headerBg,
  background: c.headerBg,
  borderRadius: `${s.xs * 0.5}rem`,
  display: "flex",
  justifyContent: "center",
  padding: `${s.xs}rem`,
  textAlign: "left",
  margin: "auto",
  width: "50%",
  position: "absolute",
  top: "-30px",
  left: "188px",
  zIndex: 100,
};

const icons = {
  backgroundColor: c.iconBg,
  color: c.icon,
  borderRadius: `${s.xs * 0.5}rem`,
};

const card: CardType = {
  ...content,
  display: "block",
  position: "relative",
};

const paper: PaperType = {
  borderRadius,
  boxShadow: "",
  backgroundColor: "",
  border: `unset`,
  display: "block",
  padding: "unset",
};

const buttonPrimary = {
  ...threeDBtnPrimaryShadow,
  background: c.buttonPrimary,
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
    backgroundColor: "unset",
    background: c.buttonPrimary,
    color: c.text01,
    borderRadius: `${s.xs}rem`,
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    padding: `${s.md}rem`,
    border: `unset`,
    fontWeight: "400",
    position: "relative",
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
    textShadow: blackShadow,
    borderRadius: `${s.xs}rem`,
  },
  text: {
    //regular text styles 
    styles: {
      ...f,
      textAlign: "center",
      color: c.text01,
      fontSize: "1.25rem", // 20px
      textShadow: "unset",
      backgroundColor: "unset",
      borderRadius: `${s.xs}rem`,
      padding: `0 ${s.xs}rem 0 0`,
      "&:hover": {
        borderRadius: `${s.xs}rem`,
      },
    },
    //active text styles
    sx: {
      ...f,
      borderRadius: `${s.xs}rem`,
      backgroundColor: "unset",
      background: c.buttonPrimary,
      fontSize: "1.25rem", // 20px
      color: "",
      width: "100%",
      textAlign: "center !important",
      "&:hover": {
        color: `${c.text01} !important`,
        textShadow: blackShadow,
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `unset`,
    fontWeight: "400",
    position: "relative",
  },
  header: {
    styles: header,
    text: {
      ...f,
      textShadow: blackShadow,
    },
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
