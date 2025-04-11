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

const blackShadow = `1px 1px 1px ${c.black}`;
const whiteShadow = `1px 1px 1px ${c.white}`;
const borderRadius = `${s.xs * 0.5}rem`;

const threeDContentShadow = {
  boxShadow: `0px 4px 6px -1px ${c.mainBg00}, 0px 10px 15px -3px ${c.mainBg00}`,
};

const threeDBtnPrimaryShadow = {
  boxShadow: `0px 4px 6px -1px ${c.buttonPrimary}, 0px 10px 15px -3px ${c.buttonPrimary}`,
};

const threeDBtnCancelShadow = {
  boxShadow: `0px 4px 6px -1px ${c.buttonCancel}, 0px 10px 15px -3px ${c.buttonCancel}`,
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
  borderTop: "50px solid transparent",
  borderBottom: "50px solid transparent",
  borderLeft: "100px solid transparent",
  borderRight: "100px solid transparent",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-100px",
    width: "200px",
    height: "100px",
    backgroundColor: c.mainBg00,
    clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
  },
};

const header = {
  ...f,
  ...trapezoidBorder,
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

///////// BOOKMARK - NOT COMPLETED //////////

const paper: PaperType = {
  ...f,
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
    backgroundColor: c.mainBg00,
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
    color: c.text01,
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
      ...header,
      backgroundColor: "transparent",
      padding: 0,
    },

    text: {
      ...f,
      textShadow: blackShadow,
      margin: 0,
    },
  },
  list: {
    backgroundColor: "",
    textShadow: "",
  },
  // text: {
  //   styles: {
  //     ...f,
  //     textAlign: "center",
  //     color: "",
  //     fontSize: "1.25rem", // 20px
  //     textShadow: "",
  //     backgroundColor: c.mainBg00,
  //     borderRadius,
  //     padding: `0 ${s.xs}rem 0 0`,
  //     "&:hover": {
  //       borderRadius,
  //     },
  //   },
  //   sx: {
  //     ...f,
  //     borderRadius,
  //     fontSize: "1.25rem", // 20px
  //     color: "",
  //     width: "100%",
  //     textAlign: "center !important",
  //     "&:hover": {
  //       borderRadius,
  //       backgroundColor: "",
  //       color: `${c.text01} !important`,
  //       textShadow: "",
  //     },
  //   },
  // },
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

export const videoGame = {
  ID: 3,
  themeID: "VIDEOGAME",
  button: {
    borderRadius,
    color: c.text01,
    backgroundColor: c.buttonPrimary,
    border: `1px solid ""`,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: c.text01,
    },
  },
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
