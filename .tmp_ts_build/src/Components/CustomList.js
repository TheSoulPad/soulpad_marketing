import React from "react";
import List from "@mui/material/List";
import CustomCard from "./CustomCard";
var CustomList = function (_a) {
    var items = _a.items, title = _a.title, size = _a.size, themeType = _a.themeType;
    return (React.createElement(CustomCard, { title: title, themeType: themeType, size: size },
        React.createElement("div", null,
            React.createElement(List, { sx: {
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "transparent",
                    maxHeight: 300,
                    textDecoration: "none",
                    fontSize: "1.5rem",
                } }, items.map(function (item) { return (React.createElement("li", { key: item.id }, item.label)); })))));
};
export default CustomList;
