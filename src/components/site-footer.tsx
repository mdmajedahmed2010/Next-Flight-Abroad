import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company } from "@/lib/site-data";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0a1c30] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-sky-400/20">
      {/* Subtle Dark Pattern */}
      <div className="absolute inset-0 bg-radial-pattern opacity-10 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-white/10"
        >
          {/* Column 1: Brand Info & Newsletter */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo size={52} withText textClassName="flex text-white" variant="dark" />
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-medium">
                {company.tagline}. {company.bengaliHeadline}
              </p>

              {/* Verified USPs Strip */}
              <div className="flex flex-wrap gap-2 text-[0.7rem] font-bold">
                <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2.5 py-1 rounded-full">
                  ★ Study Abroad Advisory
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                  ★ IELTS Band 7.5+ Studio
                </span>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-1 rounded-full">
                  ★ Spoken English & Kids Phonics
                </span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full">
                  ★ Greek Cyprus 14 Trade Work Permits
                </span>
                <span className="bg-sky-400/20 text-sky-200 border border-sky-400/30 px-2.5 py-1 rounded-full">
                  ★ Worldwide Air Ticketing ✈️
                </span>
              </div>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Overseas Admissions & Work Quotas
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified alerts on UK, European, Canadian intakes, Greek Cyprus trade quotas, Maldives work permits, and new language batches.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to NextFlight BD updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#0099e5] hover:bg-[#0284c7] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Academic & Overseas Services
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li>
                  <Link to="/services" className="hover:text-sky-300 transition-colors flex items-center gap-1.5 font-bold text-white">
                    <span className="text-sky-400">›</span>
                    <span>IELTS Academic & General Training (Band 7.5+)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-sky-300 font-semibold">
                    <span className="text-sky-400">›</span>
                    <span>Spoken English & Fluency Studio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-sky-300 font-semibold">
                    <span className="text-sky-400">›</span>
                    <span>Kids English & Junior Phonics Studio (5-14)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <span className="text-emerald-400">›</span>
                    <span>Greek Cyprus Skill Work Permit 2026 (14 Trades)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <span className="text-emerald-400">›</span>
                    <span>Maldives & Mongolia Work Permit Processing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                    <span className="text-amber-400">›</span>
                    <span>Worldwide Air Ticketing & Tourist Visas ✈️</span>
                  </Link>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <Link to="/study-in-{$country}" params={{ country: "uk" }} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span className="text-sky-400">›</span>
                    <span>Study in United Kingdom 🇬🇧 (Admissions & PSW)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "europe" }} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span className="text-sky-400">›</span>
                    <span>Study in Europe 🇪🇺 (Cyprus, Germany, Malta)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "canada" }} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span className="text-sky-400">›</span>
                    <span>Study in Canada 🇨🇦 (Public DLIs & PGWP)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "usa" }} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span className="text-sky-400">›</span>
                    <span>Study in USA 🇺🇸 (STEM OPT & Scholarships)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "australia" }} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span className="text-sky-400">›</span>
                    <span>Study in Australia 🇦🇺 (CRICOS & Work Rights)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Verified Head Office & Contacts */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Dhaka Head Office & Contacts
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                {/* Bangladesh Head Office */}
                <div className="flex items-start gap-2.5">
                  <span className="text-base text-sky-400 shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-white text-xs">
                      NextFlight BD Head Office (Dhaka)
                    </div>
                    <div className="text-[0.72rem] text-slate-300 mt-1 leading-relaxed">
                      Razzak Plaza, 383 (Lift-12), Moghbazar, Dhaka-1217, Bangladesh
                    </div>
                    <div className="text-[0.68rem] text-sky-300 font-medium mt-1 font-bangla">
                      আপনার ভ্রমণের বিশ্বস্ত সাথী ✈️
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-[0.73rem]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <IconPhone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="font-bold text-white">Hotlines:</span>
                    <a href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`} className="hover:text-sky-300 font-semibold">
                      {company.phones[0]}
                    </a>
                    <span>·</span>
                    <a href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`} className="hover:text-sky-300 font-semibold">
                      {company.phones[1]}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-sky-400 font-bold">Additional:</span>
                    <a href={`tel:${company.phones[2].replace(/[^0-9]/g, "")}`} className="hover:text-sky-300">
                      {company.phones[2]}
                    </a>
                    <span>·</span>
                    <a href={`tel:${company.phones[3].replace(/[^0-9]/g, "")}`} className="hover:text-sky-300">
                      {company.phones[3]}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-bold text-white">WhatsApp:</span>
                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-300 font-semibold"
                    >
                      {company.whatsappFormatted}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-sky-400">✉</span>
                    <span className="font-bold text-white">Email:</span>
                    <a href={`mailto:${company.email}`} className="hover:text-sky-300">
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-amber-400">⏰</span>
                    <span className="font-bold text-white">Hours:</span>
                    <span>{company.hours}</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-600/30 hover:bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white transition-colors flex items-center gap-1.5 border border-blue-400/30"
                >
                  <span>Facebook (@nextflightbd26)</span>
                  <span className="text-[0.65rem]">↗</span>
                </a>
                <a
                  href={company.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600/30 hover:bg-red-600 px-3.5 py-1.5 text-xs font-bold text-white transition-colors flex items-center gap-1.5 border border-red-400/30"
                >
                  <span>YouTube (@NextFlightBD)</span>
                  <span className="text-[0.65rem]">↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-slate-400">
          <div>
            © {new Date().getFullYear()} {company.name} ({company.nativeName}). All rights reserved. {company.slogan}.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
