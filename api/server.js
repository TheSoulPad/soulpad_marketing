// Minimal proxy API server for fetching theme data
// Usage: NODE_ENV=development node api/server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Simple CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.get("/api/get-themes", async (req, res) => {
  try {
    // target can be provided as query param 'url' or via env TARGET_URL
    const target = req.query.url || process.env.TARGET_URL;
    if (!target)
      return res.status(400).json({
        error: "target url required (query ?url=...) or set TARGET_URL env",
      });

    const upstream = await fetch(target, {
      headers: { Accept: "application/json" },
    });
    if (!upstream.ok)
      return res
        .status(502)
        .json({ error: "upstream error", status: upstream.status });
    const json = await upstream.json();
    return res.json(json);
  } catch (err) {
    console.error("fetch error", err);
    return res
      .status(500)
      .json({ error: "internal_error", message: err.message });
  }
});

// Local mock endpoint serving a sample themes JSON for testing
const path = require("path");
app.get("/api/get-themes/local", (req, res) => {
  try {
    const filePath = path.join(__dirname, "localThemes.json");
    return res.sendFile(filePath);
  } catch (err) {
    console.error("local themes error", err);
    return res.status(500).json({ error: "local_error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
