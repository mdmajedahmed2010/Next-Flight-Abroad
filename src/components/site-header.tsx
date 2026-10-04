import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { company, navigationItems, destinationsData, academyCourses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { open } = useRegisterModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="w-full">
      {/* 1. Global Top Notification Bar */}
      <div className="bg-[#0B132B] text-white text-xs py-2 relative z-50 border-b border-blue-500/20">
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Left: Direct Phone & Hotlines */}
          <div className="flex items-center gap-3 sm:gap-4 text-[0.73rem] sm:text-xs">
            <a
              href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-slate-100 hover:text-blue-300 transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-blue-400" />
              <span>Hotline: {company.phones[0]}</span>
            </a>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <a
              href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
              className="hidden xs:flex items-center gap-1 text-slate-300 hover:text-blue-300 transition-colors"
            >
              <span>{company.phones[1]}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[0.68rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
              ★ "No Visa, No Payment" Contract Guarantee · Zero Advance Risk
            </span>
          </div>

          {/* Right: Office Location & WhatsApp */}
          <div className="flex items-center gap-3 text-[0.7rem] sm:text-[0.75rem] text-slate-200">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-rose-400">📍</span>
              <span className="truncate">338/14 Khilgaon (Beside Ansar Head Office), Dhaka</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
            >
              <IconWhatsApp className="w-3.5 h-3.5" />
              <span>WhatsApp Active</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 w-full",
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] py-2.5 sm:py-3 text-white"
            : "bg-[#070B16] border-b border-white/10 py-3 sm:py-3.5 text-white",
        )}
      >
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Brand Logo with Tagline */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <BrandLogo size={46} withText variant="dark" textClassName="flex" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navigationItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDest = item.label.includes("Study") || item.label.includes("Destinations");
              const isCourses = item.label.includes("Academy") || item.label.includes("Language");

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.65rem] opacity-60">▾</span>
                    </Link>

                    {/* Mega Dropdown for Study Abroad Destinations */}
                    {isDest && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] rounded-2xl bg-slate-900 p-4 shadow-2xl border border-white/15 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                            Global Study Destinations
                          </span>
                          <span className="text-[0.7rem] text-blue-300 font-bold bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30">
                            🇰🇷 South Korea · 🇬🇷 Greece · 🇲🇹 Malta · 🇬🇧 UK · 🇺🇸 USA
                          </span>
                        </div>
                        {destinationsData.map((d) => (
                          <Link
                            key={d.slug}
                            to="/study-in-{$country}"
                            params={{ country: d.slug }}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-xl shrink-0 mt-0.5">{d.flag}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1.5">
                                <span>{d.name}</span>
                                <span className="text-[0.6rem] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.2 rounded font-semibold truncate max-w-[130px]">
                                  {d.slug === "south-korea" ? "Flagship Partner" : d.slug === "greece" ? "100% Risk Free" : "Featured"}
                                </span>
                              </div>
                              <p className="text-[0.7rem] text-slate-400 truncate max-w-[220px]">
                                {d.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                          <Link
                            to="/destinations"
                            className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>View all countries & university admissions</span>
                            <span>→</span>
                          </Link>
                          <span className="text-[0.7rem] text-slate-400 font-medium">
                            Next Flight Abroad · Khilgaon, Dhaka
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Mega Dropdown for Language Academy */}
                    {isCourses && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[560px] rounded-2xl bg-slate-900 p-4 shadow-2xl border border-white/15 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                            Language & Fluency Academy
                          </span>
                          <span className="text-[0.7rem] text-emerald-300 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                            IELTS · Spoken English · Kids English
                          </span>
                        </div>
                        {academyCourses.map((c) => (
                          <Link
                            key={c.id}
                            to="/services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="h-8 w-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300 shrink-0 mt-0.5">
                              {c.id.includes("ielts") ? "7.5+" : c.id.includes("kids") ? "Kids" : "Fluency"}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1.5">
                                <span className="truncate">{c.title}</span>
                              </div>
                              <p className="text-[0.7rem] text-slate-400 truncate max-w-[210px]">
                                {c.duration}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                          <Link
                            to="/services"
                            className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Explore all courses & batch timings</span>
                            <span>→</span>
                          </Link>
                          <span className="text-[0.7rem] text-slate-400 font-medium">
                            Free Diagnostic Assessment Available
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full px-3 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 px-3.5 py-2 text-xs font-bold transition-all"
            >
              <IconWhatsApp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Assessment CTA Button */}
            <button
              type="button"
              onClick={open}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-black text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Free Assessment</span>
              <span className="text-sm">✈️</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-slate-900 border-l border-white/10 p-5 overflow-y-auto text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <BrandLogo size={40} withText variant="dark" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Verified Contract Notice */}
              <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-3 mb-4 text-xs text-blue-300">
                <span className="font-bold">★ "No Visa, No Payment" Model:</span>
                <p className="text-[0.7rem] text-slate-300 mt-1">
                  Pay consultancy service fees strictly after visa approval. Zero advance risk for students!
                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 mb-6">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/destinations"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Study Abroad Destinations
                </Link>

                {/* Sub destinations */}
                <div className="pl-4 space-y-1 my-1">
                  {destinationsData.map((d) => (
                    <Link
                      key={d.slug}
                      to="/study-in-{$country}"
                      params={{ country: d.slug }}
                      className="block px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-blue-300 hover:bg-white/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {d.flag} {d.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Language Academy & Services
                </Link>
                <Link
                  to="/offers"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Upcoming Batches & Offers
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  About Next Flight Abroad
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact & Khilgaon Office
                </Link>
              </div>

              {/* Drawer Actions */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    open();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-sm text-white shadow-lg text-center"
                >
                  Book Free Assessment ✈️
                </button>
                <a
                  href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 font-bold text-xs text-slate-200 hover:bg-white/20"
                >
                  <IconPhone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call {company.phones[0]}</span>
                </a>
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 font-bold text-xs hover:bg-emerald-600/30"
                >
                  <IconWhatsApp className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Office Address Footer */}
              <div className="mt-6 text-[0.68rem] text-slate-400 leading-relaxed text-center">
                <p className="font-bold text-white mb-0.5">Next Flight Abroad Central Office</p>
                <p>338/14, Block-C, Khilgaon, Taltola, Dhaka-1219 (Beside Ansar Head Office)</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
