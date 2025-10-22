import React from "react";

// Minimal shim for SpotifyPlayer used in tests/typechecks.
// If you have a richer implementation, replace this file.

const SpotifyPlayer: React.FC<{ uri?: string }> = ({ uri }) => {
  return (
    <div data-testid="spotify-player">
      {/* Placeholder for Spotify player - URI: */} {uri}
    </div>
  );
};

export default SpotifyPlayer;
