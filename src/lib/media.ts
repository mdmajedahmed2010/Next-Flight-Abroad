/**
 * NEXTFLIGHT BD — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /assets/nextflight-logo.jpg (Navy & Sky Blue typography with airplane flight arc, "nextflight BD")
 *  - Official Cover Banner: /assets/nextflight-banner.jpg (Nextflight BD - আপনার ভ্রমণের সাথী, traveler, globe, airplane, clouds)
 *  - Official Facebook Page: https://www.facebook.com/nextflightbd26/
 *  - Head Office: Razzak Plaza, 383 (Lift-12), Moghbazar, Dhaka-1217, Bangladesh
 *  - Hotlines: +880 1711-253602 · 01911-928159 · 01756-251900 · 01941-318665 · 01785-250347 · 01339771499
 *  - Email: shahinalammuna@gmail.com
 *  - YouTube: https://www.youtube.com/@NextFlightBD
 */

export const mediaUrls: Record<string, string> = {
  // Official NextFlight BD Brand Assets
  logo: "/assets/nextflight-logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/assets/nextflight-banner.jpg",
  "hero-banner": "/assets/nextflight-banner.jpg",
  "hero-banner-brand": "/assets/nextflight-banner.jpg",
  "visa-nobin": "/assets/visa-success-nobin.jpg",
  "visa-ima": "/assets/visa-success-ima.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/assets/nextflight-logo.jpg";
}

