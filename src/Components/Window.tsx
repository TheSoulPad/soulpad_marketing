import React, { useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import { spacing } from "../styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getYouTubeEmbedUrl } from "../utils/youtubeEmbed";

function isInternalLink(url: string): boolean {
  return url.startsWith("/") && !url.startsWith("//");
}

interface LinkWrapperProps {
  children: React.ReactNode;
  transparent?: boolean;
  isVideoLink: boolean;
  link: string;
  onVideoClick: () => void;
}

function LinkWrapper({
  children,
  transparent,
  isVideoLink,
  link,
  onVideoClick,
}: LinkWrapperProps) {
  const linkSx = transparent ? { color: "transparent" as const } : undefined;
  const videoSx = {
    cursor: "pointer" as const,
    ...(transparent && { color: "transparent" as const }),
    display: "contents" as const,
  };

  if (isVideoLink) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onVideoClick();
      }
    };
    return (
      <Box
        component="span"
        role="button"
        tabIndex={0}
        onClick={onVideoClick}
        onKeyDown={handleKeyDown}
        sx={videoSx}
      >
        {children}
      </Box>
    );
  }
  if (isInternalLink(link)) {
    return (
      <Link component={GatsbyLink} to={link} underline="none" sx={linkSx}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={link}
      component="a"
      underline="none"
      sx={linkSx}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

interface WindowProps {
  title: string;
  link: string;
  type?: "link" | "video";
  maxWidth: string;
  minHeight: string;
}

const Windows: React.FC<WindowProps> = ({
  title,
  link,
  type = "link",
  maxWidth,
  minHeight,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const isVideoLink = type === "video";
  const videoEmbedUrl = videoModalOpen
    ? getYouTubeEmbedUrl(
        link,
        typeof window !== "undefined" ? window.location.origin : undefined,
      )
    : null;
  const windowStyles = {
    cursor: "pointer",
    backgroundImage: `url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760470821/pencilwindow_icrhfu.svg')`,
    backgroundSize: "cover",
    backgroundPositionY: "0px",
    backgroundPositionX: "0px",
    position: "relative",
    marginTop: `${spacing.sm}rem`,
    maxWidth,
    minHeight,
    width: "100%",
    height: "100%",
  };

  const linkStyles = {
    color: "#000",
    fontWeight: 400,
    fontSize: "1rem",
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",
    textAlign: "center",
    padding: `0 ${spacing.xs}rem`,
    position: "absolute",
    top: "38%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "78%",
    "&:hover": {
      color: "#ff6105",
      fontWeight: "600",
    },
  };

  const arrowStyles = {
    backgroundImage: `url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760471168/soulpadarrow_mqikdd.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "13px",
    width: "85px",
    height: "30px",
    top: "65%",
    left: "50%",
    position: "absolute",
    transition: "transform 0.3s ease",
    transform: "translateX(-50%)",
    animation: "arrow-move 2s infinite alternate",
    "@keyframes arrow-move": {
      from: { transform: "translateX(calc(-50% - 8px))" },
      to: { transform: "translateX(calc(-50% + 8px))" },
    },
    "&:hover": {
      animation: "arrow-move 0s",
      transform: "translateX(calc(-50% + 12px))",
      backgroundImage: `url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760471042/arrow_hover_waybwn.svg')`,
    },
  };

  const handleVideoClick = () => {
    if (isVideoLink) {
      setVideoModalOpen(true);
    }
  };

  const linkWrapperProps = {
    isVideoLink,
    link,
    onVideoClick: handleVideoClick,
  };

  return (
    <Box className="home-selection--window" sx={windowStyles}>
      <LinkWrapper {...linkWrapperProps}>
        <Box className="home-selection--text" sx={linkStyles}>
          {title}
        </Box>
      </LinkWrapper>
      <LinkWrapper {...linkWrapperProps} transparent>
        <Box className="home-selection--arrow" sx={arrowStyles} />
      </LinkWrapper>

      {isVideoLink && (
        <Modal
          open={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
              style: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
            },
          }}
        >
          <Fade in={videoModalOpen}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90vw",
                maxWidth: 900,
                outline: "none",
                p: 1,
              }}
            >
              <IconButton
                aria-label="close"
                onClick={() => setVideoModalOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                  zIndex: 1,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                {videoEmbedUrl && (
                  <Box
                    component="iframe"
                    src={videoEmbedUrl}
                    title="SoulPad Video"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </Box>
  );
};

export default Windows;
