/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig

// next.config.js
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};
