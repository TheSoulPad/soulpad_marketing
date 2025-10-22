import React from "react";
import CustomCard from "./CustomCard";
var CustomMediaPlayer = function (_a) {
    var size = _a.size, themeType = _a.themeType, title = _a.title, mediaType = _a.mediaType, _b = _a.videoType, videoType = _b === void 0 ? "mp4" : _b, mediaUrl = _a.mediaUrl;
    // Check if it's a Spotify URI
    var isSpotify = mediaType === "spotify";
    // Use provided mediaUrl or default based on mediaType
    var finalMediaUrl = mediaUrl ||
        (isSpotify
            ? "spotify:track:4cOdK2wGLETKBW3PvgPWqT" // Example Spotify track URI
            : "/media/soulpadVideo.mp4"); // Example local video file
    if (isSpotify) {
        console.log("CustomMediaPlayer - Passing Spotify URI to player:", finalMediaUrl);
        return (React.createElement(CustomCard, { size: size, title: title, themeType: themeType },
            " ",
            React.createElement("iframe", { "data-testid": "embed-iframe", style: { borderRadius: "12px" }, src: "https://open.spotify.com/embed/playlist/4xk8gsRHL9nJEaVtksT1mQ?utm_source=generator", width: "100%", height: "352", allowFullScreen: true, allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy" })));
    }
    // Default to video player
    return (React.createElement(CustomCard, { size: size, title: title, themeType: themeType },
        React.createElement("video", { width: "100%", height: "100%", preload: "none", controls: true },
            React.createElement("source", { src: finalMediaUrl, type: "video/".concat(videoType) }),
            "Your browser does not support the video tag.")));
};
export default CustomMediaPlayer;
