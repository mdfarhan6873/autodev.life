/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Configure trailing slash
  trailingSlash: true,
  
  // Configure asset prefix for static hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Disable server-side features for static export
  experimental: {
    // Enable static export
  }
}

module.exports = nextConfig