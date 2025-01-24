import React from "react";
import CustomCard from "./CustomCard";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import {
  CardStyle,
  Simple,
  ListStyle,
  PaperStyle,
  SimplePaper,
  TitleFont,
} from "../styles/types";
import { Box, Typography } from "@mui/material";

interface CustomListProps {
  card: CardStyle | Simple | ListStyle;
  children?: React.ReactNode;
  paper: PaperStyle | SimplePaper;
  size: "small" | "large";
  title: string;
  titleFont: TitleFont;
  circular: boolean;
  multi?: boolean;
  progressValues: { item: number; item2: number }[];
  themeType?: string;
}
//learn how to do dynamic types

const CustomProgress: React.FC<CustomListProps> = ({
  card,
  paper,
  title,
  size,
  titleFont,
}) => {
  return (
    <CustomCard
      title={title}
      paper={paper}
      card={card}
      titleFont={titleFont}
      size={size}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress variant="determinate" value={50} />
      </Box>
    </CustomCard>
  );
};

export default CustomProgress;
