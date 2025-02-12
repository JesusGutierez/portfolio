const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
