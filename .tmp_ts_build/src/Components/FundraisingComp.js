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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FUNDRAISER_URL } from "../const";
import { paperMobileStyles, tabletAndGreaterStyles, istabletAndGreaterWidth, } from "../styles";
var FundraisingBanner = function (_a) {
    var paperStyles = _a.paperStyles;
    var tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
    var STRINGS = {
        header: "Help SoulPad Reach Our $10,000 Fundraising Goal!",
        description: "Your donation will help us hire developers, designers, and cover operational costs. Help make SoulPad a reality for everyone!",
        button: "Donate Now on GoFundMe",
        thankYou: "Thank you for supporting SoulPad’s mission to bring creative power and fun back to social media!",
    };
    return (React.createElement(Paper, { className: "home-page--fundraising", sx: __assign(__assign({}, paperStyles), (tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles)) },
        React.createElement(Box, { className: "fundraising--content", display: "flex", flexDirection: "column", sx: { maxWidth: 600, width: "100%", margin: "auto" } },
            React.createElement(Typography, { className: "fundraising--header", variant: "h2", sx: {
                    marginTop: tabletAndGreater ? "0" : "1rem",
                    marginBottom: "1rem",
                    fontWeight: 600,
                    px: tabletAndGreater ? 0 : 2,
                } }, STRINGS.header),
            React.createElement(Typography, { className: "fundraising--description", variant: "body2", sx: {
                    marginBottom: "1.5rem",
                    px: tabletAndGreater ? 0 : 2,
                    textAlign: "center",
                } }, STRINGS.description),
            React.createElement(Button, { className: "fundraising--button", variant: "contained", color: "primary", size: "large", href: FUNDRAISER_URL, target: "_blank", sx: {
                    backgroundColor: "rgba(255,97,5,0.6)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.75rem 2rem",
                    borderRadius: "8px",
                    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
                    textAlign: "center",
                    margin: "auto",
                    "&:hover": {
                        backgroundColor: "#fff",
                        color: "rgba(255,97,5,0.6)",
                    },
                } }, STRINGS.button),
            React.createElement(Typography, { variant: "body2", sx: {
                    marginTop: "1.5rem",
                    color: "#333",
                    px: tabletAndGreater ? 0 : 2,
                    textAlign: "center",
                } }, STRINGS.thankYou))));
};
export default FundraisingBanner;
