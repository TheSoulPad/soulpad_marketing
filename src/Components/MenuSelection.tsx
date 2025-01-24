import React, { useEffect, useState } from "react";
import { spacing } from "../styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import {
  HeaderStyle,
  PaperStyle,
  ContentStyle,
  CardStyle,
  SimpleContent,
  Simple,
  TextStyle,
  SimplePaper,
} from "../styles/types";
import Typography from "@mui/material/Typography";
import { Widgets } from "@mui/icons-material";

interface MenuItem {
  themeID: number;
  galleryName: string;
  themeType: string;
}

interface MenuSelectionProps {
  header: HeaderStyle | Simple;
  items: MenuItem[];
  itemText: TextStyle;
  title: string;
  content: ContentStyle | SimpleContent;
  paper: PaperStyle | SimplePaper;
  card: CardStyle | Simple;
  activeColor: string;
  menuID: number;
  horizontal?: boolean;
  activeColorShadow?: string;
  onThemeChange: (themeType: string) => void;
}

const MenuSelection: React.FC<MenuSelectionProps> = ({
  items,
  itemText,
  title,
  content,
  header,
  paper,
  card,
  activeColor,
  menuID,
  horizontal,
  activeColorShadow,
  onThemeChange,
}) => {
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    setBg(activeColor);
  }, [activeColor]);

  const listStyles = {
    display: `${horizontal ? "flex" : "block"}`,
    justifyContent: "center",
    alignItems: "center",
  };

  const listItemStyles = {
    ...itemText,
    padding: `${spacing.xs}em`,
    cursor: "pointer",
    maxWidth: "200px",
  };

  const activeStyles = {
    ...itemText,
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: `${bg}`,
  };

  const activeFont = {
    ...itemText.sx,
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
                key={item.themeID}
                onClick={() => {
                  onThemeChange(item.themeType);
                  setBg(activeColor);
                }}
                sx={menuID === item.themeID ? activeStyles : listItemStyles}
              >
                <Typography
                  variant="body1"
                  sx={menuID === item.themeID ? activeFont : itemText.sx}
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
