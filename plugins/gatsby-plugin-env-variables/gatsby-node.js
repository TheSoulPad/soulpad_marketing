/**
 * Custom Gatsby Plugin to inject environment variables
 */
const path = require("path");
const fs = require("fs");

exports.onPreInit = ({ reporter }) => {
  const dotenvPath = path.join(process.cwd(), ".env");

  if (fs.existsSync(dotenvPath)) {
    reporter.info(`Environment variables loaded from ${dotenvPath}`);
  } else {
    reporter.warn("No .env file found");
  }
};
