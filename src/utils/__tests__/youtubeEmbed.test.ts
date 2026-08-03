import {
  getYouTubeEmbedUrl,
  getYouTubeVideoId,
  isYouTubeUrl,
} from "../youtubeEmbed";

describe("youtubeEmbed", () => {
  it("extracts video IDs from supported YouTube URLs", () => {
    expect(getYouTubeVideoId("https://www.youtube.com/watch?v=1FEM6XuE5Qs")).toBe(
      "1FEM6XuE5Qs",
    );
    expect(getYouTubeVideoId("https://youtu.be/1FEM6XuE5Qs?si=sharetoken")).toBe(
      "1FEM6XuE5Qs",
    );
  });

  it("builds a privacy-enhanced embed URL with origin", () => {
    expect(
      getYouTubeEmbedUrl(
        "https://www.youtube.com/watch?v=1FEM6XuE5Qs",
        "https://www.thesoulpad.com",
      ),
    ).toBe(
      "https://www.youtube-nocookie.com/embed/1FEM6XuE5Qs?autoplay=1&rel=0&modestbranding=1&origin=https%3A%2F%2Fwww.thesoulpad.com",
    );
  });

  it("detects YouTube URLs", () => {
    expect(isYouTubeUrl("https://www.youtube.com/watch?v=abc")).toBe(true);
    expect(isYouTubeUrl("https://example.com/video.mp4")).toBe(false);
  });
});
