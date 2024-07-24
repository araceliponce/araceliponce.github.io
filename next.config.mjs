/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    missingSuspenseWithCSRBailout: false
  },

  // basePath: "/",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

};

export default nextConfig;


/* 
https://github.com/vercel/next.js/issues/61697
 */