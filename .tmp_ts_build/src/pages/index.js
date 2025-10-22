/**
 * The main index page component for the SoulPad application.
 *
 * This component uses a base layout and displays a header, subheader, and a
 * series of cloud components
 * that link to different parts of the application.
 *
 * @component
 * @example
 * return (
 *   <IndexPage />
 * )
 *
 * @returns {React.FC<PageProps>} The rendered index page component.
 *
 * @remarks
 * - The page uses a combination of Material-UI components and custom styles.
 * - The `cloudTitle` object contains links and titles for the cloud components.
 * - The `BaseLayout` component is used to wrap the main content of the page.
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ | Gatsby Link Documentation}
 */
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
import * as React from "react";
import BaseLayout from "../BaseLayout";
import { spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Window from "../Components/Window";
import { homePageLinks } from "../const";
import { Strings } from "../resources/strings";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Newsletter from "../Components/NewsletterBox";
import Fundraising from "../Components/FundraisingComp";
import AboutCreator from "../Components/AboutCreator";
import { istabletAndGreaterWidth, paperMobileStyles, tabletAndGreaterStyles, } from "../styles";
import Card from "@mui/material/Card";
import { ClipLoader } from "react-spinners";
//later: add svg support
var strings = Strings.homePage;
var headStrings = Strings.metaData.home;
var person1Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373815/soulperson1_zdxgrj.svg";
var person2Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson2_yiw1zp.svg";
var person3Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson3_hvgc9z.svg";
var person4Path = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson4_u6ebqh.svg";
var videoPath = "https://res.cloudinary.com/dd4qvmhqx/video/upload/v1760374008/soulpadVideo_dxorcc.mp4";
var imgBoxContainer = {
    width: "300px",
    height: "245px",
    display: "flex",
    alignContent: "start",
    marginBottom: spacing.sm + "rem",
    backgroundSize: "cover",
    backgroundPositionY: "0px",
    backgroundPositionX: "0px",
    position: "absolute",
};
var subTitle = {
    borderRadius: "5px",
    width: "100%",
    color: "rgba(0,0,0,0.87)",
    letterSpacing: "0.15rem",
    textShadow: "1px 1px 0px rgba(255,97,5,0.6)",
    fontWeight: 500,
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    textAlign: "center",
    fontSize: "1.3rem",
};
var standInBox = {
    height: "300px",
    width: "300px",
    border: "1px solid transparent",
    backgroundColor: "transparent",
};
var Home = function () {
    // Track if the page has mounted for image loading
    var _a = React.useState(false), hasMounted = _a[0], setHasMounted = _a[1];
    React.useEffect(function () {
        setHasMounted(true);
    }, []);
    var tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
    var maxWidthSubHeader = tabletAndGreater ? "525px" : "368px";
    var maxWidthContent = "600px";
    var paperStyles = __assign({ fontFamily: "Fredoka, sans-serif", whiteSpace: "break-spaces", borderRadius: "5px", background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)", width: "100%", border: "2px solid black" }, (tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles));
    var homePageStyles = {
        maxHeight: "".concat(tabletAndGreater ? "529px" : "auto"),
        overflow: "hidden",
        position: "relative",
        justifyContent: tabletAndGreater ? "center" : "flex-start",
    };
    return (React.createElement(BaseLayout, { isHomePage: true },
        React.createElement(Grid, { display: "flex", className: "home-page", sx: homePageStyles },
            React.createElement(Grid, { display: tabletAndGreater ? "flex" : "none", gap: 1, flexDirection: "column", className: "home-page--imgs col1", pl: 3 },
                React.createElement(Box, { sx: __assign(__assign({}, imgBoxContainer), { backgroundImage: "url(".concat(person1Path, ")"), left: "55px", top: "0px" }), className: "home-page--person-img person-img-box person-img-1" }, !hasMounted && (React.createElement(Card, { className: "image-standin", sx: standInBox },
                    React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },
                        React.createElement(ClipLoader, { color: "#888", loading: true, size: 48 }))))),
                React.createElement(Box, { className: "home-page--person-img person-img-box person-img-3", sx: __assign(__assign({}, imgBoxContainer), { backgroundImage: "url(".concat(person3Path, ")"), left: "30px", bottom: "-8px", backgroundPositionX: "25px" }) },
                    " ",
                    !hasMounted && (React.createElement(Card, { className: "image-standin", sx: standInBox },
                        React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },
                            React.createElement(ClipLoader, { color: "#888", loading: true, size: 48 })))))),
            React.createElement(Grid, { className: "home-page--content window-container col-2", sx: {
                    maxWidth: maxWidthContent,
                    width: tabletAndGreater ? "100%" : "unset",
                    margin: tabletAndGreater ? "auto" : "2rem",
                }, flexDirection: "column", alignItems: "center" },
                React.createElement(Box, { className: "home-page--subheader", sx: {
                        maxWidth: tabletAndGreater ? maxWidthSubHeader : "unset",
                        width: "99%",
                        margin: "auto",
                    }, display: "flex", justifyContent: "center", alignItems: "center" },
                    React.createElement(Typography, { className: "home-page--subheader__text", variant: "h2", sx: subTitle }, strings.subHeader)),
                React.createElement(Box, { display: "flex", flexWrap: "wrap", className: "content-windows", justifyContent: "center", pb: 3, sx: {
                        maxWidth: "600px",
                        width: "100%",
                    } }, Object.entries(homePageLinks)
                    .filter(function (_a) {
                    var item = _a[0];
                    return item !== "home";
                })
                    .map(function (_a) {
                    var key = _a[0], item = _a[1];
                    return (React.createElement(Window, { key: key, title: item.label, link: item.url, maxWidth: "300px", minHeight: "180px" }));
                }))),
            React.createElement(Grid, { display: tabletAndGreater ? "flex" : "none", flexDirection: "column", className: "home-page--imgs col3", pr: 3 },
                " ",
                React.createElement(Box, { className: "home-page--person-img person-img-box person-img-2", sx: __assign(__assign({}, imgBoxContainer), { backgroundImage: "url(".concat(person2Path, ")"), backgroundPositionY: "10px", backgroundPositionX: "30px", right: "49px", top: "0px" }) },
                    " ",
                    !hasMounted && (React.createElement(Card, { className: "image-standin", sx: standInBox },
                        React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },
                            React.createElement(ClipLoader, { color: "#888", loading: true, size: 48 }))))),
                React.createElement(Box, { className: "home-page--person-img person-img-box person-img-4", sx: __assign(__assign({}, imgBoxContainer), { backgroundImage: "url(".concat(person4Path, ")"), position: "absolute", backgroundPositionX: "10px", bottom: "-9px", right: "30px" }) },
                    " ",
                    !hasMounted && (React.createElement(Card, { className: "image-standin", sx: standInBox },
                        React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },
                            React.createElement(ClipLoader, { color: "#888", loading: true, size: 48 }))))))),
        React.createElement(AboutCreator, { paperStyles: paperStyles }),
        React.createElement(Newsletter, { paperStyles: paperStyles }),
        React.createElement(Fundraising, { paperStyles: paperStyles })));
};
export default Home;
export var Head = function () { return (React.createElement(React.Fragment, null,
    React.createElement("title", null, headStrings),
    React.createElement("link", { rel: "icon", href: "https://avatars.githubusercontent.com/u/226777579?s=200&v=4", type: "image/x-icon" }))); };
