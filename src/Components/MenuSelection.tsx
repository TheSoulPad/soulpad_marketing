import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import aboutTheme from "../styles/aboutTheme/comps";
import { SxProps, Theme } from "@mui/system";
import { useTheme } from "../hooks/useTheme";
import { MenuType, CardType, PaperType } from "./types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobileWidth } from "../styles";

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
  const isMobile = useMediaQuery(isMobileWidth);
  const [compTheme, setCompTheme] = useState<MenuType>(
    aboutTheme.MenuSelection,
  );
  const [card, setCardTheme] = useState<CardType>(aboutTheme.Card);
  const [paper, setPaperTheme] = useState<PaperType>(aboutTheme.Paper);

  const setDefault = () => {
    setCompTheme(aboutTheme.MenuSelection);
    setCardTheme(aboutTheme.Card);
    setPaperTheme(aboutTheme.Paper);
  };

  const getAndSetComp = () => {
    const themeInfoStyles = useTheme(themeType);

    if (themeInfoStyles) {
      // Use PascalCase for themeInfoStyles and aboutTheme
      const paperStyles = themeInfoStyles.Paper || aboutTheme.Paper;
      const cardStyles = themeInfoStyles.Card || aboutTheme.Card;
      const compStyles =
        themeInfoStyles.MenuSelection || aboutTheme.MenuSelection;

      setCompTheme(compStyles);
      setCardTheme(cardStyles);
      setPaperTheme(paperStyles);
    } else {
      setDefault();
    }
  };

  useEffect(() => {
    getAndSetComp();
  }, [themeType]);

  const { header, text, content } = compTheme;
  //fix how you tag the active state styles
  //make the list styles describe only the DEFAULT list styles
  const listStyles = {
    display: `${horizontal ? "flex" : "block"}`,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: "0px",
    flexDirection: horizontal ? (isMobile ? "column" : "row") : "column",
  };

  const activeFont = {
    ...text?.active,
    cursor: "pointer",
  };

  const containerStyles = {
    ...paper,
    maxWidth: horizontal ? "800px" : "300px",
    height: "100%",
    width: "100%",
  };

  return (
    <Paper
      elevation={1}
      className={`menu-selection-paper menu-selection-container ${themeType}`}
      sx={containerStyles}
    >
      <Box
        className={`menu-selection-card ${themeType}`}
        sx={card as SxProps<Theme>}
      >
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
                sx={{ paddingLeft: 0 }}
                onClick={() => {
                  onThemeChange(item.themeType);
                }}
              >
                <Typography
                  variant="body1"
                  sx={themeType === item.themeType ? activeFont : text?.list}
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
