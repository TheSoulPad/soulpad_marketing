import { colors as c } from "./colors";
import { postHeaderText as text } from "./fonts";
import { spacing } from "../spacing";

const getBorder = (
  color: string,
  color2: string,
  color3: string,
  color4: string,
  opt: string,
  opt2: string,
  opt3: string,
  opt4: string
) => {
  const borderStyles = {
    borderTop: `2px ${opt} ${color}`,
    borderLeft: `2px ${opt2} ${color2}`,
    borderRight: `2px ${opt3} ${color3}`,
    borderBottom: `2px ${opt4} ${color4}`,
    borderRadius: "0px",
  };
  return borderStyles;
};

const buttonBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.button, //right
  c.button, //bottom
  "solid", //top
  "solid", //left
  "inset", //right
  "inset" //bottom
);

const cardBorder = getBorder(
  c.contentBorder, //top
  c.headerBorder, //left
  c.headerBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const menuContentBorder = getBorder(
  c.mainBg02,
  c.mainBg02,
  c.mainBg02,
  c.mainBg02,
  "inset", //top
  "inset", //left
  "inset", //right
  "solid" //bottom
);

const menuHeaderBorder = getBorder(
  c.headerBorder,
  c.headerBorder,
  c.contentBorder,
  c.headerBorder,
  "solid",
  "solid",
  "inset",
  "inset"
);

const headerIconBorder = getBorder(
  c.shine,
  c.shine,
  c.contentBorder,
  c.contentBorder,
  "solid", //top
  "inset", //left
  "inset", //right
  "inset" //bottom
);

const paperBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.contentBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const richTextContentBorder = getBorder(
  c.contentBorder,
  c.contentBorder,
  c.headerBorder,
  c.contentBorder,
  "solid",
  "solid",
  "inset",
  "inset"
);

const richTextHeaderBorder = getBorder(
  c.headerBorder, //top
  c.headerBorder, //left
  c.contentBorder, //right
  c.headerBorder, //bottom
  "solid", //top
  "solid", //left
  "inset", //right
  "inset" //bottom
);

const purpleHeader = {
  backgroundColor: c.mainBg02,
  color: c.text02,
  display: "flex",
  fontSize: "14px",
  padding: `${spacing.xs * 0.5}em`,
  textAlign: "left",
  margin: 0,
  width: "100%",
};

const greenHeader = {
  ...purpleHeader,
  backgroundColor: c.mainBg01,
};

const icons = {
  ...headerIconBorder,
  backgroundColor: c.icon,
  color: "#000000",
};

const contentText = {
  ...text,
  fontSize: "14px",
  padding: `${spacing.xs}em`,
};

const defaultPaper = {
  ...paperBorder,
  backgroundColor: c.mainBg01,
  padding: `${spacing.xs * 0.5}rem`,
};

export const retro = {
  ID: 2,
  themeID: "RETRO",
  button: {
    ...buttonBorder,
    backgroundColor: c.button,
    color: c.buttonText,
    cursor: "pointer",
    fontWeight: "bold",
    margin: "5px",
    padding: "5px",
  },
  card: {
    ...cardBorder,
    ...contentText,
    backgroundColor: c.mainBg00,
    padding: `0 ${spacing.xs}rem 0 0`,
  },
  content: {
    ...contentText,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    borderRadius: `${spacing.xs}em`,
    color: c.text02,
  },
  hover: c.mainBg02,
  listBox: {
    header: purpleHeader,
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.icon,
    },
  },
  mediaPlayer: {
    header: purpleHeader,
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.mainBg01,
    },
  },
  menuSelection: {
    activeText: {
      color: c.text01,
      textShadow: `0px 0px 1px ${c.text01}`,
      border: `2px dashed ${c.buttonHover}`,
    },
    content: {
      ...contentText,
      backgroundColor: c.mainBg00,
      fontWeight: "400",
      borderRadius: "0px",
      padding: `${spacing.xs}rem 0 ${spacing.xs}rem 0`,
    },
    list: {
      backgroundColor: c.button,
      textShadow: "unset",
    },
    paper: defaultPaper,
    header: {
      styles: {
        ...purpleHeader,
      },
      text: {
        ...text,
        textAlign: "left",
        color: c.text02,
      },
    },
    text: {
      styles: {
        ...text,
        fontSize: "1rem", // 20px
        backgroundColor: c.mainBg00,
        margin: 0,
        textAlign: "center",
        justifyContent: "center",
        padding: `0 ${spacing.xs}rem 0 ${spacing.xs}rem`,
      },

      sx: {
        ...text,
        ...buttonBorder,
        textShadow: `0px 0px 1px ${c.shine}`,
        backgroundColor: c.button,
        color: c.buttonText,
        fontWeight: "bold",
        margin: 0,
        padding: `${spacing.xs * 0.5}rem`,
        fontSize: "1rem", // 20px
        textAlign: "center",
        width: "100%",
        justifyContent: "center",
        "&:hover": {
          border: `2px dashed ${c.buttonHover}`,
          textShadow: `0px 0px 1px ${c.text01}`,
        },
      },
    },
  },
  paper: {
    ...paperBorder,
    backgroundColor: c.mainBg01,
    text: {
      textShadow: contentText.textShadow,
      fontFamily: contentText.fontFamily,
    },
  },
  poll: {
    ...text,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
  progressBar: {
    header: {
      ...purpleHeader,
    },
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.mainBg01,
      fontSize: "14px",
      padding: `${spacing.xs}em`,
    },
  },
  richTextPost: {
    content: {
      ...richTextContentBorder,
      ...contentText,
      backgroundColor: c.contentBg,
      padding: `${spacing.sm}em ${spacing.xs}em`,
    },
    header: {
      ...purpleHeader,
    },
    icons,
  },
  text: {
    ...text,
    color: c.text01,
  },
  wordSticker: {
    ...text,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
};
