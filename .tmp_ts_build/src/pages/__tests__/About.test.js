import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import AboutPage from "../About";
import "@testing-library/jest-dom";
afterEach(cleanup);
describe("AboutPage", function () {
    it("renders the About header", function () {
        render(React.createElement(AboutPage, null));
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });
    it("renders the main content point titles", function () {
        render(React.createElement(AboutPage, null));
        // Checks for the main content point title text
        expect(screen.getByText(/The Feed vs. Real Profiles/i)).toBeInTheDocument();
        expect(screen.getByText(/The Numbers Game/i)).toBeInTheDocument();
        expect(screen.getAllByText(/No Room for Creativity/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/Enter SoulPad/i)).toBeInTheDocument();
    });
});
