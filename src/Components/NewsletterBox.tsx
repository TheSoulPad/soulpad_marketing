import React, { CSSProperties, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import {
  paperMobileStyles,
  tabletAndGreaterStyles,
  isMobileWidth,
} from "../styles";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREEENDPOINT } from "../const";

interface NewsLetterProps {
  paperStyles?: CSSProperties;
}

const NewsletterBanner: React.FC<NewsLetterProps> = ({ paperStyles }) => {
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useMediaQuery(isMobileWidth);
  const [state, handleSubmit] = useForm(FORMSPREEENDPOINT);

  const STRINGS = {
    header: "Sign up to our newsletter",
    info: "Stay updated on SoulPad's progress! For questions, comments, or suggestions, email us at ",
    emailLink: "info@soulpadforeveryone.com",
    thankYou: "Thank you for signing up!",
    emailLabel: "Your email address",
    messageLabel: "Leave a message",
    signUpButton: "Sign Up",
    emailValidationPrefix: "Email",
    messageValidationPrefix: "Message",
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    handleSubmit(e);
  };

  return (
    <Paper
      className="home-page--newsletter"
      sx={{
        ...paperStyles,
        ...(isMobile ? paperMobileStyles : tabletAndGreaterStyles),
      }}
    >
      <Box
        sx={{ maxWidth: "600px", width: "100%", margin: "auto" }}
        className="newsletter--content"
      >
        <Box
          className="newsletter--header"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="newsletter--title"
            variant="h2"
            sx={{
              marginTop: isMobile ? "1rem" : "0",
              marginBottom: "1rem",
              fontFamily: "'Fredoka Local', Fredoka, sans-serif",
              fontWeight: 600,
            }}
          >
            {STRINGS.header}
          </Typography>
          <Typography
            variant="body2"
            className="newsletter--info"
            sx={{ marginBottom: "1.5rem", px: isMobile ? 2 : 0 }}
          >
            {STRINGS.info}
            <a href={`mailto:${STRINGS.emailLink}`} style={{ color: "black" }}>
              {STRINGS.emailLink}
            </a>
          </Typography>
        </Box>

        {submitted ? (
          <Box
            sx={{ margin: "auto", maxWidth: "200px", px: isMobile ? 2 : 0 }}
            color="success.main"
          >
            {STRINGS.thankYou}
          </Box>
        ) : (
          <form
            onSubmit={onSubmit}
            method="POST"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexDirection: "column",
              padding: isMobile ? "1rem" : "0",
            }}
          >
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <TextField
              type="email"
              label={STRINGS.emailLabel}
              variant="outlined"
              size="small"
              required
              name="email"
              className="newsletter--input"
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
              }}
            />
            <ValidationError
              prefix={STRINGS.emailValidationPrefix}
              field="email"
              errors={state.errors}
            />

            <TextField
              type="text"
              label={STRINGS.messageLabel}
              variant="outlined"
              size="medium"
              required
              name="message"
              className="newsletter--input"
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
              }}
            />

            <ValidationError
              prefix={STRINGS.messageValidationPrefix}
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "rgba(255,97,5,0.6)",
                fontFamily: "'Fredoka Local', Fredoka, sans-serif",
                color: "black",
                "&:hover": {
                  backgroundColor: "white",
                  color: "rgba(255,97,5,0.6)",
                },
              }}
            >
              {STRINGS.signUpButton}
            </Button>
          </form>
        )}
      </Box>
    </Paper>
  );
};

export default NewsletterBanner;
