import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";

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
	padding: 36,
	textAlign: "center",
	marginTop: "50px",
	color: "#ffffff",
};

const pageText = {
	header: "SoulPad",
	subHeader: "Release your inner universe.",
};

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main style={pageStyles}>
			<GlobalStyles />
			<div style={heroStyles}>
				<h1>{pageText.header}</h1>
				<p>{pageText.subHeader}</p>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
