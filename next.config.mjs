/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
