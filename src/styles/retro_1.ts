import { CSSProperties } from "react";
import { spacing, galleryColors, retroColors } from "../styles";
import styled from "styled-components";

const retroHeader = styled.div`
  background-color: ${galleryColors.headerBG};
  padding: ${spacing.xs}px ${spacing.sm}px;
  font-size: 14px;
  border: ${retroColors.headerBorder};
  border-radius: 1px;
`;

const retroMenuStyles: CSSProperties = {
  backgroundColor: galleryColors.menu,
  padding: 0,
  margin: `auto`,
  color: `#ffffff`,
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px solid ${retroColors.shine}`,
  borderBottom: `2px solid ${retroColors.contentBorderColor}`,
  borderRight: `2px solid ${retroColors.contentBorderColor}`,
  textAlign: `left`,
  fontFamily: `Quantico, sans-serif`,
  fontWeight: 400,
};

const retroMenuHeader: CSSProperties = {
  backgroundColor: galleryColors.headerBG,
  padding: `${spacing.xs}px ${spacing.sm}px`,
  fontSize: "14px",
  border: galleryColors.headerBorder,
  borderRadius: "1px",
};

const retroContentStyles: CSSProperties = {
  borderTop: `2px inset ${retroColors.contentBorderColor}`,
  borderLeft: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px solid ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.headerBorderColor}`,
  height: "100%",
};

export { retroMenuStyles, retroMenuHeader, retroContentStyles, retroHeader };
