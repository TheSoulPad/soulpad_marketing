import React, { CSSProperties } from "react";
import { spacing } from "../styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

interface MenuItem {
  id: number;
  name: string;
  onClick: () => void;
}

interface MenuSelectionProps {
  Header: React.ElementType;
  items: MenuItem[];
  title: string;
  menuStyles: CSSProperties;
  contentStyles: CSSProperties;
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
  menuStyles,
  contentStyles,
  hoverColor,
  Header,
}) => {
  //change this to MuiList Item
  const Selection = styled.li`
    padding: ${spacing.xs}px;
    cursor: pointer;
    &:hover {
      background-color: ${hoverColor};
    }
  `;

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "0px",
        ...menuStyles,
      }}
    >
      <Header className="card-header">{title}</Header>
      <CardContent sx={contentStyles}>
        <List>
          {items.map((item) => (
            <Selection key={item.id} onClick={item.onClick}>
              {item.name}
            </Selection>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MenuSelection;
