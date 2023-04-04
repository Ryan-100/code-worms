/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
