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
import * as React from "react";
import BaseLayout from "../BaseLayout";
import { spacing, paperMobileStyles, tabletAndGreaterStyles, isMobileWidth, istabletAndGreaterWidth, MAX_MOBILE_WIDTH, } from "../styles";
import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import useMediaQuery from "@mui/material/useMediaQuery";
import AboutPageContent from "../Components/AboutPageContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FundraisingBanner from "../Components/FundraisingComp";
var strings = Strings.about;
var headStrings = Strings.metaData.about;
var content = Strings.about.content;
var person5Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760469818/p5_nwjyjg.svg";
var person6Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373678/p6_emcdud.svg";
var person7Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373678/p7_p7kvjd.svg";
var person8Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373678/p8_pigapx.svg";
var person9Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373678/p9_bo7yom.svg";
var person10Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373678/p10_c4u7le.svg";
var person11Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373679/p11_kxoc1i.svg";
var person13Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373680/p13_za6lcw.svg";
var person14Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373680/p14_qs8mrg.svg";
var person15Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373680/p15_xltzg8.svg";
var person16Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373680/p16_wbod13.svg";
var person17Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373681/p17_uv5hpe.svg";
var AboutPage = function () {
    var isMobile = useMediaQuery(isMobileWidth);
    var tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
    var isTablet = useMediaQuery("(min-width: 759px)" + " and (max-width: 1024px)");
    var isMobileContentWidth = "310px";
    var finalContentWidth = isMobile ? isMobileContentWidth : "700px";
    var containerStyles = {
        color: "#232129",
        padding: "".concat(isMobile ? spacing.sm : 0, "em"),
        width: "100%",
        maxWidth: isMobile ? MAX_MOBILE_WIDTH : "1250px",
        margin: isMobile ? "1rem" : "auto",
    };
    var columnStyles = {
        display: isMobile ? "none" : "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: spacing.sm + "rem",
        maxWidth: "300px",
        width: "100%",
        ".col--img": {
            width: "100%",
            backgroundSize: "cover",
        },
    };
    var paperStyles = __assign({ fontFamily: "Fredoka, sans-serif", whiteSpace: "break-spaces", borderRadius: "5px", background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)", width: "100%", border: "2px solid black" }, (tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles));
    return (React.createElement(BaseLayout, { isHomePage: false },
        React.createElement(Typography, { variant: "h1" }, strings.header),
        React.createElement(Grid, { display: "flex", justifyContent: "center", className: "about-container", sx: containerStyles },
            React.createElement(Grid, { className: "about--column", sx: __assign(__assign({}, columnStyles), { zIndex: 0, position: "relative", left: "4rem" }) },
                React.createElement(Box, { className: "col--img img1", sx: {
                        backgroundImage: "url(".concat(person6Path, ")"),
                        minHeight: "350px",
                    } }),
                React.createElement(Box, { className: "col--img img2", sx: {
                        backgroundImage: "url(".concat(person5Path, ")"),
                        minHeight: "158px",
                    } }),
                React.createElement(Box, { className: "col--img img3", sx: {
                        backgroundImage: "url(".concat(person10Path, ")"),
                        minHeight: "266px",
                    } }),
                React.createElement(Box, { className: "col--img img4", sx: {
                        backgroundImage: "url(".concat(person11Path, ")"),
                        minHeight: "286px",
                    } }),
                React.createElement(Box, { className: "col--img img5", sx: {
                        backgroundImage: "url(".concat(person14Path, ")"),
                        minHeight: "286px",
                    } }),
                React.createElement(Box, { className: "col--img img6", sx: {
                        backgroundImage: "url(".concat(person16Path, ")"),
                        minHeight: "286px",
                    } })),
            React.createElement(Grid, { display: "flex", className: "about--content", flexDirection: "column", mt: 6, sx: {
                    maxWidth: finalContentWidth,
                    width: "100%",
                    zIndex: 2,
                } },
                React.createElement(Typography, { className: "about--intro", sx: {
                        paddingBottom: spacing.sm + "rem",
                        margin: "auto",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "1.5rem",
                    }, variant: "body2" }, strings.content.point1.title),
                React.createElement(Box, { display: "flex", flexDirection: "column", className: "content-windows", alignItems: "center", sx: {
                        maxWidth: "700px",
                        width: "100%",
                        margin: "auto",
                    } },
                    React.createElement(AboutPageContent, { point: content.point1 }),
                    React.createElement(AboutPageContent, { point: content.point2 }),
                    React.createElement(AboutPageContent, { point: content.point3 }),
                    React.createElement(AboutPageContent, { point: content.point4 }),
                    React.createElement(AboutPageContent, { point: content.point5 }),
                    React.createElement(FundraisingBanner, { paperStyles: paperStyles }))),
            React.createElement(Grid, { className: "about--column about--column2", sx: __assign(__assign({}, columnStyles), { display: isTablet || isMobile ? "none" : "flex", zIndex: 3, position: "relative" }) },
                React.createElement(Box, { className: "col--img img5", sx: {
                        backgroundImage: "url(".concat(person7Path, ")"),
                        minHeight: "235px",
                    } }),
                React.createElement(Box, { className: "col--img img6", sx: {
                        backgroundImage: "url(".concat(person8Path, ")"),
                        minHeight: "306px",
                    } }),
                React.createElement(Box, { className: "col--img img7", sx: {
                        backgroundImage: "url(".concat(person9Path, ")"),
                        minHeight: "301px",
                        backgroundPositionX: "45px",
                    } }),
                React.createElement(Box, { className: "col--img img8", sx: {
                        backgroundImage: "url(".concat(person13Path, ")"),
                        minHeight: "290px",
                    } }),
                React.createElement(Box, { className: "col--img img9", sx: {
                        backgroundImage: "url(".concat(person15Path, ")"),
                        minHeight: "290px",
                    } }),
                React.createElement(Box, { className: "col--img img10", sx: {
                        backgroundImage: "url(".concat(person17Path, ")"),
                        minHeight: "290px",
                        marginLeft: spacing.xs + "rem",
                    } })))));
};
export default AboutPage;
export var Head = function () { return React.createElement("title", null, headStrings); };
