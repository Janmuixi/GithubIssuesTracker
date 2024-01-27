/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
