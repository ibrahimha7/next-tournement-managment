/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n,
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  }
}

module.exports = nextConfig
