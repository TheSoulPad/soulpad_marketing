import React, { useEffect, useState } from "react";
import { spacing } from "../styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { diary } from "../styles/diary00/comps";
import { about } from "../styles/about/comps";
import { retro } from "../styles/retro00/comps";

//this a temporary interface
interface MenuItem {
  galleryName: string;
  themeType: string;
}

interface MenuSelectionProps {
  themeType: string;
  items: MenuItem[];
  title: string;
  horizontal?: boolean;
  onThemeChange: (themeType: string) => void;
}

const MenuSelection: React.FC<MenuSelectionProps> = ({
  items,
  horizontal,
  themeType,
  title,
  onThemeChange,
}) => {
  const menuThemeSelection = {
    themeID: about.themeID,
    activeText: about.menuSelection.activeText,
    card: about.card,
    content: about.menuSelection.content,
    header: about.menuSelection.header,
    text: about.menuSelection.text,
    paper: about.paper,
    activeColor: about.menuSelection.list.backgroundColor,
    activeColorShadow: about.menuSelection.list.textShadow,
  };

  const [theme, setTheme] = useState(menuThemeSelection);

  const createSelectedTheme = (theme: any) => {
    const selectedTheme = {
      activeText: theme.menuSelection.activeText,
      themeID: theme.themeID,
      card: theme.card,
      content: theme.menuSelection.content,
      header: theme.menuSelection.header,
      paper: theme.paper,
      text: theme.menuSelection.text,
      activeColor: theme.menuSelection.list.backgroundColor,
      activeColorShadow: theme.menuSelection.list.textShadow,
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

  const {
    activeText,
    content,
    card,
    activeColor,
    activeColorShadow,
    themeID,
    header,
    paper,
    text,
  } = theme;

  const listStyles = {
    display: `${horizontal ? "flex" : "block"}`,
    justifyContent: "center",
    alignItems: "center",
  };

  const listItemStyles = {
    ...text.styles,
    cursor: "pointer",
    maxWidth: "200px",
  };

  const activeStyles = {
    ...text.styles,
    color: activeText.color,
  };

  const activeFont = {
    ...text.sx,
    backgroundColor: `${activeColor}`,
    color: activeText.color,
    border: activeText.border,
    textShadow: activeColorShadow,
    cursor: "pointer",
  };

  const containerStyles = {
    ...paper,
    maxWidth: "800px",
    width: "100%",
  };

  return (
    <Paper
      elevation={1}
      className={`menu-selection-paper menu-selection-container ${themeID}`}
      sx={containerStyles}
    >
      <Box className={`menu-selection-card ${themeID}`} sx={card}>
        <Box
          className={`menu-selection-card-header ${themeID}`}
          sx={header.styles}
        >
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box
          className={`menu-selection-content ${themeID}`}
          sx={{ ...content }}
        >
          <List
            disablePadding={horizontal ? true : false}
            dense={true}
            sx={listStyles}
            className={`menu-selection-list ${themeID}`}
          >
            {items.map((item) => (
              <ListItem
                className={`menu-selection-list-item ${themeID}`}
                key={item.themeType}
                onClick={() => {
                  onThemeChange(item.themeType);
                }}
                sx={themeID === item.themeType ? activeStyles : listItemStyles}
              >
                <Typography
                  variant="body1"
                  sx={themeID === item.themeType ? activeFont : text.sx}
                >
                  {item.galleryName}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default MenuSelection;
