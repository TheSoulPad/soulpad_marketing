export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  return match?.[1] ?? null;
}

export function getYouTubeEmbedUrl(url: string, origin?: string): string {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
  });

  if (origin) {
    params.set("origin", origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function isYouTubeUrl(url: string): boolean {
  return getYouTubeVideoId(url) !== null;
}
