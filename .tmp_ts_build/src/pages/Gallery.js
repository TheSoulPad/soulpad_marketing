import React, { useState } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import { spacing, isMobileWidth } from "../styles";
import { Strings } from "../resources/strings";
import MenuSelection from "../Components/MenuSelection";
import RichTextPost from "../Components/RichTextPost";
import CustomCard from "../Components/CustomCard";
import CustomMediaPlayer from "../Components/CustomMusicPlayer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import ProfileSection from "../Components/ProfileSection";
import { TestComments } from "../Components/TestComments";
var strings = Strings.galleryPage;
var headStrings = Strings.metaData.gallery;
var aboutSoulExchange = {
    p01: (React.createElement(React.Fragment, null,
        "The ",
        React.createElement("strong", null, "Soul Exchange"),
        " is SoulPad\u2019s marketplace for themes, animations, stickers, and other unique assets created by individual creatives. The store will provide a wide range of content to help make your SoulPad reflect your inner world.")),
    p02: (React.createElement(React.Fragment, null,
        "We call it the Soul Exchange because both buying and trading are possible. Transactions can be made using SoulPad\u2019s in-app currency,",
        React.createElement("i", null, "Soul Coins"),
        ", or through direct trades\u2014one asset for another. Artists, designers, game developers, and other creatives can showcase their work, sell it, or trade with fellow ",
        React.createElement("i", null, "SoulPadders"),
        ".")),
    p03: (React.createElement(React.Fragment, null, "In this micro view of a sample, barebones SoulPad below, a SoulPadder can browse a gallery of free themes from their canvas toolbar and add them to their SoulPad. We aim to make available dozens of themes and assets with the full launch of SoulPad, and eventually hundreds over the course of time.")),
};
var Gallery = function () {
    var isMobile = useMediaQuery(isMobileWidth);
    var _a = useState("SOULPAD"), themeType = _a[0], setThemeType = _a[1];
    // Directly use setThemeType for theme switching
    var menuItems = [
        {
            galleryName: "SoulPad",
            themeType: "SOULPAD",
        },
        {
            galleryName: "Diary",
            themeType: "DIARY",
        },
        {
            galleryName: "Retrowave",
            themeType: "RETRO",
        },
        {
            galleryName: "Video game",
            themeType: "VIDEOGAME",
        },
        {
            galleryName: "Dreamy",
            themeType: "DREAMY",
        },
    ];
    var mobileGridStyles = {
        width: "100%",
        justifyContent: "center",
        flexDirection: "column-reverse",
        alignContent: "center",
    };
    var buttonTypes = [
        { type: "primary", label: "Primary" },
        { type: "secondary", label: "Secondary" },
        {
            type: "custom",
            label: "Custom 1",
            textColor: "#ffffff",
            bgColor: "purple",
        },
        { type: "custom", label: "Custom 2", textColor: "#ffffff", bgColor: "red" },
    ];
    var favoriteThings = {
        food: "Tacos",
        music: "EDM",
        country: "Bali",
        animal: "Cats",
        place: "Beaches",
    };
    return (React.createElement(BaseLayout, null,
        React.createElement(Typography, { className: "gallery-header", variant: "h1", mb: 4, sx: {
                textAlign: "center",
                fontSize: isMobile ? "2rem" : "xxx-large",
            } }, strings.header),
        React.createElement(Grid, { className: "gallery-wrapper", container: true, mb: 4, flexDirection: "column", spacing: 5, height: "100%", justifyContent: "center", sx: {
                minWidth: isMobile ? "335px" : "1200px",
                // margin: isMobile ? "16px auto" : "0",
                minHeight: "1400px",
                marginBottom: spacing.md + "rem",
            } },
            React.createElement(Grid, { className: "menu-selection-grid", ml: 2, display: "flex", rowGap: 2, columnGap: 2, justifyContent: "center", sx: isMobile ? mobileGridStyles : { margin: "auto" }, flexDirection: isMobile ? "column" : "row" },
                React.createElement(CustomCard, { title: "About the Soul Exchange", size: "large", themeType: themeType }, Object.values(aboutSoulExchange).map(function (paragraph, idx) { return (React.createElement(Typography, { key: idx, sx: {
                        color: themeType === "VIDEOGAME" ? "#ffffff" : "#000000",
                    }, variant: "body2" }, paragraph)); })),
                React.createElement(MenuSelection, { themeType: themeType, onThemeChange: setThemeType, horizontal: false, title: "Select a theme", items: menuItems })),
            React.createElement(Grid, { className: "profile-grid", display: "flex", justifyContent: "center", mt: isMobile ? 0 : 4, sx: { width: "100%" } },
                React.createElement(ProfileSection, { name: "Kala S.", profilePicture: "/path/to/image.jpg", bio: "Writer and dev.", age: "Shhh... it's a secret", starSign: "Aries", personalityType: "INFP", location: "San Diego, CA", likes: [
                        "Video games",
                        "Chess",
                        "Music Festivals",
                        "Adventures hiking",
                        "Dancing",
                    ], dislikes: [
                        "Telephone ringing",
                        "Bad vibes",
                        "Rude or mean people",
                        "Waiting",
                        "Long lines",
                    ], favoriteThings: favoriteThings, themeType: themeType })),
            React.createElement(Grid, { container: true, className: "gallery-row", justifyContent: "space-evenly", sx: isMobile
                    ? mobileGridStyles
                    : {
                        display: "flex",
                        alignItems: "center",
                        margin: "auto",
                        maxWidth: "900px",
                        width: "100%",
                        justifyContent: "center",
                        alignContent: "center",
                    } },
                React.createElement(RichTextPost, { size: "large", title: "Let's talk about life a little", themeType: themeType },
                    React.createElement(Typography, { variant: "body1", className: "about life" }, "Every failure and left-field surprise became part of my training ground. When plans cracked, I didn\u2019t pretend it didn\u2019t hurt\u2014I took a breath, named the lesson, and carried it forward. I learned to fail forward, to treat detours as data, and to keep promises to myself even on the days motivation went missing. Instead of waiting for perfect conditions, I stacked small, unglamorous wins: one email, one draft, one uncomfortable conversation at a time. Life kept moving the goalposts, so I got better at adjusting my stance\u2014less rigid, more resourceful. I chose discipline over drama, progress over perfection, and curiosity over fear. Little by little, the setbacks that once felt like verdicts turned into scaffolding. And with every step, I proved to myself that dreams don\u2019t arrive fully formed\u2014they\u2019re built, patiently, through grit, grace, and the stubborn belief that I can start again and still get there.")),
                React.createElement(CustomCard, { size: "small", title: "Messages", themeType: themeType, renderItem: React.createElement(TestComments, null) }),
                React.createElement(CustomMediaPlayer, { themeType: themeType, size: "small", title: "My Spotify Playlist", textLocation: "top", mediaType: "spotify" })))));
};
export var Head = function () { return React.createElement("title", null, headStrings); };
export default Gallery;
