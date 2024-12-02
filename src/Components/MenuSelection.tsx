import React from "react";
import { spacing } from "../styles";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { Header, Paper as P, ContentType } from "../styles/types";

interface MenuItem {
  id: number;
  name: string;
  onClick: () => void;
}

interface MenuSelectionProps {
  header: Header;
  items: MenuItem[];
  title: string;
  content: ContentType;
  paper: P;
  hoverColor: string;
}

//change this to MuiList
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuSelection: React.FC<MenuSelectionProps> = ({
  items,
  title,
  content,
  hoverColor,
  header,
  paper,
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
                key={item.id}
                onClick={item.onClick}
                sx={listItemStyles}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
    </Paper>
  );
};

export default MenuSelection;
