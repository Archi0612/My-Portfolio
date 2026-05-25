/**
 * Prefix a /public asset path with the GitHub Pages basePath in production.
 * Use for non-next/image references: resume PDF, OG image, raw <img>, downloads.
 * (next/image and <Link> already prepend basePath automatically.)
 */
export const withBasePath = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
};
