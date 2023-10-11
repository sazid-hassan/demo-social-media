/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  // experimental:{
  //   optimizeFonts: true,
  //   optimizeImages: true,
  //   // scrollRestoration: true,

  // },
  images: {
    // domains: ["phpstack-924353-3259330.cloudwaysapps.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: false,
    // loaderFile: "./utils/imageLoader.js",
  },
};

module.exports = nextConfig;
