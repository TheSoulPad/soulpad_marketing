import React from "react";
import CustomCard from "./CustomCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

interface CustomListProps {
  children?: React.ReactNode;
  size: "small" | "large";
  title: string;
  circular: boolean;
  multi?: boolean;
  progressValues: { item: number; item2: number }[];
  themeType: string;
}

const CustomProgress: React.FC<CustomListProps> = ({
  title,
  size,
  themeType,
}) => {
  return (
    <CustomCard title={title} size={size} themeType={themeType}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress
          sx={{
            mt: 2,
          }}
          variant="determinate"
          value={50}
        />
      </Box>
    </CustomCard>
  );
};

export default CustomProgress;
