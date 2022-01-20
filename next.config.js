/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = { fs: false, path: false };

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { prettier: true, typescript: true } }]
    });

    return config;
  },
  images: {
    domains: ['digitaleverkenning.pelckmans.be'],
    loader: 'custom'
  }
};
