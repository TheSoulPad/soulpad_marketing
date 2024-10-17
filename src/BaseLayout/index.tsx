import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

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

const BaseLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid className="base-layout" container direction="column" style={styles}>
        <Grid>
          <Typography variant="h1" style={h1Styles}>
            {title}
          </Typography>
        </Grid>
        <main style={mainStyles}>{children}</main>
        <Grid size={"auto"}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BaseLayout;
