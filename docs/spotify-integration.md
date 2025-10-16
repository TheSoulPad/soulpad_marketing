# Spotify Web API Integration Guide

This document provides comprehensive setup instructions and troubleshooting tips for the Spotify Web API integration in the SoulPad project.

## Initial Setup

### 1. Create a Spotify Developer Application

1. Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Log in with your Spotify account (preferably one with Spotify Premium)
3. Click "Create an App"
4. Fill out the app details:
   - Name: "SoulPad"
   - Description: "SoulPad website integration for Spotify playback"
   - Website: Your website URL
   - Redirect URIs: See next section

### 2. Configure Redirect URIs

Spotify requires exact matching redirect URIs. Add these to your Spotify Dashboard:

**Development URIs:**

- `http://[::1]:8000/spotify-callback`
- `http://[::1]:8000/Gallery/spotify-callback`

**Production URIs:**

- `https://yourdomain.com/spotify-callback`
- `https://yourdomain.com/Gallery/spotify-callback`

> **IMPORTANT**: Spotify rejects `localhost` URIs. You must use the IPv6 loopback address `[::1]` for local development.

### 3. Environment Variables

Create or update your `.env` file in the project root with:

```
GATSBY_SPOTIFY_CLIENT_ID="your-client-id-from-dashboard"
GATSBY_SPOTIFY_CLIENT_SECRET="your-client-secret-from-dashboard"
GATSBY_SPOTIFY_REDIRECT_URI_DEV="http://[::1]:8000/spotify-callback"
GATSBY_SPOTIFY_REDIRECT_URI_PROD="https://yourdomain.com/spotify-callback"
```

## Usage Examples

### Basic Track Player

```tsx
<CustomMediaPlayer
  mediaUrl="spotify:track:4cOdK2wGLETKBW3PvgPWqT"
  mediaType="spotify"
  size="large"
  themeType="light"
  title="Never Gonna Give You Up - Rick Astley"
/>
```

### Album Player

```tsx
<CustomMediaPlayer
  mediaUrl="spotify:album:4eLPsYPBmXABThSJ821sqY"
  mediaType="spotify"
  size="large"
  themeType="dark"
  title="Album Name"
/>
```

### Playlist Player

```tsx
<CustomMediaPlayer
  mediaUrl="spotify:playlist:37i9dQZEVXcJZyENOWUFo7"
  mediaType="spotify"
  size="large"
  themeType="retro"
  title="Playlist Name"
/>
```

## Finding Spotify URIs

1. **From Spotify Web Player:**

   - Right-click on a track, album, or playlist
   - Select "Share" > "Copy Spotify URI"

2. **From Spotify Desktop App:**

   - Right-click on a track, album, or playlist
   - Select "Share" > "Copy Spotify URI"

3. **URI Format:**
   - Tracks: `spotify:track:TRACK_ID`
   - Albums: `spotify:album:ALBUM_ID`
   - Playlists: `spotify:playlist:PLAYLIST_ID`

## Troubleshooting

### Common Issues and Solutions

#### "INVALID_CLIENT: Invalid redirect URI"

**Problem:** The redirect URI doesn't match what's in your Spotify Dashboard.

**Solution:**

1. Verify the exact URIs in your Spotify Dashboard match your code
2. Make sure you're using `[::1]` instead of `localhost` in development
3. Check port numbers match exactly (e.g., `:8000`)
4. Ensure protocol matches (`http://` for dev, `https://` for prod)

#### Environment Variables Not Loading

**Problem:** `CLIENT_ID` or other environment variables show as empty or undefined.

**Solution:**

1. Check your `.env` file is in the project root
2. Make sure variables are prefixed with `GATSBY_` (required for client-side use)
3. Restart your development server with `npm run clean` followed by `npm run dev`
4. Use the SpotifyDebugger component to see loaded configuration values:
   ```tsx
   <SpotifyDebugger showDebug={true} />
   ```

#### "No Active Device Found" Error

**Problem:** Spotify API can't find a player device to control.

**Solution:**

1. Open the official Spotify app or web player in another tab/window
2. Start playing any song to register your device
3. Try the integration again
4. Ensure your account has Spotify Premium (required for Web Playback API)

#### Authentication Loop or Fails to Return to App

**Problem:** After authenticating with Spotify, you're not redirected back properly.

**Solution:**

1. Check browser console for errors
2. Verify the callback components are properly implemented in both locations:
   - `/src/pages/spotify-callback.tsx`
   - `/src/pages/Gallery/spotify-callback.tsx`
3. Make sure the state parameter is being handled properly in authentication

### Debugging Tools

The project includes a SpotifyDebugger component to help troubleshoot configuration issues:

```tsx
<SpotifyDebugger showDebug={true} />
```

This will show:

- Client ID status
- Current environment detection
- Configured redirect URIs
- Currently used URI
- Current hostname

## References

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [spotify-web-api-js Library Documentation](https://github.com/JMPerez/spotify-web-api-js)
