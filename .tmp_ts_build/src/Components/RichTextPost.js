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
import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { spacing, isMobileWidth, MAX_MOBILE_WIDTH } from "../styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import aboutTheme from "../styles/aboutTheme/comps";
import { useTheme } from "../hooks/useTheme";
var RichTextPost = function (_a) {
    var themeType = _a.themeType, title = _a.title, children = _a.children, size = _a.size;
    var themeInfoStyles = useTheme(themeType);
    var _b = useState(themeInfoStyles.RichTextPost || aboutTheme.RichTextPost), compTheme = _b[0], setCompTheme = _b[1];
    var _c = useState(themeInfoStyles.Card || aboutTheme.Card), card = _c[0], setCardTheme = _c[1];
    var _d = useState(themeInfoStyles.Paper || aboutTheme.Paper), paper = _d[0], setPaperTheme = _d[1];
    useEffect(function () {
        setCompTheme(themeInfoStyles.RichTextPost || aboutTheme.RichTextPost);
        setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
        setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);
    }, [themeInfoStyles, themeType]);
    var content = compTheme.content, header = compTheme.header;
    var isMobile = useMediaQuery(isMobileWidth);
    var postSize = size === "small" ? "600px" : "900px";
    var postSizeFinal = isMobile ? MAX_MOBILE_WIDTH : postSize;
    var desktopPadding = " ".concat(spacing.sm, "em ").concat(spacing.xs, "em");
    var allPaperStyles = __assign(__assign({}, paper), { maxWidth: postSizeFinal });
    var HeaderStyles = __assign(__assign({}, header.styles), { display: "flex", alignItems: "space-between" });
    var contentStylesResponsive = __assign(__assign({}, content), { padding: isMobile ? "14px" : desktopPadding });
    return (React.createElement(Paper, { className: "rich-text-post-paper", elevation: 2, sx: allPaperStyles },
        React.createElement(Box, { className: "rich-text-post-card", sx: card },
            React.createElement(Box, { className: "rich-text-post-header", sx: HeaderStyles },
                React.createElement(Typography, { variant: "h2", sx: header.text }, title)),
            React.createElement(Box, { className: "rich-text-post-content", display: "flex", flexDirection: "column", sx: contentStylesResponsive }, children))));
};
export default RichTextPost;
