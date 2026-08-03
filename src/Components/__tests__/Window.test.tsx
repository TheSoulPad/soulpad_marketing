import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Window from "../Window";

afterEach(cleanup);

describe("Window video modal", () => {
  it("opens an embedded YouTube player instead of linking out", () => {
    render(
      <Window
        title="Watch the SoulPad Video"
        link="https://www.youtube.com/watch?v=1FEM6XuE5Qs"
        type="video"
        maxWidth="300px"
        minHeight="180px"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Watch the SoulPad Video/i }));

    const iframe = screen.getByTitle("SoulPad Video");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining("https://www.youtube-nocookie.com/embed/1FEM6XuE5Qs"),
    );
    expect(iframe).toHaveAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin",
    );
  });
});
