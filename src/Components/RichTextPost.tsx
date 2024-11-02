import React, { CSSProperties } from "react";
import { Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import { MarginRounded } from "@mui/icons-material";

interface RichTextPostProps {
  children: React.ReactNode;
  menuStyles?: CSSProperties;
  paperStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  subHeader: string;
  addDate?: boolean;
  addWeather?: boolean;
  size?: "small" | "large";
  iconStyles?: CSSProperties;
}

const RichTextPost: React.FC<RichTextPostProps> = ({
  paperStyles,
  subHeader,
  children,
  menuStyles,
  contentStyles,
  iconStyles,
  size,
}) => {
  const postSize = size === "small" ? "600px" : "900px";

  const PostTitle = styled.h3`
    padding: 0;
    margin: 0;
  `;

  const ActionMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    font-weight: bold;
    cursor: pointer;
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing.xl}px ${spacing.xl}px ${spacing.xl}px;
  `;

  const allPaperStyles = {
    ...paperStyles,
    maxWidth: postSize,
  };

  const BoxStyles = {
    ...menuStyles,
    display: "flex",
    alignItems: "center",
  };

  const iconsStyles = {
    ...iconStyles,
    marginRight: "4px",
  };

  return (
    <Paper elevation={1} sx={allPaperStyles}>
      <Box sx={BoxStyles}>
        <PostTitle>{subHeader}</PostTitle>
        <ActionMenuWrapper>
          <MinimizeIcon sx={iconsStyles} />
          <CropSquareIcon sx={iconsStyles} />
          <CloseIcon sx={iconsStyles} />
        </ActionMenuWrapper>
      </Box>
      <Content style={contentStyles}>{children}</Content>
    </Paper>
  );
};

export default RichTextPost;
