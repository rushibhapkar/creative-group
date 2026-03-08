/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // <--- Essential for GitHub Pages
  images: {
    unoptimized: true,   // <--- GitHub Pages doesn't support Next.js Image Optimization API
  },
  // Optional: If your repo name is NOT "username.github.io" (e.g., "creative-group-site")
  // basePath: '/creative-group-site', 
};

export default nextConfig;