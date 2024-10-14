import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { colors, spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";

const pageStyles = {
	color: "#232129",
};

const heroStyles: CSSProperties = {
	padding: spacing.lg,
	textAlign: "center",
	marginTop: spacing.xl,
	color: "#ffffff",
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
	header: "About SoulPad",
	subHeader: "What is SoulPad?",
};

const aboutContent = {
	about:
		"SoulPad is a platform for creating and sharing your own digital worlds. You can create a world, add characters, and write stories about them. You can also explore other people's worlds, characters, and stories. SoulPad is a place to unleash your creativity and share it with others.",
};

const paperStyles = {
	backgroundImage: "url('/images/paper-bg-about.jpeg')",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
};

const IndexPage: React.FC<PageProps> = () => {
	return (
		<BaseLayout title={pageText.header}>
			<Grid className="homepage-container" style={pageStyles}>
				<Grid container direction="column" className="hero" style={heroStyles}>
					<Paper style={paperStyles}>
						<Typography variant="h2" style={subTitle}>
							{pageText.subHeader}
						</Typography>
						<Typography variant="h2" style={subTitle}>
							{aboutContent.about}
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</BaseLayout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>About</title>;
