/**
 * Normalize a /public asset path (and prefix an optional base path, unset on Vercel).
 * Absolute URLs (e.g. the Google Drive resume link) pass through untouched.
 */
export const withBasePath = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
};
