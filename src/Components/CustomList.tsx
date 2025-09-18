import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CustomCard from "./CustomCard";

interface CustomListItem {
  id: number;
  label: string;
}

interface CustomListProps {
  items: CustomListItem[];
  size: "small" | "large";
  title: string;
  themeType: string;
}

const CustomList: React.FC<CustomListProps> = ({
  items,
  title,
  size,
  themeType,
}) => {
  return (
    <CustomCard title={title} themeType={themeType} size={size}>
      <div>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "transparent",
            maxHeight: 300,
            textDecoration: "none",
            fontSize: "1.5rem",
          }}
        >
          {items.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </List>
      </div>
    </CustomCard>
  );
};

export default CustomList;
