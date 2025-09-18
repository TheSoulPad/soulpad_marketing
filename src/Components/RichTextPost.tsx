import React, { useEffect, useState } from "react";
import { Box, Paper, SxProps, Theme } from "@mui/material";
import { spacing, isMobileWidth, MAX_MOBILE_WIDTH } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import aboutTheme from "../styles/aboutTheme/comps";
import { useTheme } from "../hooks/useTheme";
import { RichTextType, PaperType, MenuType, CardType } from "./types";

// in the future
// addDate?: boolean;
// addWeather?: boolean;

interface RichTextPostProps {
  children: React.ReactNode;
  size: "small" | "large";
  title: string;
  themeType: string;
}

const RichTextPost: React.FC<RichTextPostProps> = ({
  themeType,
  title,
  children,
  size,
}) => {
  const themeInfoStyles = useTheme(themeType);
  const [compTheme, setCompTheme] = useState<RichTextType | MenuType>(
    themeInfoStyles.RichTextPost || aboutTheme.RichTextPost,
  );
  const [card, setCardTheme] = useState<CardType>(
    themeInfoStyles.Card || aboutTheme.Card,
  );
  const [paper, setPaperTheme] = useState<PaperType>(
    themeInfoStyles.Paper || aboutTheme.Paper,
  );

  useEffect(() => {
    setCompTheme(themeInfoStyles.RichTextPost || aboutTheme.RichTextPost);
    setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
    setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);
  }, [themeInfoStyles, themeType]);

  const { content, header } = compTheme;

  const isMobile = useMediaQuery(isMobileWidth);

  const postSize = size === "small" ? "600px" : "900px";
  const postSizeFinal = isMobile ? MAX_MOBILE_WIDTH : postSize;
  const desktopPadding = ` ${spacing.sm}em ${spacing.xs}em`;

  const allPaperStyles = {
    ...paper,
    maxWidth: postSizeFinal,
  };

  const HeaderStyles = {
    ...header.styles,
    display: "flex",
    alignItems: "space-between",
  };

  const contentStylesResponsive = {
    ...content,
    padding: isMobile ? "14px" : desktopPadding,
  };

  return (
    <Paper className="rich-text-post-paper" elevation={2} sx={allPaperStyles}>
      <Box className="rich-text-post-card" sx={card as SxProps<Theme>}>
        <Box className="rich-text-post-header" sx={HeaderStyles}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box
          className="rich-text-post-content"
          display="flex"
          flexDirection="column"
          sx={contentStylesResponsive}
        >
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

export default RichTextPost;
