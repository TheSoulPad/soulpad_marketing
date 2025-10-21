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
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import aboutTheme from "../styles/aboutTheme/comps";
import { useTheme } from "../hooks/useTheme";
var CustomButton = function (_a) {
    var onClick = _a.onClick, label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? false : _b, themeType = _a.themeType, buttonType = _a.buttonType, textColor = _a.textColor, bgColor = _a.bgColor;
    var themeInfoStyles = useTheme(themeType);
    var _c = useState(themeInfoStyles.Button || aboutTheme.Button), buttons = _c[0], setButtons = _c[1];
    useEffect(function () {
        setButtons(themeInfoStyles.Button || aboutTheme.Button);
    }, [themeInfoStyles, themeType]);
    var buttonSize = "32px";
    var buttonStyles = {
        primary: buttons.primary,
        secondary: buttons.secondary,
        custom: __assign(__assign({}, buttons.custom), { backgroundColor: bgColor, color: textColor }),
    };
    var buttonStyle = buttonStyles[buttonType] || buttons.primary;
    var sxStyles = __assign({ maxHeight: buttonSize, width: "80%", margin: "auto" }, buttonStyle);
    return (React.createElement(Button, { sx: sxStyles, onClick: onClick }, label));
};
export default CustomButton;
