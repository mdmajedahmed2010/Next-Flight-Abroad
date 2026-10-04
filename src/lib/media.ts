/**
 * NEXT FLIGHT ABROAD — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /logo.jpg
 *  - Official Cover Banner: /banner.jpg
 *  - Official Facebook Page: https://www.facebook.com/nextflightabroad/
 *  - Head Office: 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219, Bangladesh (Beside Ansar Head Office, Khilgaon)
 *  - Hotlines: +880 1568-019270 · +880 1903-152643 · +880 1843-376714 · +880 1705-614388
 *  - Email: nextflightabroad@gmail.com
 */

export const mediaUrls: Record<string, string> = {
  // Official Next Flight Abroad Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/banner.jpg",
  "hero-banner": "/banner.jpg",
  "hero-banner-brand": "/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
