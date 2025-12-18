export default ({ env }) => {
  // Accept multiple env var names (Render/Strapi version differences)
  const secret =
    env("ADMIN_AUTH_SECRET") ||
    env("STRAPI_ADMIN_AUTH_SECRET") ||
    env("ADMIN_JWT_SECRET") ||
    env("JWT_SECRET");

  if (!secret) {
    throw new Error(
      "Missing admin auth secret. Set ADMIN_AUTH_SECRET (recommended) in Render env vars."
    );
  }

  return {
    auth: { secret },
  };
};
