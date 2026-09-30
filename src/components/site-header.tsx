import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { company, navItems, destinations, courses } from "@/lib/site-data";
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
      {/* 1. Global Top Bar */}
      <div className="bg-[#0b1120] text-white text-xs py-2 relative z-50 border-b border-cyan-500/20">
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Left: Direct Phone & Hotlines */}
          <div className="flex items-center gap-3 sm:gap-4 text-[0.73rem] sm:text-xs">
            <a
              href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-slate-100 hover:text-[#0098da] transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-amber-400" />
              <span>{company.phones[0]}</span>
            </a>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <a
              href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
              className="hidden xs:flex items-center gap-1 text-slate-300 hover:text-[#0098da] transition-colors"
            >
              <span>{company.phones[1]}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[0.68rem] bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
              ✨ Computer-Delivered IELTS Lab · Cash Prizes for Band 7+ · IDP Partner
            </span>
          </div>

          {/* Right: Office Location & Motto */}
          <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem] text-slate-300">
            <span className="text-amber-400">📍</span>
            <span className="truncate">Azir Market (2nd Floor), Inner College Road, Beanibazar, Sylhet</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-amber-300 font-bold text-[0.68rem] bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
              ★ GET READY FOR THE WORLD
            </span>
          </div>
        </div>
      </div>

      {/* 2. Clean Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_25px_rgb(0,0,0,0.06)] py-2.5 sm:py-3"
            : "bg-white border-b border-slate-200/80 py-3 sm:py-3.5",
        )}
      >
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Brand Logo with Tagline */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <BrandLogo size={46} withText textClassName="flex" />
            <div className="hidden xl:block h-6 w-px bg-slate-200" />
            <span className="hidden xl:inline text-xs font-extrabold text-[#0098da] tracking-wider uppercase">
              IELTS, SPOKEN & STUDY ABROAD HUB
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDest = item.label.includes("Study") || item.label.includes("Destinations");
              const isCourses = item.label.includes("Courses") || item.label.includes("Academy") || item.label.includes("Services");

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
                      className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-cyan-50 hover:text-[#0098da] transition-colors whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.65rem] opacity-50">▾</span>
                    </Link>

                    {/* Mega Dropdown for Study Abroad Destinations */}
                    {isDest && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[580px] rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Study Destinations & Visas
                          </span>
                          <span className="text-[0.7rem] text-cyan-800 font-bold bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                            🇬🇧 UK · 🇨🇦 Canada · 🇺🇸 USA · 🇦🇺 Australia · 🇪🇺 Europe
                          </span>
                        </div>
                        {destinations.slice(0, 8).map((d: any) => (
                          <Link
                            key={d.slug}
                            to="/study-in-{$country}"
                            params={{ country: d.slug }}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-cyan-50/80 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-xl shrink-0 mt-0.5">{d.flag}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#0098da] flex items-center gap-1.5">
                                <span>{d.country || d.name}</span>
                                <span className="text-[0.6rem] bg-cyan-100 text-cyan-800 px-1.5 py-0.2 rounded font-semibold truncate max-w-[130px]">
                                  {d.slug === "uk" ? "Top Choice" : "Featured"}
                                </span>
                              </div>
                              <p className="text-[0.7rem] text-slate-500 truncate max-w-[210px]">
                                {d.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link
                            to="/destinations"
                            className="font-bold text-[#0098da] hover:text-[#0284c7] flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Explore all destination pathways</span>
                            <span>→</span>
                          </Link>
                          <span className="text-[0.7rem] text-slate-400 font-medium">
                            Milestone Beanibazar · Inner College Road
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Dropdown for Language Academy & IELTS Courses */}
                    {isCourses && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[480px] rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 grid grid-cols-1 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Language Academy & Test Prep
                          </span>
                          <span className="text-[0.7rem] text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            IELTS · Spoken English · Kids · CD Mock Lab
                          </span>
                        </div>
                        {courses.map((c: any) => (
                          <Link
                            key={c.slug}
                            to="/services"
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-cyan-50/80 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-lg shrink-0">🎓</span>
                              <div className="truncate">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#0098da] block truncate">
                                  {c.title}
                                </span>
                                <span className="text-[0.68rem] text-slate-500 block truncate">
                                  {c.duration} · {c.targetScore || c.level}
                                </span>
                              </div>
                            </div>
                            <span className="text-[0.65rem] bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded-full shrink-0">
                              {c.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Standard Dropdown for Other Links */}
                    {!isDest && !isCourses && activeDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 w-64 rounded-2xl bg-white p-2 shadow-xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children?.map((child: any) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            params={child.params}
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-cyan-50 hover:text-[#0098da] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="text-[0.65rem] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-cyan-50 hover:text-[#0098da] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp & Free Assessment Modal */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Milestone Beanibazar! I would like to inquire about IELTS preparation, Spoken English, and study abroad services.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3.5 py-2 rounded-full transition-colors active:scale-95 shadow-sm"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => open()}
              className="btn-primary text-xs py-2 px-4 sm:px-5 shadow-sm active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer bg-gradient-to-r from-[#0098da] to-blue-600 hover:from-[#0284c7] hover:to-blue-700 text-white border-none rounded-full"
            >
              <span>Free Consultation</span>
              <span>→</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Framer Motion Spring */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto lg:hidden"
              >
                {/* Drawer Header */}
                <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                  <BrandLogo size={38} withText />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                {/* Nav Links */}
                <div className="p-4 space-y-4 flex-1">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.label} className="border-b border-slate-100 pb-2 mb-2">
                        <Link
                          to={item.to}
                          className="block px-2 py-2 text-sm font-extrabold text-[#0b1120] hover:text-[#0098da]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <div className="pl-3 space-y-1 mt-1">
                            {item.children.slice(0, 6).map((child: any) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                params={child.params}
                                className="flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0098da] hover:bg-cyan-50 rounded-lg"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="text-[0.62rem] bg-cyan-100 text-cyan-800 px-1.5 py-0.5 rounded font-bold">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Hotlines & Campus Location in Drawer */}
                  <div className="rounded-2xl bg-cyan-50/80 border border-cyan-200 p-3.5 space-y-2">
                    <span className="text-[0.7rem] font-black uppercase tracking-wider text-cyan-800 block">
                      Beanibazar Main Campus
                    </span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet.
                    </p>
                    <p className="text-[0.72rem] text-slate-500 font-bangla">
                      আইইএলটিএস, স্পোকেন ও স্টাডি অ্যাব্রড বিষয়ক ফ্রি কাউন্সেলিংয়ের জন্য সরাসরি চলে আসুন।
                    </p>
                  </div>
                </div>

                {/* Drawer Footer Actions */}
                <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
                  <a
                    href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#0b1120] rounded-xl shadow-xs"
                  >
                    <IconPhone className="w-4 h-4 text-amber-400" />
                    <span>Call Hotline: {company.phones[0]}</span>
                  </a>

                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      "Hello Milestone Beanibazar! I am inquiring from the website mobile menu.",
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-xs"
                  >
                    <IconWhatsApp className="w-4 h-4 text-white" />
                    <span>Chat on WhatsApp ({company.whatsappFormatted})</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      open();
                    }}
                    className="w-full py-2.5 text-xs font-extrabold text-white bg-[#0098da] hover:bg-[#0284c7] rounded-xl shadow-sm cursor-pointer"
                  >
                    Book Free Profile Assessment
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
