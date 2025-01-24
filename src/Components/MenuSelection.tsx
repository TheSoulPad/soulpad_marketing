import React, { useEffect, useState } from "react";
import { spacing } from "../styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { diary } from "../styles/diary00/comps";
import { about } from "../styles/about/comps";
// import { retro } from "../styles/retro00/comps";

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
  const [bg, setBg] = useState("transparent");

  //replace with a default SoulPad theme
  const menuThemeSelection = {
    menuSelection: diary.menuSelection,
    themeID: diary.themeID,
    card: diary.card,
    content: diary.content,
    paper: diary.paper,
    activeColor: diary.menuSelection.list.backgroundColor,
  };

  const [theme, setTheme] = useState(menuThemeSelection);

  const createSelectedTheme = (theme: any) => {
    const selectedTheme = {
      menuSelection: theme.menuSelection,
      themeID: theme.themeID,
      card: theme.card,
      content: theme.content,
      paper: theme.paper,
      activeColor: theme.menuSelection.list.backgroundColor,
    };
    setTheme(selectedTheme);
  };

  useEffect(() => {
    switch (themeType) {
      case "DIARY":
        createSelectedTheme(diary);
        break;
      case "RETRO":
        console.log("retro");
        // createSelectedTheme(retroComps);
        break;
      case "VIDEO_GAME":
        console.log("video game");
        //createSelectedTheme(vgComps);;
        break;
      case "SCRAPBOOK":
        console.log("scrapbook");
        //createSelectedTheme(scrapbookComps);
        break;
      default:
        console.log("Default");
    }
  }, [themeType]);

  const { content, paper, card, activeColor, themeID } = theme;
  const { header, text } = theme.menuSelection;

  const activeColorShadow = theme.menuSelection.list.backgroundColor;

  useEffect(() => {
    setBg(theme.activeColor);
  }, [theme.activeColor]);

  const listStyles = {
    display: `${horizontal ? "flex" : "block"}`,
    justifyContent: "center",
    alignItems: "center",
  };

  const listItemStyles = {
    ...text,
    padding: `${spacing.xs}em`,
    cursor: "pointer",
    maxWidth: "200px",
  };

  const activeStyles = {
    ...text,
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: `${bg}`,
  };

  const activeFont = {
    ...text.sx,
    textAlign: "center",
    color: "#ffffff",
    textShadow: activeColorShadow,
  };

  const containerStyles = {
    ...paper,
    maxWidth: "600px",
    width: "100%",
  };

  return (
    <Paper
      elevation={1}
      className="menu-selection-paper menu-selection-container"
      sx={containerStyles}
    >
      <Box className="menu-selection-card" sx={card}>
        <Box className="menu-selection-card-header" sx={header}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box className="menu-selection-content" sx={{ ...content }}>
          <List
            disablePadding={horizontal ? true : false}
            dense={true}
            sx={listStyles}
            className="menu-selection-list"
          >
            {items.map((item) => (
              <ListItem
                className="menu-selection-list-item"
                key={item.themeType}
                onClick={() => {
                  onThemeChange(item.themeType);
                  setBg(activeColor);
                }}
                sx={themeID === item.themeType ? activeStyles : listItemStyles}
              >
                <Typography
                  variant="body1"
                  sx={themeID === item.themeType ? activeFont : text.sx}
                >
                  <strong>{item.galleryName}</strong>
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
