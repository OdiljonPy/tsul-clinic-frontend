/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["192.168.100.94"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "192.168.100.94",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
