import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "../hooks/useTheme";
import {
  RichTextType,
  PaperType,
  MenuType,
  IconsType,
  CardType,
} from "./types";
import { about } from "../styles/about/comps";

//hardcode thes styles for now
interface CardProps {
  children?: React.ReactNode;
  imageUrl?: string;
  size: "small" | "large";
  text?: string;
  title: string;
  themeType: string;
  renderItem?: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  text,
  imageUrl,
  size,
  themeType,
  renderItem,
  children,
}) => {
  const [card, setCardTheme] = useState<CardType>(about.card);
  const [paper, setPaperTheme] = useState<PaperType>(about.paper);

  const setDefault = () => {
    setCardTheme(about.card);
    setPaperTheme(about.paper);
  };

  const getAndSetComp = () => {
    const themeInfoStyles = useTheme(themeType);

    if (themeInfoStyles) {
      const paperStyles = themeInfoStyles.paper;
      const cardStyles = themeInfoStyles.card;

      setCardTheme(cardStyles);
      setPaperTheme(paperStyles);
      return;
    }
    setDefault();
  };

  useEffect(() => {
    getAndSetComp();
  }, [themeType]);

  const smallSize = {
    minWidth: "150px",
    minHeight: "150px",
  };

  const largeSize = {
    minWidth: "300px",
    minHeight: "200px",
  };

  const titleStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  const cardSize = size === "small" ? smallSize : largeSize;
  return (
    <Paper className="custom-paper-card" sx={{ ...paper, ...cardSize }}>
      <Card
        className="custom-card-body"
        sx={{ ...card, minHeight: cardSize.minHeight }}
      >
        <Typography variant="body1" className="card-title" sx={titleStyles}>
          {title}
        </Typography>

        {imageUrl && (
          <Box className="card-image">
            <img src={imageUrl} alt={title} className="card-image" />
          </Box>
        )}

        {text && (
          <Typography variant="h4" className="card-text">
            {text}
          </Typography>
        )}

        <Box display="flex" flexDirection="column" sx={{ textAlign: "center" }}>
          {renderItem || children}
        </Box>
      </Card>
    </Paper>
  );
};

export default CustomCard;
