import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { about } from "../styles/about/comps";
import { useTheme } from "../hooks/useTheme";
import { MenuType } from "./types";

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
  // use the the default about.menuSelection
  const [compTheme, setCompTheme] = useState<MenuType>(about.menuSelection);
  const [card, setCardTheme] = useState(about.card);
  const [paper, setPaperTheme] = useState(about.paper);

  const setDefault = () => {
    setCompTheme(about.menuSelection);
    setCardTheme(about.card);
    setPaperTheme(about.paper);
  };

  const getAndSetComp = (theme: string) => {
    const { paper, card, comp } = useTheme("menuSelection", themeType);
    if (paper && card && comp) {
      setCompTheme(comp);
      setCardTheme(card);
      setPaperTheme(paper);
    } else {
      setDefault();
    }
  };

  useEffect(() => {
    switch (themeType) {
      case "SOULPAD":
        getAndSetComp("SOULPAD");
        break;
      case "DIARY":
        getAndSetComp("DIARY");
        break;
      case "RETRO":
        getAndSetComp("RETRO");
        break;
      default:
        break;
    }
  }, [themeType, compTheme, card, paper]);

  const { list, header, text, content } = compTheme;
  const activeText = compTheme.activeText;
  const activeColor = list.backgroundColor;
  const activeColorShadow = list.textShadow;

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
      className={`menu-selection-paper menu-selection-container ${themeType}`}
      sx={containerStyles}
    >
      <Box className={`menu-selection-card ${themeType}`} sx={card}>
        <Box
          className={`menu-selection-card-header ${themeType}`}
          sx={header.styles}
        >
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box
          className={`menu-selection-content ${themeType}`}
          sx={{ ...content }}
        >
          <List
            disablePadding={horizontal ? true : false}
            dense={true}
            sx={listStyles}
            className={`menu-selection-list ${themeType}`}
          >
            {items.map((item) => (
              <ListItem
                className={`menu-selection-list-item ${themeType}`}
                key={item.themeType}
                onClick={() => {
                  onThemeChange(item.themeType);
                }}
                sx={
                  themeType === item.themeType ? activeStyles : listItemStyles
                }
              >
                <Typography
                  variant="body1"
                  sx={themeType === item.themeType ? activeFont : text.sx}
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
