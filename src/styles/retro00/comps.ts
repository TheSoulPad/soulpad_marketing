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
  ...text,
  ...richTextHeaderBorder,
  backgroundColor: c.mainBg02,
  display: "flex",
  fontSize: "14px",
  padding: `${spacing.xs * 0.5}px`,
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
  padding: `${spacing.xs}px`,
};

export const retroComps = {
  text: {
    ...text,
    color: c.text01,
  },
  hover: c.mainBg02,
  paper: { ...paperBorder, backgroundColor: c.mainBg01 },
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
    content: {
      ...cardBorder,
      ...contentText,
      backgroundColor: c.mainBg01,
    },
  },
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
    content: {
      ...contentText,
      ...menuContentBorder,
      backgroundColor: c.mainBg02,
      margin: `auto`,
      color: `#ffffff`,
      textAlign: `left`,
      fontWeight: "400",
    },
    header: {
      ...greenHeader,
      color: c.mainBg02,
    },
    icons: {
      ...headerIconBorder,
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
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.mainBg01,
      fontSize: "14px",
      padding: `${spacing.xs}px`,
    },
  },
  richTextPost: {
    content: {
      ...richTextContentBorder,
      ...contentText,
      backgroundColor: c.contentBg,
      padding: `${spacing.sm}px ${spacing.xs}px`,
    },
    header: {
      ...purpleHeader,
    },
    icons,
  },
  wordSticker: {
    ...text,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
};
