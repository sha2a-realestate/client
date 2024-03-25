const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  reactStrictMode: true,
  poweredByHeader: false
});
