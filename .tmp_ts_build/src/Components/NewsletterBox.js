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
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { paperMobileStyles, tabletAndGreaterStyles, isMobileWidth, } from "../styles";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREEENDPOINT } from "../const";
var NewsletterBanner = function (_a) {
    var paperStyles = _a.paperStyles;
    var _b = useState(false), submitted = _b[0], setSubmitted = _b[1];
    var isMobile = useMediaQuery(isMobileWidth);
    var _c = useForm(FORMSPREEENDPOINT), state = _c[0], handleSubmit = _c[1];
    var STRINGS = {
        header: "Sign up to our newsletter",
        info: "Stay updated on SoulPad's progress! For questions, comments, or suggestions, email us at ",
        emailLink: "info@soulpadforeveryone.com",
        thankYou: "Thank you for signing up!",
        emailLabel: "Your email address",
        messageLabel: "Leave a message",
        signUpButton: "Sign Up",
        emailValidationPrefix: "Email",
        messageValidationPrefix: "Message",
    };
    var onSubmit = function (e) {
        e.preventDefault();
        setSubmitted(true);
        handleSubmit(e);
    };
    return (React.createElement(Paper, { className: "home-page--newsletter", sx: __assign(__assign({}, paperStyles), (isMobile ? paperMobileStyles : tabletAndGreaterStyles)) },
        React.createElement(Box, { sx: { maxWidth: "600px", width: "100%", margin: "auto" }, className: "newsletter--content" },
            React.createElement(Box, { className: "newsletter--header", sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                } },
                React.createElement(Typography, { className: "newsletter--title", variant: "h2", sx: {
                        marginTop: isMobile ? "1rem" : "0",
                        marginBottom: "1rem",
                        fontFamily: "'Fredoka Local', Fredoka, sans-serif",
                        fontWeight: 600,
                    } }, STRINGS.header),
                React.createElement(Typography, { variant: "body2", className: "newsletter--info", sx: { marginBottom: "1.5rem", px: isMobile ? 2 : 0 } },
                    STRINGS.info,
                    React.createElement("a", { href: "mailto:".concat(STRINGS.emailLink), style: { color: "black" } }, STRINGS.emailLink))),
            submitted ? (React.createElement(Box, { sx: { margin: "auto", maxWidth: "200px", px: isMobile ? 2 : 0 }, color: "success.main" }, STRINGS.thankYou)) : (React.createElement("form", { onSubmit: onSubmit, method: "POST", style: {
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: isMobile ? "1rem" : "0",
                } },
                React.createElement("input", { type: "text", name: "_gotcha", style: { display: "none" }, tabIndex: -1, autoComplete: "off" }),
                React.createElement(TextField, { type: "email", label: STRINGS.emailLabel, variant: "outlined", size: "small", required: true, name: "email", className: "newsletter--input", sx: {
                        flexGrow: 1,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "5px",
                        },
                    } }),
                React.createElement(ValidationError, { prefix: STRINGS.emailValidationPrefix, field: "email", errors: state.errors }),
                React.createElement(TextField, { type: "text", label: STRINGS.messageLabel, variant: "outlined", size: "medium", required: true, name: "message", className: "newsletter--input", sx: {
                        flexGrow: 1,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "5px",
                        },
                    } }),
                React.createElement(ValidationError, { prefix: STRINGS.messageValidationPrefix, field: "message", errors: state.errors }),
                React.createElement(Button, { type: "submit", variant: "contained", sx: {
                        backgroundColor: "rgba(255,97,5,0.6)",
                        fontFamily: "'Fredoka Local', Fredoka, sans-serif",
                        color: "black",
                        "&:hover": {
                            backgroundColor: "white",
                            color: "rgba(255,97,5,0.6)",
                        },
                    } }, STRINGS.signUpButton))))));
};
export default NewsletterBanner;
