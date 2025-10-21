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
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//need one button - show results
// need progress bar
// radio buttons and select
// two view - select option and show results
var CustomPoll = function (_a) {
    var title = _a.title, text = _a.text, paper = _a.paper, card = _a.card, imageUrl = _a.imageUrl, size = _a.size, titleFont = _a.titleFont, children = _a.children;
    var smallSize = {
        minWidth: "150px",
        minHeight: "150px",
    };
    var largeSize = {
        minWidth: "300px",
        minHeight: "200px",
    };
    var titleStyles = __assign(__assign({}, titleFont), { fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" });
    var cardSize = size === "small" ? smallSize : largeSize;
    return (React.createElement(Paper, { className: "custom-paper-card", sx: __assign(__assign({}, paper), cardSize) },
        React.createElement(Card, { className: "custom-card-body", sx: __assign(__assign({}, card), { minHeight: cardSize.minHeight }) },
            React.createElement(Typography, { variant: "body1", className: "card-title", sx: titleStyles }, title),
            imageUrl && (React.createElement(Box, { className: "card-image" },
                React.createElement("img", { src: imageUrl, alt: title, className: "card-image" }))),
            text && (React.createElement(Typography, { variant: "h4", className: "card-text" }, text)),
            React.createElement(Box, { display: "flex", flexDirection: "column", sx: { textAlign: "center" } }, children))));
};
export default CustomPoll;
