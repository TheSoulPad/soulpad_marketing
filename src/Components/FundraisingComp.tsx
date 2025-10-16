import React, { CSSProperties } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FUNDRAISER_URL } from "../const";
import {
  paperMobileStyles,
  tabletAndGreaterStyles,
  istabletAndGreaterWidth,
} from "../styles";

interface FundraisingProps {
  paperStyles?: CSSProperties;
}

const FundraisingBanner: React.FC<FundraisingProps> = ({ paperStyles }) => {
  const tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);

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
        ...paperStyles,
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
          sx={{
            marginBottom: "1.5rem",
            px: tabletAndGreater ? 0 : 2,
            textAlign: "center",
          }}
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
            fontFamily: "'Fredoka Local', Fredoka, sans-serif",
            textAlign: "center",
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
            textAlign: "center",
          }}
        >
          {STRINGS.thankYou}
        </Typography>
      </Box>
    </Paper>
  );
};

export default FundraisingBanner;
