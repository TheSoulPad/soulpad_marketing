import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { spacing, colors } from "../styles";

interface LayoutProps {
	children: React.ReactNode;
}

const styles: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
};

const mainStyles: CSSProperties = {
	flex: 1,
	position: "relative",
};

const footerStyles: CSSProperties = {
	color: "#ffffff",
	backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
	textAlign: "left",
	position: "absolute",
	bottom: 0,
	width: "100%",
	margin: "0 auto",
	overflow: "hidden",
};

const footerText = {
	text: "SoulPad",
	year: new Date().getFullYear(),
};

const copyrightSymbol = "\u00A9";

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Grid container direction="column" style={styles}>
			<GlobalStyles />
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
