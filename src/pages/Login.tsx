import React, { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { spacing, colors } from "../styles";
import { HeadFC } from "gatsby";

const Login: React.FC = () => {
	const subTitle: CSSProperties = {
		fontFamily: "Courier Prime, monospace",
		fontWeight: "800",
		backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
		borderRadius: "5px",
		fontSize: 32,
		padding: spacing.xs,
		margin: "auto",
	};

	const contentStyles: CSSProperties = {
		padding: spacing.lg,
		textAlign: "center",
		color: "#ffffff",
	};

	return (
		<BaseLayout title="Enter your SoulPad">
			<Grid container style={contentStyles}>
				<Typography variant="h2" style={subTitle}>
					Coming Soon!
				</Typography>
			</Grid>
			{/* Add your content here */}
		</BaseLayout>
	);
};

export default Login;
export const Head: HeadFC = () => <title>Login</title>;
