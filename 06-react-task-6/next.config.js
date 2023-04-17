/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BOOK_API_KEY: 'AIzaSyBKIBvF9extx_Ep9IShi--PFGnSWhM3zo4',
  },
  images: {
    domains: ['books.google.com'],
  },
};

module.exports = nextConfig;
