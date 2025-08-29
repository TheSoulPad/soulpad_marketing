import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("HomePage", () => {
  it("should render the subheader", () => {
    render(<Home />);
    // The subheader text comes from Strings.homePage.subHeader
    expect(
      screen.getByText(/A soul is a universe, not a feed/i),
    ).toBeInTheDocument();
  });

  it("should render the SoulPad introduction video", () => {
    render(<Home />);
    const video = screen.getByLabelText("SoulPad introduction video");
    expect(video).toBeInTheDocument();
  });

  it("should render the newsletter banner", () => {
    render(<Home />);
    expect(screen.getByText(/sign up to our newsletter/i)).toBeInTheDocument();
  });
});
