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

function isInternalLink(url: string): boolean {
  return url.startsWith("/") && !url.startsWith("//");
}

const VIDEO_TITLE = "Watch the SoulPad Video";

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url;
}

interface WindowProps {
  title: string;
  link: string;
  maxWidth: string;
  minHeight: string;
}

const Windows: React.FC<WindowProps> = ({
  title,
  link,
  maxWidth,
  minHeight,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const isVideoLink = title === VIDEO_TITLE;
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
    margin: "auto",
    cursor: "pointer",
    transform: "translateX(15%)",
    padding: `0 ${spacing.xs}rem`,
    position: "absolute",
    top: "38%",
    left: title === "About SoulPad" || title === "Try the Demo" ? "22%" : "5%",
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
    position: "absolute",
    transition: "left 0.3s ease",
    transform: "translateX(100%)",
    animation: "arrow-move 2s infinite alternate",
    "@keyframes arrow-move": {
      from: { left: "0px" },
      to: { left: "15px" },
    },
    "&:hover": {
      animation: "arrow-move 0s",
      left: "25px",
      backgroundImage: `url('https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760471042/arrow_hover_waybwn.svg')`,
    },
  };

  const handleVideoClick = () => {
    if (isVideoLink) {
      setVideoModalOpen(true);
    }
  };

  const content = (
    <>
      {isVideoLink ? (
        <Box
          component="span"
          onClick={handleVideoClick}
          sx={{ cursor: "pointer", display: "contents" }}
        >
          <Box className="home-selection--text" sx={linkStyles}>
            {title}
          </Box>
        </Box>
      ) : isInternalLink(link) ? (
        <Link component={GatsbyLink} to={link} underline="none">
          <Box className="home-selection--text" sx={linkStyles}>
            {title}
          </Box>
        </Link>
      ) : (
        <Link href={link} target="_blank" rel="noopener noreferrer" component="a" underline="none">
          <Box className="home-selection--text" sx={linkStyles}>
            {title}
          </Box>
        </Link>
      )}
    </>
  );

  const arrowContent = isVideoLink ? (
    <Box
      component="span"
      onClick={handleVideoClick}
      sx={{ cursor: "pointer", color: "transparent", display: "contents" }}
    >
      <Box className="home-selection--arrow" sx={arrowStyles} />
    </Box>
  ) : isInternalLink(link) ? (
    <Link component={GatsbyLink} to={link} underline="none" sx={{ color: "transparent" }}>
      <Box className="home-selection--arrow" sx={arrowStyles} />
    </Link>
  ) : (
    <Link
      href={link}
      component="a"
      underline="none"
      sx={{ color: "transparent" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box className="home-selection--arrow" sx={arrowStyles} />
    </Link>
  );

  return (
    <Box className="home-selection--window" sx={windowStyles}>
      {content}
      {arrowContent}

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
              <Box
                component="iframe"
                src={getYouTubeEmbedUrl(link)}
                title="SoulPad Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
      )}
    </Box>
  );
};

export default Windows;
