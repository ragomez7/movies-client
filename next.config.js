/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tmdb.org", "themoviedb.org", "image.tmbd.org"]
  }
}

module.exports = nextConfig
