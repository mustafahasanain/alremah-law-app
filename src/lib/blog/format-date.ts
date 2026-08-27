/**
 * Formats a Frappe `published_on` value (e.g. "2026-01-15") into a
 * human-readable Arabic date string.
 *
 * Uses `Intl.DateTimeFormat` (no extra date library — the project already
 * has `date-fns`, but a fixed-locale date format doesn't need it) and
 * formats deterministically so server and client render the exact same
 * string, avoiding hydration mismatches. Not a Client/Server Component
 * concern either way since this has no 'use client' — call it from Server
 * Components so the formatting happens once, on the server.
 */
export function formatBlogDate(dateString: string | null | undefined): string | null {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat('ar', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
