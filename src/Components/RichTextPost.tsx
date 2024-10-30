import React, { CSSProperties } from "react";
import { Box, Paper, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing, retroHeader } from "../styles";
import styled from "styled-components";

interface RichTextPostProps {
  children: React.ReactNode;
  menuStyles?: CSSProperties;
  paperStyles?: CSSProperties;
  subHeader: string;
  addDate?: boolean;
  addWeather?: boolean;
}

const RichTextPost: React.FC<RichTextPostProps> = ({
  paperStyles,
  subHeader,
  children,
  menuStyles,
}) => {
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
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${spacing.lg}px;
    padding: 0 ${spacing.xl}px ${spacing.xl}px ${spacing.xl}px;
  `;

  const allPaperStyles = {
    ...paperStyles,
    height: "100%",
    maxWidth: "900px",
    marginBottom: spacing.xs,
  };

  return (
    <Paper elevation={2} sx={allPaperStyles}>
      <Box sx={menuStyles}>
        <PostTitle> {subHeader}</PostTitle>
        <ActionMenuWrapper>
          <MinimizeIcon sx={{ marginRight: "2px", marginTop: "-3px" }} />
          <CropSquareIcon sx={{ marginRight: "2px" }} />
          <CloseIcon />
        </ActionMenuWrapper>
      </Box>
      <Content>{children}</Content>
    </Paper>
  );
};

export default RichTextPost;
