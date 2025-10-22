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
    fontFamily: "'Gaegu Local', Gaegu, serif",
    textAlign: "left",
    color: c.text01, //softwhite
    fontSize: "1.5rem",
};
export var bodyText = {
    fontFamily: "'Gaegu Local', Gaegu, serif",
    textAlign: "left",
    color: c.text02, //purple
    fontSize: "1.25rem",
};
var purpleShadow = "1px 1px 1px ".concat(c.text02);
var pinkShadow = "1px 1px 1px ".concat(c.text03);
var whiteShadow = "1px 1px 1px ".concat(c.text01);
var borderRadius = "".concat(s.xs * 0.5, "rem");
var allButtons = __assign(__assign({}, bodyText), { borderRadius: borderRadius, width: "100%", textAlign: "center", color: "".concat(c.text01) });
var primaryButton = __assign(__assign({}, allButtons), { backgroundColor: c.button, textShadow: purpleShadow });
var secondaryButton = __assign(__assign({}, allButtons), { backgroundColor: c.buttonSecondary, textShadow: pinkShadow });
var content = __assign(__assign({}, bodyText), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), borderRadius: borderRadius, padding: "".concat(s.xs, "rem"), textShadow: whiteShadow });
var header = __assign(__assign({}, headerText), { borderRadius: borderRadius, display: "flex", justifyContent: "space-between", padding: "".concat(s.xs, "rem"), textAlign: "left" });
var purpleHeader = __assign(__assign({}, header), { backgroundColor: c.headerBg02 });
var card = __assign(__assign({}, content), { display: "block", backgroundColor: c.mainBg02 });
var paper = __assign(__assign({}, bodyText), { borderRadius: borderRadius, boxShadow: "", backgroundColor: "", border: "1px solid ".concat(c.contentBorder), display: "block", padding: "unset" });
var customCard = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: __assign(__assign({}, purpleHeader), { textShadow: purpleShadow, padding: "".concat(s.xs, "rem"), color: c.text01, textAlign: "center", display: "block" }),
    },
};
var menuSelection = {
    activeStyles: {
        color: c.text01,
    },
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, padding: "".concat(s.xs, "rem"), border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: __assign(__assign({}, purpleHeader), { backgroundColor: "transparent", padding: 0 }),
        text: __assign(__assign({}, headerText), { textShadow: purpleShadow, margin: 0, textAlign: "center" }),
    },
    text: {
        list: __assign(__assign({}, bodyText), { textAlign: "center", color: c.text02, textShadow: whiteShadow, backgroundColor: "transparent", borderRadius: borderRadius, width: "100%", padding: "0 ".concat(s.xs, "rem 0 0"), "&:hover": {
                backgroundColor: c.button,
                color: "".concat(c.text01),
                textShadow: purpleShadow,
            } }),
        active: primaryButton,
    },
};
var richTextPost = {
    content: __assign(__assign({}, content), { backgroundColor: c.mainBg00, border: "1px solid ".concat(c.contentBorder), fontWeight: "400" }),
    header: {
        styles: purpleHeader,
        text: __assign(__assign({}, headerText), { textShadow: purpleShadow }),
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
export var diaryTheme = {
    Button: buttons,
    Card: card,
    CustomCard: customCard,
    Content: content,
    Hover: c.mainBg03,
    ListBox: __assign(__assign(__assign({}, content), bodyText), { display: "block", border: "unset", backgroundColor: c.mainBg03, textShadow: purpleShadow }),
    MenuSelection: menuSelection,
    Paper: paper,
    RichTextPost: richTextPost,
    ThemeID: "DIARY",
};
export default diaryTheme;
