const { API_KEY } = require("./config");

function getApiKeyStatus() {
  return API_KEY ? "configured" : "missing";
}

module.exports = { getApiKeyStatus };
