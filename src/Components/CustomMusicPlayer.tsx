import React from "react";
import CustomCard from "./CustomCard";

// Supports video and Spotify content types
interface CardProps {
  textLocation?: "top" | "bottom";
  mediaUrl?: string; // Make mediaUrl optional with a default value
  size: "small" | "large";
  themeType: string;
  title: string;
  mediaType: "youtube" | "spotify" | "pandora" | string;
  videoType?: string;
}

const CustomMediaPlayer: React.FC<CardProps> = ({
  size,
  themeType,
  title,
  mediaType,
  videoType = "mp4",
  mediaUrl,
}) => {
  // Check if it's a Spotify URI
  const isSpotify = mediaType === "spotify";

  // Use provided mediaUrl or default based on mediaType
  const finalMediaUrl =
    mediaUrl ||
    (isSpotify
      ? "spotify:track:4cOdK2wGLETKBW3PvgPWqT" // Example Spotify track URI
      : "/media/soulpadVideo.mp4"); // Example local video file

  if (isSpotify) {
    console.log(
      "CustomMediaPlayer - Passing Spotify URI to player:",
      finalMediaUrl,
    );

    return (
      <CustomCard size={size} title={title} themeType={themeType}>
        {" "}
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4xk8gsRHL9nJEaVtksT1mQ?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </CustomCard>
    );
  }

  // Default to video player
  return (
    <CustomCard size={size} title={title} themeType={themeType}>
      <video width="100%" height="100%" preload="none" controls>
        <source src={finalMediaUrl} type={`video/${videoType}`} />
        Your browser does not support the video tag.
      </video>
    </CustomCard>
  );
};

export default CustomMediaPlayer;
