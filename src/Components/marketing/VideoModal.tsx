import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getYouTubeEmbedUrl } from "../../utils/youtubeEmbed";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
};

export function VideoModal({ open, onClose, videoUrl }: VideoModalProps) {
  const videoEmbedUrl = open
    ? getYouTubeEmbedUrl(
        videoUrl,
        typeof window !== "undefined" ? window.location.origin : undefined,
      )
    : null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
        },
      }}
    >
      <Fade in={open}>
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
            onClick={onClose}
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
  );
}
