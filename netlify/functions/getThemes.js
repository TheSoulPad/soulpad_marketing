const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": CORS_ORIGIN,
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
      },
      body: "",
    };
  }

  try {
    const params = event.queryStringParameters || {};
    const target = params.url || process.env.TARGET_URL;
    if (!target) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": CORS_ORIGIN },
        body: JSON.stringify({
          error: "target url required (query ?url=...) or set TARGET_URL env",
        }),
      };
    }

    const upstream = await fetch(target, {
      headers: { Accept: "application/json" },
    });
    if (!upstream.ok) {
      return {
        statusCode: 502,
        headers: { "Access-Control-Allow-Origin": CORS_ORIGIN },
        body: JSON.stringify({
          error: "upstream error",
          status: upstream.status,
        }),
      };
    }
    const json = await upstream.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": CORS_ORIGIN },
      body: JSON.stringify(json),
    };
  } catch (err) {
    console.error("fetch error", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": CORS_ORIGIN },
      body: JSON.stringify({ error: "internal_error", message: err.message }),
    };
  }
};
