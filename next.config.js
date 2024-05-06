const withNextIntl = require('next-intl/plugin')();
const webpack = require('webpack');

const { parsed: myEnv } = require('dotenv').config({});

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ hostname: 'firebasestorage.googleapis.com', protocol: 'https' }]
  }
});
