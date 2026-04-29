// Single source of truth for "links last verified on" dates.
// Bumped whenever the source-URL resolver or the bibliography is reviewed.

export const SITE_VERIFIED_AT = "2026-04-29";

export function verifiedTag() {
  return `verified ${SITE_VERIFIED_AT}`;
}
