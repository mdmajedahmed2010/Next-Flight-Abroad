import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company, destinationsData, academyCourses } from "@/lib/site-data";
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
    <footer className="bg-[#070B16] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-white/10">
      {/* Subtle Radial Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

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
                {company.subheadline}
              </p>

              {/* Verified USPs Strip */}
              <div className="flex flex-wrap gap-2 text-[0.7rem] font-bold">
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full">
                  ★ "No Visa, No Payment" Model
                </span>
                <span className="bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-1 rounded-full">
                  ★ South Korea & Greece Specialist
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                  ★ IELTS Band 7.5+ Masterclass
                </span>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-1 rounded-full">
                  ★ Spoken English & Kids Phonics
                </span>
              </div>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Overseas Admissions & Scholarships
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified alerts on South Korea (Kyungsung University), Greece, UK, USA, Canada, and Australia intakes, plus language batch updates.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to Next Flight Abroad updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
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
                Study Abroad & Courses
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "south-korea" }} className="hover:text-blue-300 transition-colors flex items-center gap-1.5 font-bold text-white">
                    <span className="text-blue-400">›</span>
                    <span>Study in South Korea (Kyungsung University, Busan)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "greece" }} className="hover:text-rose-300 transition-colors flex items-center gap-1.5 text-rose-300 font-semibold">
                    <span className="text-rose-400">›</span>
                    <span>Study in Greece (100% Risk Free, No IELTS)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "malta" }} className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-blue-300 font-semibold">
                    <span className="text-blue-400">›</span>
                    <span>Study in Malta (Schengen Europe & Work Rights)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "uk" }} className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300">
                    <span className="text-blue-400">›</span>
                    <span>Study in UK (2-Year Graduate Route PSW)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "usa" }} className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300">
                    <span className="text-blue-400">›</span>
                    <span>Study in USA (3-Year STEM OPT & Scholarships)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <span className="text-emerald-400">›</span>
                    <span>IELTS Academic Masterclass (Band 7.5+)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                    <span className="text-amber-400">›</span>
                    <span>Spoken English & Fluency Studio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-purple-300 transition-colors flex items-center gap-1.5 text-purple-300 font-semibold">
                    <span className="text-purple-400">›</span>
                    <span>Kids English & Junior Phonics (Ages 5-14)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300">
                    <span className="text-blue-400">›</span>
                    <span>Upcoming Batches & Scholarship Waivers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300">
                    <span className="text-blue-400">›</span>
                    <span>About Next Flight Abroad & Founders</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Contact Details & Central Office */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Khilgaon Central Office
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 text-sm mt-0.5">📍</span>
                  <div>
                    <div className="text-white font-bold text-xs">Next Flight Abroad Central Hub</div>
                    <div className="text-slate-300 text-[0.73rem] leading-relaxed mt-0.5">
                      {company.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                  <span className="text-blue-400 text-sm mt-0.5">📞</span>
                  <div>
                    <div className="text-white font-bold text-xs">Official Hotlines</div>
                    <div className="text-slate-300 text-[0.73rem] space-y-0.5 mt-0.5">
                      <div>Primary: <a href={`tel:${company.phones[0]}`} className="hover:text-blue-400 font-bold">{company.phones[0]}</a></div>
                      <div>Secondary: <a href={`tel:${company.phones[1]}`} className="hover:text-blue-400">{company.phones[1]}</a></div>
                      <div>Inquiries: <a href={`tel:${company.phones[2]}`} className="hover:text-blue-400">{company.phones[2]}</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                  <span className="text-emerald-400 text-sm">💬</span>
                  <div className="text-[0.73rem] text-slate-300">
                    <span>WhatsApp: </span>
                    <a
                      href={company.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      {company.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                  <span className="text-blue-400 text-sm">✉️</span>
                  <div className="text-[0.73rem] text-slate-300">
                    <span>Email: </span>
                    <a href={`mailto:${company.email}`} className="text-blue-300 hover:underline">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[0.7rem] text-slate-400">
                  <span>Visiting Hours: {company.hours}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex gap-2">
                <a
                  href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                  className="flex-1 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 py-2.5 text-center font-bold text-xs text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconPhone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Office</span>
                </a>
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-center font-bold text-xs text-white transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30"
                >
                  <IconWhatsApp className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] text-slate-400">
          <div>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">
              Company Credentials
            </Link>
            <span>•</span>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Facebook Page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
