var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { spacing, galleryColors } from "../styles";
import styled from "styled-components";
var retroColors = {
    mainBg: "#92bdbc", //light olive green
    shine: "#f0f0f0", //light grey
    headerBorderColor: "#3db5d9", //light blue
    headerBorder: "2px solid #3db5d9",
    headerBg: "#781acd", //purple
    contentBorderColor: "#137574", //dark green
    contentBorder: "2px inset #137574",
    contentBgColor: "#bfebec", //light blue
    cardBg: "#00d5d5", //light greenish-blue
    mainBG2: "#00d5d5", //light greenish-blue
    buttonColor: "#bee9e9", //pale white blue
    buttonTextColor: "#781acd", //purple
    hoverColor: "#781acd", //purple
    iconColor: "#beecea", //lightest blue
};
var RetroHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", "px ", "px;\n  font-size: 14px;\n  border: ", ";\n  border-radius: 1px;\n"], ["\n  background-color: ", ";\n  padding: ", "px ", "px;\n  font-size: 14px;\n  border: ", ";\n  border-radius: 1px;\n"])), retroColors.headerBg, spacing.xs, spacing.sm, retroColors.headerBorder);
var retroPostHeader = {
    display: "flex",
    backgroundColor: retroColors.headerBg,
    padding: "".concat(spacing.xs / 2, "px"),
    fontSize: "14px",
    borderTop: "2px solid ".concat(retroColors.headerBorderColor),
    borderLeft: "2px solid ".concat(retroColors.headerBorderColor),
    borderBottom: "2px inset ".concat(retroColors.headerBorderColor),
    borderRight: "2px inset ".concat(retroColors.contentBorderColor),
    borderRadius: "0px",
    color: "#ffffff",
    fontFamily: "'Quantico Local', Quantico, sans-serif",
    fontWeight: 400,
};
var retroMenuStyles = {
    backgroundColor: galleryColors.menu,
    margin: "auto",
    color: "#ffffff",
    borderTop: "2px solid ".concat(retroColors.shine),
    borderLeft: "2px solid ".concat(retroColors.shine),
    borderBottom: "2px inset ".concat(retroColors.contentBorderColor),
    borderRight: "2px inset ".concat(retroColors.contentBorderColor),
    textAlign: "left",
    fontFamily: "'Quantico Local', Quantico, sans-serif",
    fontWeight: 400,
    borderRadius: "0px",
};
var retroMenuHeader = {
    backgroundColor: galleryColors.headerBG,
    padding: "".concat(spacing.xs, "px ").concat(spacing.sm, "px"),
    fontSize: "14px",
    border: galleryColors.headerBorder,
    borderRadius: "0px",
    color: "#ffffff",
};
var retroPaperStyles = {
    borderTop: "2px solid ".concat(retroColors.shine),
    borderLeft: "2px solid ".concat(retroColors.shine),
    borderRight: "2px inset ".concat(retroColors.headerBorderColor),
    borderBottom: "2px inset ".concat(retroColors.headerBorderColor),
    borderRadius: "0px",
};
var retroContentStyles = {
    backgroundColor: retroColors.contentBgColor,
    borderTop: "2px solid ".concat(retroColors.contentBorderColor),
    borderLeft: "2px solid ".concat(retroColors.contentBorderColor),
    borderRight: "2px inset ".concat(retroColors.headerBorderColor),
    borderBottom: "2px inset ".concat(retroColors.contentBorderColor),
    borderRadius: "0px",
    padding: "".concat(spacing.md, "px"),
};
var retroCardStyles = {
    backgroundColor: retroColors.cardBg,
    borderTop: "2px solid ".concat(retroColors.contentBorderColor),
    borderLeft: "2px solid ".concat(retroColors.contentBorderColor),
    borderRight: "2px inset ".concat(retroColors.headerBorderColor),
    borderBottom: "2px inset ".concat(retroColors.contentBorderColor),
    borderRadius: "0px",
};
var retroButtonStyles = {
    backgroundColor: retroColors.buttonColor,
    borderBottom: "2px inset ".concat(retroColors.contentBorderColor),
    borderLeft: "2px inset ".concat(retroColors.shine),
    borderRadius: "0px",
    borderRight: "2px inset ".concat(retroColors.contentBorderColor),
    borderTop: "2px solid ".concat(retroColors.shine),
    color: retroColors.buttonTextColor,
    cursor: "pointer",
    fontWeight: "bold",
    margin: "5px",
    padding: "5px",
};
var retroMenuIcons = {
    color: "#000000",
    backgroundColor: retroColors.iconColor,
    borderTop: "2px solid ".concat(retroColors.shine),
    borderLeft: "2px inset ".concat(retroColors.shine),
    borderBottom: "2px inset ".concat(retroColors.contentBorderColor),
    borderRight: "2px inset ".concat(retroColors.contentBorderColor),
};
export { retroMenuStyles, retroMenuHeader, retroPaperStyles, RetroHeader, retroColors, retroCardStyles, retroButtonStyles, retroPostHeader, retroContentStyles, retroMenuIcons, };
var templateObject_1;
