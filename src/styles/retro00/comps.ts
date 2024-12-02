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

const menuIconBorder = getBorder(
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
  c.shine,
  c.shine,
  c.headerBorder,
  c.contentBorder,
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
  ...text,
  ...richTextHeaderBorder,
  backgroundColor: c.mainBg02,
  display: "flex",
  fontSize: "14px",
  padding: `${spacing.xs / 2}px`,
};

const greenHeader = {
  ...purpleHeader,
  backgroundColor: c.mainBg1,
};

export const retroComps = {
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
    ...text,
    ...cardBorder,
    paper: paperBorder,
    backgroundColor: c.mainBg00,
  },
  listBox: {
    paper: paperBorder,
    header: purpleHeader,
    content: {
      ...text,
      ...richTextContentBorder,
      backgroundColor: c.icon,
    },
  },
  mediaPlayer: {
    paper: paperBorder,
    header: purpleHeader,
    content: {
      ...text,
      ...richTextContentBorder,
      backgroundColor: c.mainBg1,
    },
  },
  menuSelection: {
    paper: paperBorder,
    content: {
      ...text,
      ...menuContentBorder,
      backgroundColor: c.mainBg02,
      margin: `auto`,
      color: `#ffffff`,
      textAlign: `left`,
      fontWeight: "400",
      fontSize: "14px",
      padding: `${spacing.xs}px`,
      display: "block",
    },
    header: {
      ...greenHeader,
      color: "#ffffff",
    },
    icons: {
      ...menuIconBorder,
      backgroundColor: c.icon,
      color: "#000000",
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
      ...text,
      ...richTextContentBorder,
      backgroundColor: c.mainBg1,
      fontSize: "14px",
      padding: `${spacing.xs}px`,
    },
  },
  richTextPost: {
    paper: paperBorder,
    content: {
      ...richTextContentBorder,
      backgroundColor: c.contentBg,
      padding: `${spacing.md}px`,
    },
    header: {
      ...purpleHeader,
    },
  },
  wordSticker: {
    ...text,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
};
