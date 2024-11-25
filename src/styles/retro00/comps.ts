import { colors as c } from "./colors";
import { postHeaderText as text } from "./fonts";
import { spacing } from "../spacing";

export const styles = {
  button: {},
  card: {},
  menuSelection: {
    content: {},
    header: {},
    icons: {},
  },
  richTextPost: {
    content: {},
    header: {
      ...text,
      display: "flex",
      backgroundColor: c.mainBg02,
      padding: `${spacing.xs / 2}px`,
      fontSize: "14px",
      borderTop: `2px solid ${c.headerBorder}`,
      borderLeft: `2px solid ${c.headerBorder}`,
      borderBottom: `2px inset ${c.headerBorder}`,
      borderRight: `2px inset ${c.contentBorder}`,
      borderRadius: "0px",
    },
  },
};

