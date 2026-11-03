import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("HomePage", () => {
  it("should render the hero headline", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /A soul is a universe\./i,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Expand your digital world\./i,
    );
  });

  it("should render the How SoulPad Works card link", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /How SoulPad Works/i });
    expect(link).toHaveAttribute("href", "/HowSoulPadWorks");
  });

  it("should open the SoulPad video modal from the video card", () => {
    render(<Home />);
    fireEvent.click(
      screen.getByRole("link", { name: /Watch the SoulPad Video/i }),
    );
    expect(screen.getByTitle("SoulPad Video")).toBeInTheDocument();
  });

  it("should render Open SoulPad in the top bar", () => {
    render(<Home />);
    const links = screen.getAllByRole("link", { name: /Open SoulPad/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute("href", "https://thesoulpad.com");
  });

  it("should render the explore section heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Explore SoulPad/i }),
    ).toBeInTheDocument();
  });
});
