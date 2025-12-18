export default ({ env }) => {
  const rawKeys = env("APP_KEYS", "");
  const keys = rawKeys
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  if (keys.length < 2) {
    throw new Error(
      "APP_KEYS must contain at least 2 comma-separated values (set APP_KEYS in Render)."
    );
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: { keys },
  };
};
