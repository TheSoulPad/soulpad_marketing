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
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "../hooks/useTheme";
import aboutTheme from "../styles/aboutTheme/comps";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobileWidth, MAX_MOBILE_WIDTH } from "../styles";
var CustomCard = function (_a) {
    var title = _a.title, size = _a.size, themeType = _a.themeType, renderItem = _a.renderItem, children = _a.children;
    var isMobile = useMediaQuery(isMobileWidth);
    var themeInfoStyles = useTheme(themeType);
    var _b = useState(themeInfoStyles.Card || aboutTheme.Card), card = _b[0], setCardTheme = _b[1];
    var _c = useState(themeInfoStyles.CustomCard || aboutTheme.CustomCard), customCard = _c[0], setCustomCardTheme = _c[1];
    var _d = useState(themeInfoStyles.Paper || aboutTheme.Paper), paper = _d[0], setPaperTheme = _d[1];
    useEffect(function () {
        // Update state when themeInfoStyles or themeType changes
        setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
        setCustomCardTheme(themeInfoStyles.CustomCard || aboutTheme.CustomCard);
        setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);
    }, [themeInfoStyles, themeType]);
    var extraSmallSize = {
        maxWidth: isMobile ? MAX_MOBILE_WIDTH : "281px",
        maxHeight: "1000px",
    };
    var smallSize = {
        maxWidth: isMobile ? MAX_MOBILE_WIDTH : "415px",
        maxHeight: "1000px",
    };
    var largeSize = {
        maxWidth: isMobile ? MAX_MOBILE_WIDTH : "800px",
        minHeight: "200px",
    };
    var xLargeSize = {
        maxWidth: isMobile ? MAX_MOBILE_WIDTH : "100%",
    };
    var cardSize;
    switch (size) {
        case "small":
            cardSize = smallSize;
            break;
        case "large":
            cardSize = largeSize;
            break;
        case "xSmall":
            cardSize = extraSmallSize;
            break;
        case "xLarge":
            cardSize = xLargeSize;
            break;
        default:
            cardSize = largeSize;
    }
    var titleStyles = customCard.header.styles;
    var paperStyles = __assign(__assign(__assign({}, paper), cardSize), { width: "100%" });
    var cardStyles = __assign({}, card);
    var contentStyles = __assign(__assign({}, customCard.content), { alignItems: "center", padding: "1rem" });
    return (React.createElement(Paper, { className: "custom-paper-card", sx: paperStyles },
        React.createElement(Card, { className: "custom-card-body", sx: cardStyles },
            React.createElement(Typography, { variant: "h2", className: "card-title", sx: titleStyles }, title),
            React.createElement(Box, { className: "custom-card-content", display: "flex", flexDirection: "column", rowGap: 1, sx: contentStyles }, renderItem || children))));
};
export default CustomCard;
