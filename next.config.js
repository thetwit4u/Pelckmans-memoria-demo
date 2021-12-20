/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { prettier: true, typescript: true } }]
    });

    return config;
  },
  images: {
    domains: ['digitaleverkenning.pelckmans.be']
  }
};
