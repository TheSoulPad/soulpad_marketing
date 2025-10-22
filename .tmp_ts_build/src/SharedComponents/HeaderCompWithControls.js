var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
var ActionMenuWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-left: auto;\n  font-weight: bold;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-left: auto;\n  font-weight: bold;\n  cursor: pointer;\n"])));
var RichTextPost = function (_a) {
    var card = _a.card, paper = _a.paper, title = _a.title, children = _a.children, header = _a.header, content = _a.content, icons = _a.icons, size = _a.size;
    var isMobile = useMediaQuery("(max-width:600px)");
    var postSize = size === "small" ? "600px" : "900px";
    var mobileSpacing = spacing.xs * 0.5;
    var mobilePadding = " 0 ".concat(mobileSpacing, "em ").concat(spacing.lg, "em");
    var desktopPadding = " ".concat(spacing.sm, "em ").concat(spacing.xs, "em");
    var allPaperStyles = __assign(__assign({}, paper), { maxWidth: postSize });
    var HeaderStyles = __assign(__assign({}, header), { display: "flex", alignItems: "space-between" });
    var contentStylesResponsive = __assign(__assign({}, content), { padding: isMobile ? mobilePadding : desktopPadding });
    return (React.createElement(Paper, { className: "rich-text-post-paper", elevation: 2, sx: allPaperStyles },
        React.createElement(Box, { className: "rich-text-post-card", sx: card },
            React.createElement(Box, { className: "rich-text-post-header", sx: HeaderStyles },
                React.createElement(Typography, { variant: "h2", sx: header.text }, title),
                React.createElement(ActionMenuWrapper, null,
                    React.createElement(MinimizeIcon, { sx: __assign(__assign({}, icons.primary), { marginRight: 0.5 }) }),
                    React.createElement(CropSquareIcon, { sx: __assign(__assign({}, icons.secondary), { marginRight: 0.5 }) }),
                    React.createElement(CloseIcon, { sx: icons.iconClose }))),
            React.createElement(Box, { className: "box-content", display: "flex", flexDirection: "column", sx: contentStylesResponsive }, children))));
};
export default RichTextPost;
var templateObject_1;
