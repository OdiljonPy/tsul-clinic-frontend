/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.tsulclinic.uz"],
    remotePatterns: [
      {
        protocol: "https",
        port: "8000",
        hostname: "api.tsulclinic.uz",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
