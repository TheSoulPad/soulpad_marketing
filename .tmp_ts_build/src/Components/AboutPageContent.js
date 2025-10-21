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
import Grid from "@mui/material/Grid2";
import { spacing, funFont1, paperMobileStyles, tabletAndGreaterStyles, isMobileWidth, istabletAndGreaterWidth, } from "../styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
var AboutPageContent = function (_a) {
    var point = _a.point;
    var isMobile = useMediaQuery(isMobileWidth);
    var tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
    var bodyTextStyles = {
        textAlign: "left",
        color: "#000000",
    };
    var contentStyles = {
        marginTop: spacing.lg,
        maxWidth: isMobile ? "unset" : "680px",
        width: "100%",
        "& p": {
            marginBottom: spacing.sm + "rem",
        },
    };
    var numberStyles = {
        paddingRight: "".concat(spacing.sm / 2, "em"),
        fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    };
    var blockquoteStyles = {
        fontFamily: "'Fredoka Local', Fredoka, sans-serif",
        fontWeight: "500",
        fontSize: "1.5rem",
        paddingBottom: spacing.sm + "rem",
        margin: "auto",
        textAlign: "center",
    };
    var paperStyles = __assign({ fontFamily: "'Fredoka Local', Fredoka, sans-serif", whiteSpace: "break-spaces", borderRadius: "5px", background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)", width: "100%", border: "2px solid black" }, (tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles));
    return (React.createElement(Grid, { container: true, flexDirection: "column", className: "aboutTheme-content", sx: contentStyles },
        point.bullets && (React.createElement(Paper, { className: "aboutTheme-content--list", sx: paperStyles },
            React.createElement("ul", { className: "aboutTheme-content--bullets", style: {
                    listStyleType: "none",
                    paddingLeft: spacing.md,
                    margin: "0",
                } }, point.bullets.map(function (bullet, index) {
                var _a;
                return (React.createElement("li", { className: "aboutTheme-content--bullet", key: index, style: {
                        display: "flex",
                        alignItems: isMobile ? "start" : "center",
                        marginBottom: isMobile ? spacing.sm + "rem" : 0,
                    } },
                    React.createElement(Box, { className: "number", sx: funFont1 },
                        React.createElement("div", { style: numberStyles }, (_a = point.numbers) === null || _a === void 0 ? void 0 : _a[index])),
                    React.createElement(Box, null,
                        React.createElement(Typography, { variant: "body2", sx: __assign(__assign({}, bodyTextStyles), { marginBottom: "0 !important" }) }, bullet))));
            })))),
        point.highlight && (React.createElement(Box, { className: "aboutTheme-content--highlight", sx: blockquoteStyles },
            React.createElement("blockquote", null, point.highlight))),
        point.p && (React.createElement(Paper, { sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p))),
        point.p1 && (React.createElement(Paper, { className: "aboutTheme-content--paper", sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p1))),
        point.p2 && (React.createElement(Paper, { className: "aboutTheme-content--paper", sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p2))),
        point.p3 && (React.createElement(Paper, { className: "aboutTheme-content--paper", sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p3))),
        point.p4 && (React.createElement(Paper, { className: "aboutTheme-content--paper", sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p4))),
        point.p5 && (React.createElement(Paper, { sx: __assign(__assign({}, paperStyles), { marginBottom: spacing.xs + "rem" }) },
            React.createElement(Typography, { variant: "body2", sx: bodyTextStyles }, point.p5)))));
};
export default AboutPageContent;
