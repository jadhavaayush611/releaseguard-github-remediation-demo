const fs = require("node:fs");
const path = require("node:path");

const requiredFiles = [
  path.join(__dirname, "..", "src", "config.js"),
  path.join(__dirname, "..", "src", "index.js")
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Missing required source file: ${file}`);
}

console.log("Build validation passed.");
