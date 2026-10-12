/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Allows hosting at either a GitHub Pages subpath (e.g. /terrain-study/) or root
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
