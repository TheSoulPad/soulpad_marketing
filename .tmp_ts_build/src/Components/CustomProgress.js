import React from "react";
import CustomCard from "./CustomCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
var CustomProgress = function (_a) {
    var title = _a.title, size = _a.size, themeType = _a.themeType;
    return (React.createElement(CustomCard, { title: title, size: size, themeType: themeType },
        React.createElement(Box, { sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            } },
            React.createElement(CircularProgress, { sx: {
                    mt: 2,
                }, variant: "determinate", value: 50 }))));
};
export default CustomProgress;
