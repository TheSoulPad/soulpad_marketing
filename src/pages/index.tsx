import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { colors, spacing } from "../styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const pageStyles = {
	color: "#232129",
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
	backgroundImage: "url('/images/home-bg.jpg')",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	height: "100vh",
	overflow: "hidden",
};

const heroStyles: CSSProperties = {
	padding: spacing.lg,
	textAlign: "center",
	marginTop: spacing.layout,
	color: "#ffffff",
};

const h1Styles: CSSProperties = {
	margin: 0,
	fontFamily: "Spicy Rice, serif",
	fontWeight: "400",
};

const subTitle: CSSProperties = {
	fontFamily: "Courier Prime, monospace",
	fontWeight: "800",
	backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
	borderRadius: "5px",
	fontSize: 32,
	padding: spacing.xs,
	margin: "auto",
};

const pageText = {
	header: "SoulPad",
	subHeader: "Unleash your inner universe.",
};

const IndexPage: React.FC<PageProps> = () => {
	return (
		<BaseLayout>
			<Grid className="homepage-container" style={pageStyles}>
				<Grid container direction="column" className="hero" style={heroStyles}>
					<Typography variant="h1" style={h1Styles}>
						{pageText.header}
					</Typography>

					<Typography variant="h2" style={subTitle}>
						{pageText.subHeader}
					</Typography>
				</Grid>
			</Grid>
		</BaseLayout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
