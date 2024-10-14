import React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { colors } from "../styles";
import { CSSProperties } from "react";
import Box from "@mui/material/Box";
import { Link } from "gatsby";

interface CloudProps {
	title: string;
	link: string;
}

const styles: CSSProperties = {
	color: colors.primaryText,
	fontFamily: "Courier Prime, monospace",
	fontWeight: "800",
};

const cloudStyles = {
	background: "rgba(255, 255, 255)",
	width: "300px",
	height: "100px",
	borderRadius: "150px",
	boxShadow: "10px 10px rgba(0,0,0,0.2)",
	animation: "move 5s infinite",
	position: "relative",
	cursor: "pointer",
};

const Clouds: React.FC<CloudProps> = ({ title, link }) => {
	return (
		<Grid style={styles}>
			<Box
				className="cloud"
				sx={{
					...cloudStyles,
					"&:hover": {
						transform: "translateY(-30px)",
						boxShadow: "15px 15px rgba(0,0,0,0.3)",
					},
					"&::after": {
						content: "''",
						background: "rgba(255, 255, 255)",
						position: "absolute",
						width: "100px",
						height: "100px",
						borderRadius: "50%",
						top: "-50px",
						left: "50px",
					},
					"&::before": {
						content: "''",
						background: "rgba(255, 255, 255)",
						position: "absolute",
						width: "170px",
						height: "150px",
						borderRadius: "50%",
						top: "-90px",
						right: "40px",
						"@keyframes move": {
							"0%": {
								transform: "translateX(0)",
							},
							"50%": {
								transform: "translateX(-40px)",
							},
							"100%": {
								transform: "translateX(0)",
							},
						},
					},
				}}>
				<Typography
					variant="body1"
					sx={{
						marginBottom: 5,
						fontWeight: 800,
						padding: 1,
						position: "absolute",
						width: "100%",
						zIndex: 100,
					}}>
					<Link to={link}>{title}</Link>
				</Typography>
			</Box>
		</Grid>
	);
};

export default Clouds;
