const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    ELASTICEMAIL_API_KEY:
      'C0CDBD5C0C5D8897996B42896B4D114261AB18016D15369BE3DD61081BA0B3E3BF8BF2E1AE11F840307C23F1711B5C61',
    EMAIL_FROM: 'jesusgy_extra@outlook.com',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
