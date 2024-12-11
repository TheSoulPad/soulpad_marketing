import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PaperStyle, ContentStyle } from "../styles/types";

interface CardProps {
  title: string;
  text?: string;
  textLocation: "top" | "bottom";
  contentStyles: ContentStyle;
  paper: PaperStyle;
  videoUrl: string;
}
//create styled components for video necessary

const MediaPlayer: React.FC<CardProps> = ({
  title,
  text,
  paper,
  contentStyles,
  videoUrl,
}) => {
  return (
    <Paper sx={paper}>
      <Card className="card" sx={contentStyles}>
        <Typography variant="h1" className="card-title">
          {title}
        </Typography>

        <Typography variant="body1" className="card-text">
          {text}
        </Typography>
        <Box className="card-image">
          <video src={videoUrl} className="card-image" />
        </Box>
      </Card>
    </Paper>
  );
};

export default MediaPlayer;
