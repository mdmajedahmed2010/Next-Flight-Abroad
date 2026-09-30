/**
 * MILESTONE BEANIBAZAR / MICU — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /loogo.jpg (Round badge emblem with gold trim, "IELTS", "IELTS LIFE SKILLS", "SPOKEN ENGLISH", stylized green/cyan 'm', "milestone", "GET READY FOR THE WORLD", "MICU", "OFFICIAL PAGE")
 *  - Official Milestone Celebration Gathering Photo: /milestone-celebration.jpg (Giant 3D golden "MILESTONE" sculpture in Beanibazar with 100+ graduates holding certificates)
 *  - Official Facebook Page: https://www.facebook.com/milestonebeanibazar/
 *  - Main Campus: Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet
 *  - Annex Campus: Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet
 *  - Hotlines: 01781-545490 · 01706-452949
 *  - Email: siddikurr806@gmail.com
 */

export const mediaUrls: Record<string, string> = {
  // Official Milestone Beanibazar Brand Assets
  logo: "/loogo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/milestone-celebration.jpg",
  celebration: "/milestone-celebration.jpg",
  "hero-banner": "/milestone-celebration.jpg",
  "hero-banner-brand": "/milestone-celebration.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/loogo.jpg";
}
