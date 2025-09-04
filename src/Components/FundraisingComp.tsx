import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FUNDRAISER_URL } from "../const";
import {
  paperMobileStyles,
  tabletAndGreaterStyles,
  tabletAndGreaterWidth,
} from "../styles";

const FundraisingBanner: React.FC = () => {
  const tabletAndGreater = useMediaQuery(tabletAndGreaterWidth);

  const STRINGS = {
    header: "Help SoulPad Reach Our $10,000 Fundraising Goal!",
    description:
      "Your donation will help us hire developers, designers, and cover operational costs. Help make SoulPad a reality for everyone!",
    button: "Donate Now on GoFundMe",
    thankYou:
      "Thank you for supporting SoulPad’s mission to bring creative power and fun back to social media!",
  };

  return (
    <Paper
      className="home-page--fundraising"
      sx={{
        fontFamily: "Fredoka, sans-serif",
        whiteSpace: "break-spaces",
        borderRadius: "5px",
        background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
        width: "100%",
        ...(tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles),
      }}
    >
      <Box
        className="fundraising--content"
        display="flex"
        flexDirection="column"
        sx={{ maxWidth: 600, width: "100%", margin: "auto" }}
      >
        <Typography
          className="fundraising--header"
          variant="h2"
          sx={{
            marginTop: tabletAndGreater ? "0" : "1rem",
            marginBottom: "1rem",
            fontWeight: 600,
            px: tabletAndGreater ? 0 : 2,
          }}
        >
          {STRINGS.header}
        </Typography>
        <Typography
          className="fundraising--description"
          variant="body2"
          sx={{ marginBottom: "1.5rem", px: tabletAndGreater ? 0 : 2 }}
        >
          {STRINGS.description}
        </Typography>
        <Button
          className="fundraising--button"
          variant="contained"
          color="primary"
          size="large"
          href={FUNDRAISER_URL}
          target="_blank"
          sx={{
            backgroundColor: "rgba(255,97,5,0.6)",
            fontWeight: 700,
            fontSize: "1rem",
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            fontFamily: "Fredoka, sans-serif",
            margin: "auto",
            "&:hover": {
              backgroundColor: "#fff",
              color: "rgba(255,97,5,0.6)",
            },
          }}
        >
          {STRINGS.button}
        </Button>
        <Typography
          variant="body2"
          sx={{
            marginTop: "1.5rem",
            color: "#333",
            px: tabletAndGreater ? 0 : 2,
          }}
        >
          {STRINGS.thankYou}
        </Typography>
      </Box>
    </Paper>
  );
};

export default FundraisingBanner;
