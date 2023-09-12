/** @type {import('next').NextConfig} */

const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['ui'],
  compiler: {
    emotion: true,
  },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
  text.includes('Duplicate atom key') ? '' : text,
);
