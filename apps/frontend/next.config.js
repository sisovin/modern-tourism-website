const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['some-module']);

module.exports = withPlugins([withTM], {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
