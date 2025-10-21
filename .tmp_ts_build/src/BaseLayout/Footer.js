import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { colors } from "../styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { homePageLinks } from "../const";
//fix header in gallery page
var officialBackgroundColor = colors.officialBackgroundColor;
var Footer = function () {
    var isMobile = useMediaQuery("(max-width:758px)");
    return (React.createElement(Box, { className: "footer", component: "footer", sx: {
            py: 1,
            px: 2,
            mt: "auto",
            margin: "0 auto",
            backgroundColor: officialBackgroundColor,
            color: "white",
            textAlign: "left",
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: isMobile ? "100%" : "auto",
            height: "100%",
            minHeight: "100px",
            alignContent: isMobile ? "start" : "end",
            flexDirection: isMobile ? "column" : "row",
        } },
        Object.entries(homePageLinks).map(function (_a) {
            var key = _a[0], link = _a[1];
            return (React.createElement(Box, { key: key },
                React.createElement(Typography, { variant: "body2" },
                    React.createElement(Link, { href: link.url, color: "black", underline: "none" }, link.label))));
        }),
        React.createElement(Typography, { variant: "body2", color: "black" },
            "\u00A9 ",
            new Date().getFullYear(),
            " SoulPad. All rights reserved.")));
};
export default Footer;
