/**
 * ABROAD BLUEPRINT — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /assets/abroad-blueprint-logo.jpg (3D emblem with royal blue 'A', golden yellow 'B' with graduation cap, "ABROAD BLUEPRINT", "START HERE, GO ANYWHERE!")
 *  - Official Cover Banner: /assets/abroad-blueprint-banner.jpg (World landmarks, hotline 8801961532479, Chittagong office address)
 *  - Verified Visa Success 1: /assets/visa-success-nobin.jpg (Nobin Siddiky, Anglia Ruskin University Cambridge, PhD Management, Dependent Visa)
 *  - Verified Visa Success 2: /assets/visa-success-ima.jpg (Mst. Ima Khatun, University of Greenwich London, MRes Chemistry, Dependent Visa)
 *  - Official Facebook Page: https://www.facebook.com/AbroadBlueprint/
 *  - Head Office: 4091, CJKS Shopping Complex (3rd Floor), Kazir Dewri, Chittagong-4000, Bangladesh
 *  - UK Office: 17, Woodgate, Birmingham, United Kingdom
 *  - Hotlines: +880 1961-532479 · +880 1643-829960 · +880 1302-092490 · +880 1616-338613 · +44 7587 358080
 *  - Email: abroadblueprint@gmail.com
 *  - Accreditation: British Council Certified Agent
 */

export const mediaUrls: Record<string, string> = {
  // Official Abroad Blueprint Brand Assets
  logo: "/assets/abroad-blueprint-logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/assets/abroad-blueprint-banner.jpg",
  "hero-banner": "/assets/abroad-blueprint-banner.jpg",
  "hero-banner-brand": "/assets/abroad-blueprint-banner.jpg",
  "visa-nobin": "/assets/visa-success-nobin.jpg",
  "visa-ima": "/assets/visa-success-ima.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/assets/abroad-blueprint-logo.jpg";
}

