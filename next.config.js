/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.modules.push(__dirname);
        return config;
      },
}

module.exports = nextConfig
