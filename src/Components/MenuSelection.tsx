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

const MenuSelection: React.FC<MenuSelectionProps> = ({
  items,
  title,
  menuStyles,
  contentStyles,
  hoverColor,
  Header,
}) => {
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
        <ul>
          {items.map((item) => (
            <Selection key={item.id} onClick={item.onClick}>
              {item.name}
            </Selection>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MenuSelection;
