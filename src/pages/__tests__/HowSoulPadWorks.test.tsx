import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import HowSoulPadWorks from "../HowSoulPadWorks";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("How SoulPad Works Page", () => {
  it("renders the page header and intro", () => {
    render(<HowSoulPadWorks />);
    expect(
      screen.getByRole("heading", { name: /How SoulPad Works/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/five main pages/i)).toBeInTheDocument();
  });

  it("renders all five app page sections", () => {
    render(<HowSoulPadWorks />);

    expect(
      screen.getByRole("heading", { name: /1\. Canvas Studio/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /2\. My Pantry/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /3\. Edit SoulPad/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /4\. The SoulPad Page/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /5\. The Soul Exchange/i }),
    ).toBeInTheDocument();
  });

  it("renders screenshots for each section", () => {
    render(<HowSoulPadWorks />);

    expect(
      screen.getByAltText(/Canvas Studio screenshot/i),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/My Pantry screenshot/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Edit SoulPad screenshot/i)).toBeInTheDocument();
    expect(screen.getByAltText(/SoulPad page screenshot/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/Soul Exchange screenshot/i),
    ).toBeInTheDocument();
  });
});
