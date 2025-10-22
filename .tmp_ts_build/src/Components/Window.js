import React from "react";
import { spacing } from "../styles";
import Box from "@mui/material/Box";
import { Link } from "gatsby";
var Windows = function (_a) {
    var title = _a.title, link = _a.link, maxWidth = _a.maxWidth, minHeight = _a.minHeight;
    var windowStyles = {
        cursor: "pointer",
        backgroundImage: "url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760470821/pencilwindow_icrhfu.svg')",
        backgroundSize: "cover",
        backgroundPositionY: "0px",
        backgroundPositionX: "0px",
        position: "relative",
        marginTop: "".concat(spacing.sm, "rem"),
        maxWidth: maxWidth,
        minHeight: minHeight,
        width: "100%",
        height: "100%",
    };
    var linkStyles = {
        color: "#000",
        fontWeight: 400,
        fontSize: "1rem",
        fontFamily: "'Fredoka Local', Fredoka, sans-serif",
        textDecoration: "none",
        display: "block",
        margin: "auto",
        cursor: "pointer",
        transform: "translateX(15%)",
        padding: "0 ".concat(spacing.xs, "rem"),
        position: "absolute",
        top: "38%",
        left: title === "About SoulPad" || title === "Try the Demo" ? "22%" : "5%",
        "&:hover": {
            color: "#ff6105",
            fontWeight: "600",
        },
    };
    var arrowStyles = {
        backgroundImage: "url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760471168/soulpadarrow_mqikdd.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "13px",
        width: "85px",
        height: "30px",
        top: "65%",
        position: "absolute",
        transition: "left 0.3s ease",
        transform: "translateX(100%)",
        animation: "arrow-move 2s infinite alternate",
        "@keyframes arrow-move": {
            from: { left: "0px" },
            to: { left: "15px" },
        },
        "&:hover": {
            animation: "arrow-move 0s",
            left: "25px",
            backgroundImage: "url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760471042/arrow_hover_waybwn.svg')",
        },
    };
    return (React.createElement(Box, { className: "home-selection--window", sx: windowStyles },
        React.createElement(Link, { to: link },
            React.createElement(Box, { className: "home-selection--text", sx: linkStyles }, title)),
        React.createElement(Link, { style: { color: "transparent" }, to: link },
            React.createElement(Box, { className: "home-selection--arrow", sx: arrowStyles }))));
};
export default Windows;
