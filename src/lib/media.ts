/**
 * ONETECH EDUCATION (ওয়ানটেক এডুকেশন) — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /logo.jpg (Red circular 'E' emblem & "OneTech EDUCATION", "Connecting Possibilities")
 *  - Official Banner: /banner.png ("Study in JAPAN - Start Your Future Today" · "Enroll in Japanese N5/N4 Language Course")
 *      Featuring Mount Fuji, Torii Gate, Japanese textbooks, students & aircraft
 *  - Official Facebook Page: https://www.facebook.com/OneTechEducation/
 *  - Dhaka Principal Office: Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216
 *  - Hotlines: 01345-918515 · 01345-918516
 *  - Official Email: info@onetecheducation.com
 */

export const mediaUrls: Record<string, string> = {
  // Official OneTech Education Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/banner.png",
  "hero-banner": "/banner.png",
  "hero-banner-brand": "/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
