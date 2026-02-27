/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
      }
    ]
  },



};

export default nextConfig;
