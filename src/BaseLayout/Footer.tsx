import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { colors } from "../styles";

import { homePageLinks } from "../const";

const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				margin: "0 auto",
				backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
				color: "white",
				textAlign: "left",
				width: "100%",
			}}>
			<Typography variant="body1">
				&copy; {new Date().getFullYear()} SoulPad. All rights reserved.
			</Typography>
			{Object.entries(homePageLinks).map(([key, link]) => (
				<Typography key={key} variant="body2">
					<Link href={link.url} color="inherit" underline="none">
						{link.label}
					</Link>
				</Typography>
			))}
		</Box>
	);
};

export default Footer;
