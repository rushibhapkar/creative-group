// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true, // Necessary for static export
//   },
//   // Since your repo is "creative-group", we MUST set the basePath 
//   // so CSS and JS files load from /creative-group/ instead of /
//   basePath: '/creative-group',
//   assetPrefix: '/creative-group', 
  
//   eslint: {
//     // This will fix the "Failed to compile" error by ignoring the apostrophe warnings
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     // Ignores type errors during build for a smoother deployment
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: isProd ? '/creative-group' : '',
//   assetPrefix: isProd ? '/creative-group' : '',

//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = nextConfig
//;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Required for static hosting
  basePath: '',          // Set this to empty for custom domains
  assetPrefix: '',       // Set this to empty as well
  images: {
    unoptimized: true,   // Required for static export
  },
};

module.exports = nextConfig;