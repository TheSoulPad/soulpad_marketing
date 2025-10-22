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
//#781acd
var borderRadius = "30px";
var softShadow = "1px 1px 1px ".concat(c.text02);
var subtleShadow = "1px 1px 1px ".concat(c.text03);
export var headerText = {
    fontFamily: "'Gaegu Local', Gaegu, serif",
    textAlign: "left",
    color: c.text01,
    fontSize: "1.5rem",
    // textShadow: softShadow,
};
export var bodyText = {
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    textAlign: "left",
    color: c.text02,
    fontSize: "1.25rem",
};
var allButtons = __assign(__assign({}, bodyText), { borderRadius: borderRadius, width: "100%", textAlign: "center", color: "".concat(c.text01) });
var primaryButton = __assign(__assign({}, allButtons), { backgroundColor: c.button, textShadow: softShadow });
var secondaryButton = __assign(__assign({}, allButtons), { backgroundColor: c.buttonSecondary, textShadow: subtleShadow });
var content = __assign(__assign({}, bodyText), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), borderRadius: borderRadius, padding: "".concat(s.xs, "rem") });
var header = __assign(__assign({}, headerText), { borderRadius: borderRadius, display: "flex", justifyContent: "space-between", padding: "".concat(s.xs, "rem"), textAlign: "left", backgroundColor: c.headerBg00 });
var card = __assign(__assign({}, content), { display: "block", backgroundColor: c.mainBg02 });
var paper = __assign(__assign({}, headerText), { borderRadius: borderRadius, boxShadow: "", backgroundColor: c.mainBg01, 
    // border: `1px solid ${c.contentBorder}`,
    display: "block", padding: "unset", height: "100%" });
var customCard = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: __assign(__assign({}, header), { textShadow: softShadow, padding: "".concat(s.xs, "rem"), color: c.text01, textAlign: "center", display: "block" }),
    },
};
var menuSelection = {
    activeStyles: {
        color: c.text01,
    },
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, padding: "".concat(s.xs, "rem"), border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: __assign(__assign({}, header), { backgroundColor: "transparent", padding: 0 }),
        text: __assign(__assign({}, headerText), { textShadow: softShadow, margin: 0, textAlign: "center" }),
    },
    text: {
        list: __assign(__assign({}, headerText), { textAlign: "center", color: c.text02, textShadow: "none", backgroundColor: "transparent", borderRadius: borderRadius, width: "100%", padding: "0 ".concat(s.xs, "rem 0 0"), fontSize: "1.25rem", "&:hover": {
                backgroundColor: c.button,
                color: "".concat(c.text01),
                textShadow: softShadow,
            } }),
        active: primaryButton,
    },
};
var richTextPost = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: header,
        text: __assign(__assign({}, headerText), { textShadow: softShadow }),
    },
};
var buttons = {
    primary: __assign(__assign({}, primaryButton), { "&:hover": {
            backgroundColor: c.buttonHover,
            color: "".concat(c.text02),
        } }),
    secondary: __assign(__assign({}, secondaryButton), { "&:hover": {
            backgroundColor: c.buttonHover,
            color: "".concat(c.text02),
        } }),
    custom: allButtons,
};
export var dreamyTheme = {
    Button: buttons,
    Card: card,
    CustomCard: customCard,
    Content: content,
    Hover: c.mainBg03,
    ListBox: __assign(__assign(__assign({}, content), headerText), { display: "block", border: "unset", backgroundColor: c.mainBg03 }),
    MenuSelection: menuSelection,
    Paper: paper,
    Poll: {},
    ProgressBar: {},
    RichTextPost: richTextPost,
    ThemeID: "DREAMY",
    WordSticker: {},
};
export default dreamyTheme;
