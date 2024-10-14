import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { colors, spacing } from "../styles";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  height?: string;
}

const styles: CSSProperties = {
  backgroundImage: "url('/images/home-bg.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  color: "#ffffff",
  minHeight: "100vh",
};

const h1Styles: CSSProperties = {
  margin: 0,
  fontFamily: "Spicy Rice, serif",
  fontWeight: "400",
  padding: spacing.lg,
  textAlign: "center",
  marginTop: spacing.xxl,
};

const mainStyles: CSSProperties = {
  flex: 1,
  position: "relative",
};

const footerStyles: CSSProperties = {
  color: "#ffffff",
  backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
  textAlign: "left",
  // position: "absolute",
  // bottom: 0,
  width: "100%",
  margin: "0 auto",
};

const footerText = {
  text: "SoulPad",
  year: new Date().getFullYear(),
};

const copyrightSymbol = "\u00A9";

const BaseLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Grid className="base-layout" container direction="column" style={styles}>
      <GlobalStyles />
      <Grid>
        <Typography variant="h1" style={h1Styles}>
          {title}
        </Typography>
      </Grid>
      <main style={mainStyles}>{children}</main>
      <Grid size={"auto"}>
        <footer style={footerStyles}>
          <Typography variant="body1" sx={{ padding: 2 }}>
            {footerText.text} {copyrightSymbol} {footerText.year}
          </Typography>
        </footer>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
