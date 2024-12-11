import React from "react";
import { spacing } from "../styles";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { HeaderStyle, PaperStyle, ContentStyle } from "../styles/types";

interface CustomListItem {
  themeID: number;
  galleryName: string;
  themeType: string;
}

interface CustomListProps {
  header: HeaderStyle;
  items: CustomListItem[];
  title: string;
  content: ContentStyle | undefined;
  paper: PaperStyle;
  hoverColor: string;
  onThemeChange: (themeType: string) => void;
}

//change this to MuiList
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CustomList: React.FC<CustomListProps> = ({
  items,
  title,
  content,
  header,
  paper,
  hoverColor,
  onThemeChange,
}) => {
  const listItemStyles = {
    padding: `${spacing.xs}px`,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  };

  return (
    <Paper sx={paper}>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0px",
        }}
      >
        <Box className="menuselection-card-header" sx={header}>
          {title}
        </Box>
        <Box sx={content}>
          <List>
            {items.map((item) => (
              <ListItem
                key={item.themeID}
                onClick={() => onThemeChange(item.themeType)}
                sx={listItemStyles}
              >
                {item.galleryName}
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
    </Paper>
  );
};

export default CustomList;
