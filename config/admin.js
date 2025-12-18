// config/admin.js
module.exports = ({ env }) => ({
  auth: {
    secret:
      env("ADMIN_AUTH_SECRET") ||
      env("ADMIN_JWT_SECRET") ||
      env("JWT_SECRET"),
  },

  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
