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
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import { colors, isMobileWidth } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Link } from "gatsby";
var BaseLayout = function (_a) {
    var children = _a.children, isHomePage = _a.isHomePage;
    var isMobile = useMediaQuery(isMobileWidth);
    var officialBackgroundColor = colors.officialBackgroundColor;
    var mobileHeight = "185px";
    var widthLogo = "475px";
    var notHomeWidthLogo = isMobile ? widthLogo : "150px";
    var heightLogo = isMobile ? mobileHeight : "250px";
    var notHomeHeightLogo = isMobile ? mobileHeight : "110px";
    var baseLayoutStyles = {
        backgroundColor: officialBackgroundColor,
        minHeight: isMobile ? "932px" : "900px",
        height: "100%",
        maxWidth: "1400px",
        margin: "auto",
        overflowX: "hidden",
    };
    var headerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        flexWrap: "wrap",
        maxWidth: isMobile ? "100%" : widthLogo,
        height: heightLogo,
        position: "relative",
        margin: "1rem auto",
        width: isMobile ? "75%" : "100%",
    };
    var notHomeHeaderStyles = __assign(__assign({}, headerStyles), { justifyContent: isMobile ? "center" : "start", alignItems: "center", maxWidth: notHomeWidthLogo, height: notHomeHeightLogo, margin: isMobile ? "auto" : "0", width: isMobile ? "75%" : "100%" });
    var boxStylesToCenter = {
        width: "100%",
        height: "100%",
        backgroundImage: "url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760470328/SoulPad_e95cvu.svg')",
        backgroundSize: "cover",
        color: "transparent",
        backgroundPositionX: "10px",
    };
    var setHeaderStyles = isHomePage ? headerStyles : notHomeHeaderStyles;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(GlobalStyles, null),
        React.createElement(Grid, { className: isHomePage ? "base-layout--home" : "base-layout--not-home", container: true, display: "flex", flexDirection: "column", justifyContent: "center", style: baseLayoutStyles },
            React.createElement(Grid, { className: "base-layout--header", sx: {
                    // maxWidth: isMobile ? "100%" : nonMobileStyles,
                    maxWidth: "100%",
                } },
                React.createElement(Link, { to: "/" },
                    React.createElement(Box, { sx: setHeaderStyles, className: "header--wrapper" },
                        React.createElement(Box, { sx: boxStylesToCenter })))),
            children,
            React.createElement(Grid, { className: "base-layout--footer-wrapper" },
                React.createElement(Footer, null)))));
};
export default BaseLayout;
