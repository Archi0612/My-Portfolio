/**
 * EmailJS configuration, read from NEXT_PUBLIC_* env vars (inlined at build time).
 * These are public client-side identifiers — safe to ship in a static bundle.
 * Lock down abuse via the EmailJS dashboard domain allowlist.
 */
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const emailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
);
