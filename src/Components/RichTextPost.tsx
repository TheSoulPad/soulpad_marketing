import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";

// in the future
// addDate?: boolean;
// addWeather?: boolean;

interface RichTextPostProps {
  children: React.ReactNode;
  size: "small" | "large";
  title: string;
  themeType: string;
}

const ActionMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
`;

const RichTextPost: React.FC<RichTextPostProps> = ({
  themeType,
  title,
  children,
  size,
}) => {
  const menuThemeSelection = {
    card: about.richTextPost.card,
    content: about.richTextPost.content,
    header: about.richTextPost.header,
    icons: about.icons,
    paper: about.paper,
    themeID: about.themeID,
  };

  const [theme, setTheme] = useState(menuThemeSelection);

  const createSelectedTheme = (theme: any) => {
    const selectedTheme = {
      themeID: theme.themeID,
      card: theme.richTextPost.card,
      content: theme.richTextPost.content,
      header: theme.richTextPost.header,
      paper: theme.paper,
      icons: theme.icons,
    };
    setTheme(selectedTheme);
  };

  useEffect(() => {
    switch (themeType) {
      case "DIARY":
        createSelectedTheme(diary);
        break;
      case "SOULPAD":
        createSelectedTheme(about);
        break;
      case "RETRO":
        console.log("retro");
        createSelectedTheme(retro);
        break;
      case "VIDEOGAME":
        console.log("video game");
        //createSelectedTheme(scrapbookComps);
        break;
      default:
        console.log("Default");
    }
  }, [themeType]);

  const { content, card, header, paper, icons } = theme;

  const isMobile = useMediaQuery("(max-width:600px)");
  const postSize = size === "small" ? "600px" : "900px";
  const mobileSpacing = spacing.xs * 0.5;
  const mobilePadding = ` 0 ${mobileSpacing}em ${spacing.lg}em`;
  const desktopPadding = ` ${spacing.sm}em ${spacing.xs}em`;

  const allPaperStyles = {
    ...paper,
    maxWidth: postSize,
  };

  const HeaderStyles = {
    ...header.styles,
    display: "flex",
    alignItems: "space-between",
  };

  const contentStylesResponsive = {
    ...content,
    padding: isMobile ? mobilePadding : desktopPadding,
  };

  return (
    <Paper className="rich-text-post-paper" elevation={2} sx={allPaperStyles}>
      <Box className="rich-text-post-card" sx={card.styles}>
        <Box className="rich-text-post-header" sx={HeaderStyles}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
          <ActionMenuWrapper>
            <MinimizeIcon sx={{ ...icons.primary, marginRight: 0.5 }} />
            <CropSquareIcon sx={{ ...icons.secondary, marginRight: 0.5 }} />
            <CloseIcon sx={icons.iconClose} />
          </ActionMenuWrapper>
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
