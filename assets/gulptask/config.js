/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  srcPath: path.resolve(__dirname, "../src"),
  outputPath: path.resolve(__dirname, "../dist"),
  assetsUrl: process.env.ASSETS_URL || "",
};
