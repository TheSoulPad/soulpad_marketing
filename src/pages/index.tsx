import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { colors, spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Clouds from "../Components/Clouds";

const pageStyles = {
	color: "#232129",
};

const contentStyles: CSSProperties = {
	padding: spacing.lg,
	textAlign: "center",
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

const cloudContainer: CSSProperties = {
	marginTop: spacing.layoutbg,
};

const pageText = {
	header: "SoulPad",
	subHeader: "Unleash your inner universe.",
};

const cloudTitle = {
	about: "What is SoulPad?",
	create: "Create a SoulPad",
	return: "Return to your SoulPad",
};

const IndexPage: React.FC<PageProps> = () => {
	return (
		<BaseLayout title={pageText.header}>
			<Grid style={pageStyles}>
				<Grid
					container
					direction="column"
					className="content"
					style={contentStyles}>
					<Typography variant="h2" style={subTitle}>
						{pageText.subHeader}
					</Typography>

					<Grid
						container
						style={cloudContainer}
						justifyContent="center"
						spacing={3}>
						{Object.entries(cloudTitle).map(([key, title]) => (
							<Clouds key={key} title={title} />
						))}
					</Grid>
				</Grid>
			</Grid>
		</BaseLayout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
