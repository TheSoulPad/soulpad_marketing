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
} from "../styles/types";
import Typography from "@mui/material/Typography";

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
  paper: PaperStyle | Simple;
  card: CardStyle | Simple;
  hover: string;
  menuID: number;
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
  hover,
  menuID,
  onThemeChange,
}) => {
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    setBg(hover);
  }, [hover]);

  const listItemStyles = {
    ...itemText,
    padding: `${spacing.xs}em`,
    cursor: "pointer",
  };

  const activeStyles = {
    ...itemText,
    color: "#ffffff !important",
    backgroundColor: `${bg} !important`,
  };

  const activeFont = {
    ...itemText.sx,
    color: "#ffffff",
  };

  return (
    <Paper elevation={1} className="menu-selection-paper" sx={paper}>
      <Box className="menu-selection-card" sx={card}>
        <Box className="menu-selection-card-header" sx={header}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box className="menu-selection-content" sx={{ ...content }}>
          <List className="menu-selection-list">
            {items.map((item) => (
              <ListItem
                className="menu-selection-list-item"
                key={item.themeID}
                onClick={() => {
                  onThemeChange(item.themeType);
                  setBg(hover);
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
