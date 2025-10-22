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
export var headerText = {
    fontFamily: "'Turret Road Local', Turret Road, sans-serif",
    fontWeight: "800",
    textAlign: "center",
    color: c.text00,
    fontSize: "2rem",
};
export var bodyText = {
    fontFamily: "'Quantico Local', Quantico, sans-serif",
    textAlign: "left",
    fontWeight: "300",
    color: "".concat(c.text01),
    fontSize: "1.25rem",
};
var blackShadow = "-1px 2px 0px ".concat(c.black);
var whiteShadow = "-1px 2px 0px ".concat(c.white);
var borderRadius = "".concat(s.sm, "rem");
var buttonStyles = {
    padding: "".concat(s.xs * 0.5, "rem"),
    border: "none",
    borderRadius: "".concat(s.xs * 0.5, "rem"),
    cursor: "pointer",
    transition: "all 0.2s ease",
};
var threeDContentShadow = {
    boxShadow: "0px 4px 6px -1px ".concat(c.mainBg00, ", 0px 10px 1px -4px ").concat(c.mainBg00),
};
var threeDBtnPrimaryShadow = __assign(__assign({}, buttonStyles), { boxShadow: "0 6px 0 ".concat(c.lightGreen, ", 0 6px 10px rgba(0, 0, 0, 0.2)") });
var threeDBtnSecShadow = __assign(__assign({}, buttonStyles), { boxShadow: "0px 4px 6px -1px ".concat(c.purple, ", 0px 10px 1px -4px ").concat(c.purple) });
// const threeDOrangeShadow = {
//   boxShadow: `0px 4px 6px -1px ${c.mainBg02}, 0px 10px 1px -4px ${c.mainBg02}`,
// };
var content = __assign(__assign(__assign({}, bodyText), threeDContentShadow), { backgroundColor: c.mainBg00, border: "3px solid ".concat(c.contentBorder), borderRadius: borderRadius, padding: "".concat(s.xs, "rem") });
var header = {
    background: c.headerBg,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "40px",
    borderBottomRightRadius: "40px",
    boxShadow: "inset 0 -10px 0 #a2d3e4",
    margin: "0 auto",
    zIndex: 100,
};
var card = __assign(__assign({}, content), { display: "block", position: "relative" });
var paper = {
    borderRadius: borderRadius,
    boxShadow: "",
    backgroundColor: "",
    border: "unset",
    display: "block",
    padding: "unset",
};
var buttonPrimary = __assign(__assign({}, threeDBtnPrimaryShadow), { background: c.buttonPrimary, border: "1px solid ".concat(c.buttonPrimaryBorder), color: c.text01 });
var buttonSecondary = __assign(__assign({}, threeDBtnSecShadow), { borderRadius: borderRadius, margin: "".concat(s.xs, "rem 0"), color: c.text01, backgroundColor: c.buttonSecondary, border: "1px solid ".concat(c.buttonSecondaryBorder), "&:hover": {
        backgroundColor: c.buttonHover,
        color: c.purple,
    } });
var customCard = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg02, border: "none", fontWeight: "400", color: c.text01 }),
    header: {
        styles: __assign(__assign(__assign({}, headerText), header), { display: "block", padding: "0.1rem", textShadow: whiteShadow, fontSize: "1.3rem" }),
    },
};
var menuSelection = {
    activeStyles: {
        backgroundColor: "unset",
        background: c.buttonPrimary,
        color: c.text01,
        borderRadius: "".concat(s.xs, "rem"),
    },
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "unset", fontWeight: "400", position: "relative" }),
    header: {
        styles: header,
        text: __assign(__assign({}, headerText), { textShadow: whiteShadow, margin: 0, textAlign: "center", fontSize: "1.2rem" }),
    },
    text: {
        //regular text styles
        list: __assign(__assign({}, headerText), { textAlign: "center", color: c.text01, fontSize: "1.25rem", textShadow: "unset", backgroundColor: "transparent", padding: "0 ".concat(s.xs, "rem 0 0"), width: "100%", "&:hover": __assign(__assign({}, buttonPrimary), { textShadow: blackShadow, background: c.buttonPrimary }) }),
        //active text styles
        active: __assign(__assign(__assign({}, headerText), buttonPrimary), { background: c.buttonPrimary, fontSize: "1.25rem", color: "".concat(c.text01), width: "100%", textAlign: "center", textShadow: blackShadow }),
    },
};
var richTextPost = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "unset", fontWeight: "400", position: "relative" }),
    header: {
        styles: header,
        text: __assign(__assign({}, headerText), { textShadow: whiteShadow }),
    },
};
var buttons = {
    primary: buttonPrimary,
    secondary: buttonSecondary,
    custom: buttonStyles,
};
export var videogameTheme = {
    Button: buttons,
    Card: card,
    CustomCard: customCard,
    Content: content,
    MenuSelection: menuSelection,
    Paper: paper,
    RichTextPost: richTextPost,
    ThemeID: "VIDEOGAME",
};
