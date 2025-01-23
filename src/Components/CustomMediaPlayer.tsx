import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import RichTextPost from "./RichTextPost";
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
    <RichTextPost
      header={HeaderStyles}
      title={title}
      paper={allPaperStyles}
      card={cardStyles}
      content={contentStyles}
      icons={icons}
      size={size}
    >
      <video width="100%" height="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </RichTextPost>
  );
};

export default CustomMediaPlayer;
