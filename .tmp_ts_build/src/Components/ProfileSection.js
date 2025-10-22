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
import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Box, Typography, useMediaQuery, IconButton, Modal, Fade, Backdrop, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import aboutTheme from "../styles/aboutTheme/comps";
import { isMobileWidth } from "../styles";
import CustomCard from "./CustomCard";
var ProfileSection = function (_a) {
    var name = _a.name, age = _a.age, starSign = _a.starSign, personalityType = _a.personalityType, location = _a.location, likes = _a.likes, dislikes = _a.dislikes, themeType = _a.themeType, favoriteThings = _a.favoriteThings;
    var themeInfoStyles = useTheme(themeType);
    var _b = useState(themeInfoStyles.CustomCard || aboutTheme.CustomCard), profileTheme = _b[0], setProfileTheme = _b[1];
    var _c = useState(themeInfoStyles.Card || aboutTheme.Card), cardTheme = _c[0], setCardTheme = _c[1];
    var food = favoriteThings.food, music = favoriteThings.music, country = favoriteThings.country, animal = favoriteThings.animal, place = favoriteThings.place;
    var isMobile = useMediaQuery(isMobileWidth);
    var _d = useState({}), styles = _d[0], setStyles = _d[1];
    var _e = useState(false), modalOpen = _e[0], setModalOpen = _e[1];
    var _f = useState(""), selectedPhoto = _f[0], setSelectedPhoto = _f[1];
    var photoGalleryUrls = [
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376153/lajolla_lleoke.jpg",
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376160/jujubi_optnsh.jpg",
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376161/balboa_hs8zjh.jpg",
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376152/jujubi2_ij862p.jpg",
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376159/sd1_f7zybw.jpg",
        "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760375416/e1e714b7-f9b4-41ab-a16e-321f201cad1b_l3a5kn.jpg",
    ];
    // Handle opening the photo modal
    var handleOpenModal = function (url) {
        setSelectedPhoto(url);
        setModalOpen(true);
    };
    // Handle closing the photo modal
    var handleCloseModal = function () {
        setModalOpen(false);
    };
    // Modern Photo Gallery
    var renderPhotoGallery = function () { return (React.createElement(CustomCard, { title: "My Photos", themeType: themeType, size: "large" },
        React.createElement(Box, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center horizontally
                justifyContent: "center", // Center vertically
                width: "100%",
            } },
            React.createElement(Box, { className: "photo-gallery", sx: {
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
                    gap: 2,
                    width: "100%",
                    maxWidth: isMobile ? "100%" : "800px", // Control max width for better layout
                    margin: "0 auto", // Center the grid itself
                } }, photoGalleryUrls.map(function (url, idx) { return (React.createElement(Box, { key: idx, sx: {
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 2,
                    aspectRatio: "1/1",
                    background: "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.2s",
                    margin: "auto",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "scale(1.04)",
                    },
                }, onClick: function () { return handleOpenModal(url); } },
                React.createElement("img", { src: url, alt: "Gallery photo ".concat(idx + 1), style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }, loading: "lazy" }))); }))))); };
    var profilePictureUrl = "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373551/IMG_1823_ukgia6.jpg";
    // Following the CustomCard pattern, create a profile-specific theme state
    var maxWidth = isMobile ? "100%" : 920;
    // Update theme styles when themeType changes, just like in CustomCard
    useEffect(function () {
        setProfileTheme(themeInfoStyles.CustomCard || aboutTheme.CustomCard);
        setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
        // Set styles based on the current theme
        setStyles({
            container: {
                display: "flex",
                width: "100%",
                maxWidth: maxWidth,
                backgroundColor: "transparent",
                flexDirection: isMobile ? "column" : "row",
                padding: isMobile ? 1 : 3,
                columnGap: isMobile ? 0 : 1,
                rowGap: isMobile ? "12px" : 0,
                flexWrap: "wrap",
                alignItems: isMobile ? "center" : "center",
            },
            leftCol: {
                width: "100%",
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                maxWidth: isMobile ? "100%" : 300,
                padding: isMobile ? "8px 0" : "0px",
                borderRadius: "8px",
            },
            rightCol: {
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: isMobile ? "center" : "unset",
            },
            bioRow: {
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: isMobile ? "center" : "space-around",
                marginBottom: isMobile ? "12px" : "16px",
                rowGap: isMobile ? 2 : 0,
            },
            bottomRow: {
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: "space-around",
                width: "100%",
                gap: isMobile ? "12px" : 0,
            },
            listCol: {
                flex: 1,
            },
            heading: {
                marginBottom: "8px",
            },
        });
    }, [themeInfoStyles, themeType, isMobile, profileTheme, cardTheme]);
    return (React.createElement(Box, { className: "profile-card", sx: styles.container },
        React.createElement(Box, { className: "left-column", sx: styles.leftCol },
            React.createElement(CustomCard, { title: name, themeType: themeType, size: "small" },
                React.createElement("img", { src: profilePictureUrl, alt: name, width: "100%", style: { borderRadius: "8px" } }))),
        React.createElement(Box, { sx: styles.rightCol, className: "right-column" },
            React.createElement(Box, { className: "bio-row", sx: __assign({}, styles.bioRow) },
                React.createElement(CustomCard, { title: "About Me", themeType: themeType, size: "xSmall" },
                    React.createElement("ul", { className: "bio-list", style: { padding: "8px", width: "100%", listStyleType: "none" } }, [
                        { label: "Name", value: name },
                        { label: "Age", value: age },
                        { label: "Sun Sign", value: starSign },
                        { label: "Personality", value: personalityType },
                        { label: "Location", value: location },
                    ].map(function (_a) {
                        var label = _a.label, value = _a.value;
                        return (React.createElement("li", { key: label },
                            React.createElement(Typography, { variant: "body2", sx: cardTheme.content },
                                label,
                                ": ",
                                "",
                                " ",
                                value)));
                    }))),
                React.createElement(CustomCard, { title: "Faves", themeType: themeType, size: "xSmall" },
                    React.createElement("ul", { className: "favorite-things-list", style: { padding: "8px", width: "100%", listStyleType: "none" } }, [
                        { label: "Food", value: food },
                        { label: "Music", value: music },
                        { label: "Country", value: country },
                        { label: "Animal", value: animal },
                        { label: "Place", value: place },
                    ].map(function (_a) {
                        var label = _a.label, value = _a.value;
                        return (React.createElement("li", { key: label },
                            React.createElement(Typography, { variant: "body2", sx: cardTheme.content },
                                label,
                                ": ",
                                "",
                                " ",
                                value)));
                    })))),
            React.createElement(Box, { className: "likes-dislikes", sx: styles.bottomRow },
                React.createElement(CustomCard, { title: "Likes", themeType: themeType, size: "xSmall" },
                    React.createElement("ul", { style: {
                            width: "100%",
                        } }, likes.map(function (like, idx) { return (React.createElement("li", { key: idx },
                        React.createElement(Typography, { variant: "body2", sx: cardTheme.content }, like))); }))),
                React.createElement(CustomCard, { title: "Dislikes", themeType: themeType, size: "xSmall" },
                    React.createElement("ul", { style: {
                            width: "100%",
                        } }, dislikes.map(function (dislike, idx) { return (React.createElement("li", { color: "white", key: idx },
                        React.createElement(Typography, { sx: cardTheme.content, variant: "body2" }, dislike))); }))))),
        React.createElement(Box, { className: "photo-gallery-section", sx: {
                width: "100%",
                marginTop: isMobile ? "16px" : "24px",
                display: "flex",
                justifyContent: "center", // Ensure centering of the entire section
            } }, renderPhotoGallery()),
        React.createElement(Modal, { open: modalOpen, onClose: handleCloseModal, closeAfterTransition: true, slots: {
                backdrop: Backdrop,
            }, slotProps: {
                backdrop: {
                    timeout: 500,
                    style: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
                },
            } },
            React.createElement(Fade, { in: modalOpen },
                React.createElement(Box, { sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        outline: "none",
                        p: 1,
                    } },
                    React.createElement(IconButton, { "aria-label": "close", onClick: handleCloseModal, sx: {
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                            },
                            zIndex: 1,
                        } },
                        React.createElement(CloseIcon, null)),
                    React.createElement("img", { src: selectedPhoto, alt: "Enlarged photo", style: {
                            maxWidth: "100%",
                            maxHeight: "85vh",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                            borderRadius: "4px",
                        } }))))));
};
export default ProfileSection;
