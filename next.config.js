/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ['localhost'],
    unoptimized:true,
  },
}

module.exports = nextConfig
