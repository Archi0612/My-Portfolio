/** @type {import('next').NextConfig} */

// GitHub Pages serves this project site under /My-Portfolio/.
// basePath/assetPrefix are applied ONLY in production so `next dev` works at localhost root.
const isProd = process.env.NODE_ENV === "production";
const repo = "My-Portfolio"; // EXACT casing — GitHub Pages paths are case-sensitive.

const nextConfig = {
  output: "export", // static HTML/CSS/JS into ./out
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // emit /section/index.html — robust on GitHub Pages
  images: {
    unoptimized: true, // required: no image optimizer on a static host
  },
  env: {
    // exposed to client code (e.g. withBasePath helper, resume/OG links)
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
