const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  portalPath: "portal",
  environmentUrl: process.env.URL,
  credentials: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    authority: process.env.AUTHORITY,
    tenantId: process.env.TENANT_ID,
  },
  assets: {
    "main.js": "starter-portal/basic-forms/new-ticket",
  },
};
