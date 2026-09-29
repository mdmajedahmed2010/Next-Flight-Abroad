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
    <footer className="bg-[#070b16] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-red-500/20">
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
                <span className="bg-red-500/20 text-rose-300 border border-red-400/30 px-2.5 py-1 rounded-full">
                  ★ Study in JAPAN - Start Your Future Today
                </span>
                <span className="bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-1 rounded-full">
                  ★ Japanese N5/N4 Batch Open
                </span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full">
                  ★ 28 hrs/week Legal Work Rights
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                  ★ SSW Technical Work Visas
                </span>
              </div>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Japan Intakes & Japanese Language Batches
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified alerts on April/October Japan intakes, Japanese N5/N4 batch schedules, SSW career fairs, and visa deadlines.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to OneTech Education updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
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
                Featured Programs & Pathways
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "japan" }} className="hover:text-rose-300 transition-colors flex items-center gap-1.5 font-bold text-white">
                    <span className="text-[#dc2626]">›</span>
                    <span>Study in Japan 🇯🇵 (Official Flagship · Language Schools)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-rose-300 transition-colors flex items-center gap-1.5 text-rose-300 font-semibold">
                    <span className="text-[#dc2626]">›</span>
                    <span>Japanese Language Course N5 (JLPT/NAT 5Q Prep)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-rose-300 transition-colors flex items-center gap-1.5 text-rose-300 font-semibold">
                    <span className="text-[#dc2626]">›</span>
                    <span>Japanese Language Course N4 (Elementary & SSW)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-rose-300 transition-colors flex items-center gap-1.5 text-rose-300 font-semibold">
                    <span className="text-[#dc2626]">›</span>
                    <span>SSW Work Visa & Job Placement (Tokutei Ginou)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "uk" }} className="hover:text-rose-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#dc2626]">›</span>
                    <span>Study in United Kingdom 🇬🇧 (1-Yr Masters & 2-Yr PSW)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "malaysia" }} className="hover:text-rose-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#dc2626]">›</span>
                    <span>Study in Malaysia 🇲🇾 (Dual UK/AUS Degrees)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "australia" }} className="hover:text-rose-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#dc2626]">›</span>
                    <span>Study in Australia 🇦🇺 (Subclass 500 & PSW)</span>
                  </Link>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <Link to="/services" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5">
                    <span>★</span>
                    <span>IELTS & Spoken English Program (English Track)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Verified Offices & Contact */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Principal Headquarters & Contacts
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-base text-[#dc2626] shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-white text-xs">
                      {company.offices.headquarters.name}
                    </div>
                    <div className="text-[0.72rem] text-slate-300 mt-1 leading-relaxed">
                      {company.address.full}
                    </div>
                    <div className="text-[0.68rem] text-rose-300 font-medium mt-1">
                      Near Mirpur-10 Metro Rail Station · Dhaka-1216
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-[0.73rem]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <IconPhone className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                    <span className="font-bold text-white">Hotlines:</span>
                    <a href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`} className="hover:text-rose-300 font-semibold">
                      {company.phones[0]}
                    </a>
                    <span>·</span>
                    <a href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`} className="hover:text-rose-300 font-semibold">
                      {company.phones[1]}
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
                    <span className="text-[#dc2626]">✉</span>
                    <span className="font-bold text-white">Email:</span>
                    <a href={`mailto:${company.email}`} className="hover:text-rose-300">
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

              {/* Multi-Facility Tags */}
              <div className="text-[0.7rem] text-slate-400 space-y-1">
                <div><strong>Facilities:</strong> Mirpur-10 HQ · Japanese Multimedia Studio · Tokyo Student Welfare Desk</div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 hover:bg-[#dc2626] px-3.5 py-1.5 text-xs font-bold text-white transition-colors flex items-center gap-1.5 border border-white/15"
                >
                  <span>Facebook Page (@OneTechEducation)</span>
                  <span className="text-[0.65rem]">↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-slate-400">
          <div>
            © {new Date().getFullYear()} {company.name}. All rights reserved. {company.slogan}.
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
