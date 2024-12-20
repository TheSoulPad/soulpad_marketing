import React from "react";
import { Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  HeaderStyle,
  PaperStyle,
  ContentStyle,
  IconStyle,
  Simple,
} from "../styles/types";

interface RichTextPostProps {
  children: React.ReactNode;
  header: HeaderStyle | Simple;
  paper: PaperStyle | Simple;
  content: ContentStyle;
  subHeader: string;
  icon: IconStyle;
  addDate?: boolean;
  addWeather?: boolean;
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

const PostTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const RichTextPost: React.FC<RichTextPostProps> = ({
  paper,
  subHeader,
  children,
  header,
  content,
  icon,
  size,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const postSize = size === "small" ? "600px" : "900px";
  const mobileSpacing = spacing.xs * 0.5;
  const mobilePadding = ` 0 ${mobileSpacing}em ${spacing.lg}em`;
  const desktopPadding = ` ${spacing.sm}em ${spacing.xs}em`;

  const allPaperStyles = {
    ...paper,
    maxWidth: postSize,
  };

  const BoxStyles = {
    ...header,
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
  };

  const contentStylesResponsive = {
    ...content,
    padding: isMobile ? mobilePadding : desktopPadding,
  };

  return (
    <Paper elevation={1} sx={allPaperStyles}>
      <Box sx={BoxStyles}>
        <PostTitle>{subHeader}</PostTitle>
        <ActionMenuWrapper>
          <MinimizeIcon sx={{ ...icon, marginRight: 0.5 }} />
          <CropSquareIcon sx={{ ...icon, marginRight: 0.5 }} />
          <CloseIcon sx={icon} />
        </ActionMenuWrapper>
      </Box>
      <Box display="flex" flexDirection="column" sx={contentStylesResponsive}>
        {children}
      </Box>
    </Paper>
  );
};

export default RichTextPost;
