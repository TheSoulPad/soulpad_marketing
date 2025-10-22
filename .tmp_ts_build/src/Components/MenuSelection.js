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
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import aboutTheme from "../styles/aboutTheme/comps";
import { useTheme } from "../hooks/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobileWidth } from "../styles";
import { MAX_MOBILE_WIDTH } from "../styles";
var MenuSelection = function (_a) {
    var items = _a.items, horizontal = _a.horizontal, themeType = _a.themeType, title = _a.title, onThemeChange = _a.onThemeChange;
    var isMobile = useMediaQuery(isMobileWidth);
    var themeInfoStyles = useTheme(themeType);
    var _b = useState(themeInfoStyles.MenuSelection || aboutTheme.MenuSelection), compTheme = _b[0], setCompTheme = _b[1];
    var _c = useState(themeInfoStyles.Card || aboutTheme.Card), card = _c[0], setCardTheme = _c[1];
    var _d = useState(themeInfoStyles.Paper || aboutTheme.Paper), paper = _d[0], setPaperTheme = _d[1];
    useEffect(function () {
        setCompTheme(themeInfoStyles.MenuSelection || aboutTheme.MenuSelection);
        setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
        setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);
    }, [themeInfoStyles, themeType]);
    var header = compTheme.header, text = compTheme.text, content = compTheme.content;
    var listStyles = {
        display: "".concat(horizontal ? "flex" : "block"),
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        paddingLeft: "0px",
        flexDirection: horizontal ? (isMobile ? "column" : "row") : "column",
    };
    var activeFont = __assign(__assign({}, text === null || text === void 0 ? void 0 : text.active), { cursor: "pointer" });
    var containerStyles = __assign(__assign({}, paper), { maxWidth: horizontal ? (isMobile ? "90%" : "600px") : "600px", height: "100%", width: isMobile ? MAX_MOBILE_WIDTH : "35%" });
    return (React.createElement(Paper, { elevation: 1, className: "menu-selection-paper menu-selection-container ".concat(themeType), sx: containerStyles },
        React.createElement(Box, { className: "menu-selection-card ".concat(themeType), sx: card },
            React.createElement(Box, { className: "menu-selection-card-header ".concat(themeType), sx: header.styles },
                React.createElement(Typography, { variant: "h2", sx: header.text }, title)),
            React.createElement(Box, { className: "menu-selection-content ".concat(themeType), sx: __assign({}, content) },
                React.createElement(List, { disablePadding: horizontal ? true : false, dense: true, sx: listStyles, className: "menu-selection-list ".concat(themeType) }, items.map(function (item) { return (React.createElement(ListItem, { className: "menu-selection-list-item ".concat(themeType), key: item.themeType, sx: { paddingLeft: 0 }, onClick: function () {
                        onThemeChange(item.themeType);
                    } },
                    React.createElement(Typography, { variant: "body1", sx: themeType === item.themeType ? activeFont : text === null || text === void 0 ? void 0 : text.list }, item.galleryName))); }))))));
};
export default MenuSelection;
