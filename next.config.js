/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGOURI:
      'mongodb+srv://ahim:got@got-cards.vhhqyod.mongodb.net/?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
