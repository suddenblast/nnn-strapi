// config/plugins.js
module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret:
        env("USERS_PERMISSIONS_JWT_SECRET") ||
        env("JWT_SECRET") ||
        env("ADMIN_JWT_SECRET"),
    },
  },
});
