import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import styled from "styled-components";
import {
  PaperStyle,
  ContentStyle,
  SimpleContent,
  SimplePaper,
  Simple,
  CardStyle,
  HeaderStyle,
  Icons,
} from "../styles/types";

interface CardProps {
  title: string;
  textLocation: "top" | "bottom";
  headerStyles: HeaderStyle | Simple;
  cardStyles: CardStyle | Simple;
  contentStyles: ContentStyle | SimpleContent;
  icons: Icons;
  paper: PaperStyle | SimplePaper;
  videoUrl: string;
  size?: "small" | "large";
}

const ActionMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
`;
//create styled components for video necessary

const CustomMediaPlayer: React.FC<CardProps> = ({
  title,
  headerStyles,
  cardStyles,
  paper,
  contentStyles,
  videoUrl,
  icons,
  size,
}) => {
  const postSize = size === "small" ? "600px" : "900px";

  const allPaperStyles = {
    ...paper,
    minWidth: postSize,
  };

  const HeaderStyles = {
    ...headerStyles,
    display: "flex",
    alignItems: "space-between",
  };
  return (
    <Paper className="media-player-paper" sx={allPaperStyles}>
      <Box className="media-player-box" sx={cardStyles}>
        <Box className="rich-text-post-header" sx={HeaderStyles}>
          <Typography variant="h2" sx={headerStyles.text}>
            {title}
          </Typography>
          <ActionMenuWrapper>
            <MinimizeIcon sx={{ ...icons.primary, marginRight: 0.5 }} />
            <CropSquareIcon sx={{ ...icons.secondary, marginRight: 0.5 }} />
            <CloseIcon sx={icons.iconClose} />
          </ActionMenuWrapper>
        </Box>
        <Box className="media-player-content" sx={contentStyles}>
          <Box className="card-video">
            <video width="100%" src={videoUrl} controls />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CustomMediaPlayer;
