const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  srcPath: "src",
  portalPath: "portal",
  environmentUrl: process.env.URL,
  credentials: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    authority: process.env.AUTHORITY,
    tenantId: process.env.TENANT_ID,
  },
  assets: {
    "new-ticket.js": "starter-portal/basic-forms/new-ticket",
    "application.js":
      "starter-portal/advanced-forms/application/advanced-form-steps/01---personal-information",
  },
};
