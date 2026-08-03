import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

jest.mock("@mui/material/useMediaQuery", () => jest.fn(() => false));

afterEach(cleanup);

describe("Footer", () => {
  it("renders the How SoulPad Works link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /How SoulPad Works/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/HowSoulPadWorks");
  });

  it("does not render the old Gallery link label", () => {
    render(<Footer />);
    expect(
      screen.queryByText(/See the Soul Exchange/i),
    ).not.toBeInTheDocument();
  });
});
