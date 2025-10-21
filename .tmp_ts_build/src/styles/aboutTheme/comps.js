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
import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
var borderRadiusSm = "".concat(s.sm, "rem");
var darkBrownShadow = "1px 3px 1px ".concat(c.darkBrown);
var redOrangeShadow = "1px 3px 1px ".concat(c.redOrange);
var yellowShadow = "1px 3px 1px ".concat(c.yellow);
var titleText = {
    fontFamily: "'Galindo Local', Galindo, sans-serif",
    textAlign: "left",
    textShadow: redOrangeShadow,
};
var bodyText = {
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    color: c.text00,
};
var baseButton = {
    fontFamily: "'Galindo Local', Galindo, sans-serif",
    textShadow: darkBrownShadow,
    boxShadow: darkBrownShadow,
    borderRadius: borderRadiusSm,
    fontSize: "1rem",
    textAlign: "center",
    width: "100%",
    padding: "".concat(s.xs, "rem"),
    textTransform: "lowercase",
};
var baseContent = {
    borderBottomLeftRadius: borderRadiusSm,
    borderBottomRightRadius: borderRadiusSm,
    border: "none",
    padding: "".concat(s.sm, "rem"),
    backgroundColor: c.mainBg00,
};
var baseHeader = {
    backgroundColor: c.headerBg,
    borderTopLeftRadius: borderRadiusSm,
    borderTopRightRadius: borderRadiusSm,
    display: "flex",
    justifyContent: "space-between",
    padding: "".concat(s.xs, "rem"),
    textAlign: "left",
    border: "none",
};
var baseHeaderText = __assign(__assign({}, titleText), { margin: "0", color: c.text01 });
export var aboutTheme = {
    Button: {
        primary: __assign(__assign({}, baseButton), { backgroundColor: c.buttonPrimary, color: c.text00, "&:hover": {
                backgroundColor: c.buttonPrimaryHover,
                boxShadow: redOrangeShadow,
                color: c.redOrange,
            } }),
        secondary: __assign(__assign({}, baseButton), { backgroundColor: c.buttonSecondary, color: c.text00, "&:hover": {
                backgroundColor: c.buttonSecondaryHover,
                boxShadow: yellowShadow,
                color: c.yellow,
            } }),
        custom: baseButton,
    },
    Card: __assign(__assign({}, bodyText), { borderRadius: borderRadiusSm, display: "block", backgroundColor: c.mainBg00 }),
    CustomCard: {
        content: __assign(__assign({}, baseContent), { fontWeight: "400", color: c.text00 }),
        header: {
            styles: __assign(__assign(__assign({}, baseHeader), baseHeaderText), { textShadow: redOrangeShadow, padding: "".concat(s.xs, "rem"), color: c.text01, textAlign: "center", display: "block" }),
        },
    },
    Content: __assign(__assign(__assign({}, baseContent), bodyText), { fontSize: "1rem", backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder) }),
    MenuSelection: {
        activeStyles: {
            border: "none",
            color: c.text01,
        },
        content: __assign(__assign({}, baseContent), { border: "unset", fontWeight: "400" }),
        header: {
            styles: baseHeader,
            text: __assign(__assign({}, baseHeaderText), { textAlign: "center" }),
        },
        text: {
            active: __assign(__assign({}, baseButton), { backgroundColor: c.buttonPrimary, color: c.text00, textShadow: "none" }),
            list: {
                backgroundColor: "transparent",
                borderRadius: borderRadiusSm,
                color: c.text00,
                fontSize: "1rem",
                padding: "".concat(s.xs * 0.5, "rem"),
                textAlign: "center",
                width: "100%",
                textTransform: "lowercase",
                "&:hover": {
                    backgroundColor: c.buttonPrimary,
                    boxShadow: darkBrownShadow,
                    color: "".concat(c.text00),
                },
            },
        },
    },
    Paper: {
        borderRadius: borderRadiusSm,
        display: "block",
        padding: "unset",
        boxShadow: "7px 8px 0px 0px ".concat(c.paperShadow),
        backgroundColor: c.mainBg00,
    },
    RichTextPost: {
        content: __assign(__assign(__assign({}, baseContent), bodyText), { fontSize: "1.25rem", fontWeight: "400", textShadow: "none", margin: "unset", padding: "".concat(s.xs, "rem") }),
        header: {
            styles: baseHeader,
            text: baseHeaderText,
        },
    },
    ThemeID: "SOULPAD",
    WordSticker: {},
};
export default aboutTheme;
