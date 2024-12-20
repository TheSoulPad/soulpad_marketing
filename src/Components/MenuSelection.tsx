import React from "react";
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
  onThemeChange,
}) => {
  const listItemStyles = {
    padding: `${spacing.xs}em`,
    cursor: "pointer",
    ...itemText,
  };

  return (
    <Paper elevation={1} className="menu-selection-paper" sx={paper}>
      <Box className="menu-selection-card" sx={card}>
        <Box className="menu-selection-card-header" sx={header}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box className="menu-selection-content" sx={content}>
          <List>
            {items.map((item) => (
              <ListItem
                className="menu-selection-list-item"
                key={item.themeID}
                onClick={() => onThemeChange(item.themeType)}
                sx={listItemStyles}
              >
                <Typography variant="body1" sx={content.text}>
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
