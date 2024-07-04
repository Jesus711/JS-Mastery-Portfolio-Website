/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: isProduction ? "/Portfolio-Website" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
};

export default nextConfig;
