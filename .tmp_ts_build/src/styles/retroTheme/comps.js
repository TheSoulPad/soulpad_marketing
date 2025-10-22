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
import { spacing } from "../spacing";
export var headerText = {
    color: c.text02, //lightgrey
    fontFamily: "'Quantico Local', Quantico, sans-serif",
    fontSize: "1.5rem",
    textAlign: "left",
    textShadow: "0px 0px 1px ".concat(c.text01),
};
export var bodyText = {
    color: c.text01, //purple
    fontFamily: "'Quantico Local', Quantico, sans-serif",
    fontSize: "1rem",
    textShadow: "0px 0px 1px ".concat(c.text01),
};
var getBorder = function (color, color2, color3, color4, opt, opt2, opt3, opt4) {
    var borderStyles = {
        borderTop: "2px ".concat(opt, " ").concat(color),
        borderLeft: "2px ".concat(opt2, " ").concat(color2),
        borderRight: "2px ".concat(opt3, " ").concat(color3),
        borderBottom: "1.5px ".concat(opt4, " ").concat(color4),
        borderRadius: "0px",
    };
    return borderStyles;
};
var buttonBorder = getBorder(c.shine, //top
c.shine, //left
c.navyBlue, //right
c.navyBlue, //bottom
"solid", //top
"solid", //left
"inset", //right
"inset");
var baseButton = __assign(__assign(__assign({}, bodyText), buttonBorder), { cursor: "pointer", padding: "".concat(spacing.xs * 0.5, "rem"), textAlign: "center", width: "100%", justifyContent: "center", margin: 0 });
var primaryButton = __assign(__assign({}, baseButton), { backgroundColor: c.button, textShadow: "0px 0px 1px ".concat(c.text01), color: c.buttonText });
var secondaryButton = __assign(__assign({}, baseButton), { backgroundColor: c.mainBg02, textShadow: "0px 0px 1px ".concat(c.text02), color: c.text02 });
var cardBorder = getBorder(c.contentBorder, //top
c.headerBorder, //left
c.headerBorder, //right
c.contentBorder, //bottom
"solid", "solid", "inset", "inset");
var richTextContentBorder = getBorder(c.contentBorder, c.contentBorder, c.headerBorder, c.contentBorder, "solid", "solid", "inset", "inset");
var purpleHeader = __assign(__assign({}, headerText), { backgroundColor: c.mainBg02, color: c.text02, margin: 0, textAlign: "left", width: "100%", display: "block", fontSize: "1.5rem", minHeight: "36px", height: "100%" });
var contentText = __assign(__assign({}, bodyText), { padding: "".concat(spacing.xs, "em") });
var defaultContent = __assign(__assign(__assign({}, cardBorder), contentText), { backgroundColor: c.mainBg00, padding: "0 ".concat(spacing.xs, "rem 0 0") });
var card = __assign(__assign(__assign({}, cardBorder), contentText), { display: "block", backgroundColor: c.mainBg00, padding: "0" });
var paperBorder = getBorder(c.shine, c.shine, c.contentBorder, c.contentBorder, "solid", "solid", "inset", "inset");
var paper = __assign(__assign({}, paperBorder), { backgroundColor: c.mainBg01, height: "100%" });
var customCard = {
    content: __assign(__assign({}, defaultContent), { backgroundColor: c.contentBg }),
    header: {
        styles: __assign(__assign({}, purpleHeader), { textAlign: "center" }),
    },
};
var menuSelection = {
    activeStyles: {
        border: "2px dashed ".concat(c.buttonHover),
        color: c.text01,
        textShadow: "0px 0px 1px ".concat(c.text01),
    },
    content: __assign(__assign({}, contentText), { backgroundColor: c.mainBg00, borderRadius: "0px", fontWeight: "400" }),
    header: {
        styles: purpleHeader,
        text: __assign(__assign({}, headerText), { marginLeft: spacing.sm, textAlign: "center" }),
    },
    text: {
        active: __assign(__assign({}, primaryButton), { border: "2px dashed ".concat(c.buttonHover) }),
        list: __assign(__assign({}, primaryButton), { backgroundColor: "transparent", border: "none", "&:hover": {
                backgroundColor: c.button,
                border: "2px dashed ".concat(c.buttonHover),
                textShadow: "0px 0px 1px ".concat(c.text01),
            } }),
    },
};
var richTextPost = {
    content: __assign(__assign({}, contentText), { backgroundColor: c.contentBg, padding: "".concat(spacing.md, "rem ").concat(spacing.md, "rem") }),
    header: {
        styles: purpleHeader,
        text: __assign(__assign({}, headerText), { marginLeft: spacing.sm }),
    },
};
var buttons = {
    primary: __assign(__assign({}, primaryButton), { "&:hover": {
            border: "2px dashed ".concat(c.buttonHover),
        } }),
    secondary: __assign(__assign({}, secondaryButton), { "&:hover": {
            border: "2px dashed ".concat(c.text03),
        } }),
    custom: baseButton,
};
export var retroTheme = {
    Button: buttons,
    Card: card,
    CustomCard: customCard,
    Content: defaultContent,
    Hover: c.mainBg02,
    MenuSelection: menuSelection,
    Paper: paper,
    Poll: __assign(__assign(__assign({}, headerText), cardBorder), { backgroundColor: c.mainBg00 }),
    ProgressBar: {
        header: __assign({}, purpleHeader),
        content: __assign(__assign(__assign({}, contentText), richTextContentBorder), { backgroundColor: c.mainBg01, fontSize: "14px", padding: "".concat(spacing.xs, "em") }),
    },
    RichTextPost: richTextPost,
    Text: __assign(__assign({}, bodyText), { color: c.text01 }),
    WordSticker: __assign(__assign(__assign({}, bodyText), cardBorder), { backgroundColor: c.mainBg00 }),
    ThemeID: "RETRO",
};
export default retroTheme;
