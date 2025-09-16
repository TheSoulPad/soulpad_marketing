import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "../hooks/useTheme";
import { RichTextType, PaperType, CardType } from "./types";
import aboutTheme from "../styles/aboutTheme/comps";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobileWidth, MAX_MOBILE_WIDTH } from "../styles";

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
  size,
  themeType,
  renderItem,
  children,
}) => {
  const isMobile = useMediaQuery(isMobileWidth);
  const themeInfoStyles = useTheme(themeType);
  const [card, setCardTheme] = useState<CardType>(
    themeInfoStyles.Card || aboutTheme.Card,
  );
  const [customCard, setCustomCardTheme] = useState<RichTextType>(
    themeInfoStyles.CustomCard || aboutTheme.CustomCard,
  );
  const [paper, setPaperTheme] = useState<PaperType>(
    themeInfoStyles.Paper || aboutTheme.Paper,
  );

  useEffect(() => {
    // Update state when themeInfoStyles or themeType changes
    setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
    setCustomCardTheme(themeInfoStyles.CustomCard || aboutTheme.CustomCard);
    setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);
  }, [themeInfoStyles, themeType]);

  const smallSize = {
    maxWidth: isMobile ? MAX_MOBILE_WIDTH : "415px",
    maxHeight: "1000px",
    width: "100%",
  };

  const largeSize = {
    maxWidth: isMobile ? MAX_MOBILE_WIDTH : "800px",
    minHeight: "200px",
  };

  const cardSize = size === "small" ? smallSize : largeSize;

  const titleStyles = customCard.header.styles;

  const paperStyles = {
    ...paper,
    ...cardSize,
  };

  const cardStyles = {
    ...card,
    ...cardSize,
  };

  const contentStyles = {
    ...customCard.content,
    alignItems: "center",
    padding: "1rem",
  };

  return (
    <Paper className="custom-paper-card" sx={paperStyles}>
      <Card className="custom-card-body" sx={cardStyles}>
        <Typography variant="h2" className="card-title" sx={titleStyles}>
          {title}
        </Typography>

        {/* fixed styles for now */}
        <Box
          className="custom-card-content"
          display="flex"
          flexDirection="column"
          rowGap={1}
          sx={contentStyles}
        >
          {renderItem || children}
        </Box>

        {/*
        {imageUrl && (
          <Box className="card-image">
            <img src={imageUrl} alt={title} className="card-image" />
          </Box>
        )}

        {text && (
          <Typography variant="h4" className="card-text">
            {text}
          </Typography>
        )} */}
      </Card>
    </Paper>
  );
};

export default CustomCard;
