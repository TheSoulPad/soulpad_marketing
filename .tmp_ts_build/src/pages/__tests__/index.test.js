import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";
afterEach(cleanup);
describe("HomePage", function () {
    it("should render the subheader", function () {
        render(React.createElement(Home, null));
        expect(screen.getByText(/A soul is a universe, not a feed/i)).toBeInTheDocument();
    });
    it("should render the SoulPad introduction video", function () {
        render(React.createElement(Home, null));
        var video = screen.getByLabelText("SoulPad introduction video");
        expect(video).toBeInTheDocument();
    });
    it("should render the newsletter banner", function () {
        render(React.createElement(Home, null));
        expect(screen.getByText(/sign up to our newsletter/i)).toBeInTheDocument();
    });
    it("should render the fundraising component", function () {
        render(React.createElement(Home, null));
        expect(screen.getByText(/Help SoulPad Reach Our \$10,000 Fundraising Goal!/i)).toBeInTheDocument();
    });
});
