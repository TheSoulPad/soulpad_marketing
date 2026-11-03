import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserWindowCard } from "../marketing/BrowserWindowCard";
import { marketingExploreCards } from "../../const/marketingHomeCards";
import { ThemeModeProvider } from "../../contexts/ThemeModeContext";

const videoCard = marketingExploreCards.find((c) => c.kind === "video")!;

function renderVideoCard() {
  return render(
    <ThemeModeProvider>
      <BrowserWindowCard card={videoCard} />
    </ThemeModeProvider>,
  );
}

afterEach(cleanup);

describe("BrowserWindowCard video modal", () => {
  it("opens an embedded YouTube player instead of linking out", () => {
    renderVideoCard();

    fireEvent.click(
      screen.getByRole("link", { name: /Watch the SoulPad Video/i }),
    );

    const iframe = screen.getByTitle("SoulPad Video");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining(
        "https://www.youtube-nocookie.com/embed/1FEM6XuE5Qs",
      ),
    );
    expect(iframe).toHaveAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin",
    );
  });

  it("embeds non-YouTube video URLs directly in the iframe", () => {
    const embedUrl = "https://player.vimeo.com/video/123456789";
    const card = { ...videoCard, href: embedUrl };

    render(
      <ThemeModeProvider>
        <BrowserWindowCard card={card} />
      </ThemeModeProvider>,
    );

    fireEvent.click(
      screen.getByRole("link", { name: /Watch the SoulPad Video/i }),
    );

    const iframe = screen.getByTitle("SoulPad Video");
    expect(iframe).toHaveAttribute("src", embedUrl);
  });
});
