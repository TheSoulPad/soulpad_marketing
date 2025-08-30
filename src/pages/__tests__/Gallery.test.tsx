import { act } from "@testing-library/react";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Gallery from "../Gallery";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Gallery Page", () => {
  it("renders the theme selection menu", () => {
    render(<Gallery />);
    expect(screen.getByText(/select a theme/i)).toBeInTheDocument();
    expect(screen.getAllByText(/SoulPad/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Diary/i)).toBeInTheDocument();
    expect(screen.getByText(/Retrowave/i)).toBeInTheDocument();
    expect(screen.getByText(/Video game/i)).toBeInTheDocument();
  });

  it("switches between themes when a theme button is clicked", async () => {
    const { findByText } = render(<Gallery />);
    const diaryButton = await findByText(/Diary/i);
    await act(async () => {
      diaryButton.click();
    });
    expect(await findByText(/Diary/i)).toBeInTheDocument();
  });

  it("renders the Custom Card", () => {
    render(<Gallery />);
    expect(screen.getByText(/Custom Card/i)).toBeInTheDocument();
  });
});
