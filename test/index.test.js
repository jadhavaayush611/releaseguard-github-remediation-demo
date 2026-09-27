const test = require("node:test");
const assert = require("node:assert/strict");
const { getApiKeyStatus } = require("../src");

test("reports API key configuration status", () => {
  assert.equal(getApiKeyStatus(), "configured");
});
