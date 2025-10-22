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
import { body1Styles, funFont1, headline1Font, headline2Font } from "../styles";
var components = {
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 700,
            laptop: 1024,
            desktop: 1280,
        },
    },
    MuiButton: {
        defaultProps: {
        // The props to change the default for.
        },
    },
    MuiTypography: {
        defaultProps: {
            // The props to change the default for.
            variantMapping: {
                body1: "p",
                body2: "p",
                h1: "h1",
                h2: "h2",
                h3: "h3",
                subtitle1: "subtitle1",
            },
        },
        styleOverrides: {
            // The style overrides for the component.
            body1: __assign({}, body1Styles),
            body2: __assign(__assign({}, body1Styles), { fontFamily: "'Fredoka Local', Fredoka, sans-serif", fontWeight: 400, fontSize: "1.1rem" }),
            // Custom styles for h1, h2, and subtitle1
            // These can be adjusted as needed
            h1: __assign({}, headline1Font),
            h2: __assign({}, headline2Font),
            subtitle1: __assign({}, funFont1),
            h3: {
                fontSize: "0.5rem",
            },
        },
    },
};
export default components;
