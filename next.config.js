/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['freepngimg.com', 'cdn.pixabay.com', 'pngimg.com', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
