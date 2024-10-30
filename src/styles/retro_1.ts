import { CSSProperties } from "react";
import { spacing, galleryColors } from "../styles";
import styled from "styled-components";

const retroColors = {
  mainBg: "#92bdbc", //light olive green
  shine: "#f0f0f0", //light grey
  headerBorderColor: "#3db5d9", //light blue
  headerBorder: "2px solid #3db5d9",
  headerBg: "#781acd", //purple
  contentBorderColor: "#137574", //dark green
  contentBorder: "2px inset #137574",
  mainBG2: "#00d5d5", //light greenish-blue
  buttonColor: "#bee9e9", //pale white blue
  buttonTextColor: "#781acd", //purple
  hoverColor: "#781acd", //purple
};

const RetroHeader = styled.div`
  background-color: ${retroColors.headerBg};
  padding: ${spacing.xs}px ${spacing.sm}px;
  font-size: 14px;
  border: ${retroColors.headerBorder};
  border-radius: 1px;
`;

const retroPostHeader: CSSProperties = {
  display: "flex",
  backgroundColor: retroColors.headerBg,
  padding: `${spacing.xs}px ${spacing.xs}px`,
  fontSize: "14px",
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px solid ${retroColors.shine}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  borderRadius: "1px",
  color: "#ffffff",
  fontFamily: `Quantico, sans-serif`,
  fontWeight: 400,
};

const retroMenuStyles: CSSProperties = {
  backgroundColor: galleryColors.menu,
  margin: `auto`,
  color: `#ffffff`,
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px solid ${retroColors.shine}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  textAlign: `left`,
  fontFamily: `Quantico, sans-serif`,
  fontWeight: 400,
};

const retroMenuHeader: CSSProperties = {
  backgroundColor: galleryColors.headerBG,
  padding: `${spacing.xs}px ${spacing.sm}px`,
  fontSize: "14px",
  border: galleryColors.headerBorder,
  borderRadius: "0px",
  color: "#ffffff",
};

const retroContentStyles: CSSProperties = {
  borderTop: `2px inset ${retroColors.contentBorderColor}`,
  borderLeft: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px solid ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.headerBorderColor}`,
  height: "100%",
};

const retroButtonStyles: CSSProperties = {
  backgroundColor: retroColors.buttonColor,
  color: retroColors.buttonTextColor,
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px inset ${retroColors.shine}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  padding: "5px",
  margin: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  borderRadius: "0px",
};

export {
  retroMenuStyles,
  retroMenuHeader,
  retroContentStyles,
  RetroHeader,
  retroColors,
  retroButtonStyles,
  retroPostHeader,
};
