/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    localeDetection: true,
  },
};

module.exports = nextConfig;
