import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles, IconCheck } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function HeroShowcase() {
  const { open } = useRegisterModal();
  const [selectedDest, setSelectedDest] = useState("japan");
  const [selectedIntake, setSelectedIntake] = useState("April 2026 / 2027 (Major 2-Year Track)");
  const [selectedEnglish, setSelectedEnglish] = useState("Enroll in Japanese N5/N4 Academy");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const matchedDestination = destinations.find((d) => d.slug === selectedDest) || destinations[0]!;

  const whatsappHref = () => {
    const text = `Hello ${company.name}!\n\nI want to check my admission and visa eligibility:\n• Target Country: ${matchedDestination.name}\n• Preferred Intake: ${selectedIntake}\n• Language Proficiency: ${selectedEnglish}\n\nPlease connect me with a senior counselor at your Mirpur-10 office for a free assessment.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#070B16] text-white pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pb-32">
      {/* Animated Cinematic Ambient Glow Spheres (Japanese Crimson & Midnight Navy) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-gradient-to-b from-red-600/25 via-rose-500/10 to-transparent blur-[140px]"
      />
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[130px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-10 -right-20 h-[380px] w-[380px] rounded-full bg-red-600/20 blur-[120px]"
      />

      {/* Architectural Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Eyebrow Pill — Double Bezel Hardware Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full p-1 pl-3 pr-2 bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] max-w-full">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-300 truncate">
              STUDY IN JAPAN · START YOUR FUTURE TODAY · N5/N4 BATCH ENROLLMENT OPEN
            </span>
            <span className="rounded-full bg-red-500/25 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-red-300 border border-red-400/30 shrink-0">
              2026/27
            </span>
          </div>
        </motion.div>

        {/* Hero Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 text-center max-w-4xl mx-auto space-y-3 sm:space-y-4"
        >
          <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.1] text-white">
            STUDY IN JAPAN —{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              START YOUR FUTURE
            </span>{" "}
            TODAY
          </h1>

          <p className="font-serif italic text-base sm:text-2xl text-rose-200/90 font-medium tracking-wide">
            &quot;{company.tagline}&quot; — <span className="font-bangla font-normal">{company.taglineBangla}</span>
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Premier Japan higher education & career advisory in Mirpur-10, Dhaka. Direct admissions into top Japanese Language Schools & Universities in <strong>Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka</strong>. Complete <strong>Japanese N5/N4 courses</strong>, <strong>SSW technical work visas</strong>, and <strong>28 hrs/week legal part-time work rights</strong>.
          </p>
        </motion.div>

        {/* Primary CTAs with Button-in-Button Trailing Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-8 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={open}
            className="group w-full xs:w-auto relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 p-1.5 pl-6 pr-2 text-xs sm:text-sm font-bold text-white shadow-[0_12px_32px_rgba(220,38,38,0.4)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(220,38,38,0.6)] cursor-pointer"
          >
            <span>Book Free Japan Consultation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight className="w-4 h-4" />
            </span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="group w-full xs:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white/[0.06] border border-white/15 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
          >
            <IconWhatsApp className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
            <span>Chat on WhatsApp: {company.phones[0]}</span>
          </motion.a>
        </motion.div>

        {/* Double-Bezel Interactive Concierge & Verified Banner Stage */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 lg:mt-16"
        >
          {/* Outer Shell Container */}
          <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-2xl ring-1 ring-white/5">
            {/* Inner Core Container */}
            <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0A1020]/95 border border-white/[0.08] p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
                {/* Left: Interactive Fast-Track Route Dispatcher */}
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-400">
                      <IconSparkles className="w-3.5 h-3.5" />
                      <span>Instant Eligibility & Intake Finder</span>
                    </div>
                    <h2 className="mt-1 font-display text-xl sm:text-3xl font-black text-white">
                      Where Do You Want To Study?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-relaxed">
                      Select Japan or our global partner destinations to immediately check tuition, work rights, and intake deadlines.
                    </p>
                  </div>

                  {/* 1. Destination Country Switcher */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      1. Target Country / Destination
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { slug: "japan", name: "Japan", flag: "🇯🇵", badge: "Flagship / 28h Work" },
                        { slug: "uk", name: "United Kingdom", flag: "🇬🇧", badge: "1-Yr Masters" },
                        { slug: "malaysia", name: "Malaysia", flag: "🇲🇾", badge: "Dual Degree" },
                        { slug: "australia", name: "Australia", flag: "🇦🇺", badge: "Post-Study Work" },
                      ].map((d) => {
                        const active = selectedDest === d.slug;
                        return (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            key={d.slug}
                            type="button"
                            onClick={() => setSelectedDest(d.slug)}
                            className={`p-2.5 sm:p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer min-w-0 ${
                              active
                                ? "bg-red-500/20 border-red-500/80 text-white ring-1 ring-red-500/40 shadow-sm"
                                : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-base shrink-0">{d.flag}</span>
                              <span className="text-xs font-bold truncate">{d.name}</span>
                            </div>
                            <span className="block text-[10px] text-red-300/90 font-medium mt-1 truncate">
                              {d.badge}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Intake & Japanese / English Status Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        2. Target Intake
                      </label>
                      <select
                        value={selectedIntake}
                        onChange={(e) => setSelectedIntake(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-xs font-bold text-white outline-none focus:border-red-500 transition-colors cursor-pointer"
                      >
                        <option value="April 2026 / 2027 (Major 2-Year Track)" className="bg-slate-900 text-white">April (Major 2-Year Track)</option>
                        <option value="July 2026 (1.75-Year Track)" className="bg-slate-900 text-white">July (1.75-Year Track)</option>
                        <option value="October 2026 (Major 1.5-Year Track)" className="bg-slate-900 text-white">October (Major 1.5-Year Track)</option>
                        <option value="January 2027 (1.25-Year Track)" className="bg-slate-900 text-white">January (1.25-Year Track)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        3. Language Proficiency Status
                      </label>
                      <select
                        value={selectedEnglish}
                        onChange={(e) => setSelectedEnglish(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-xs font-bold text-white outline-none focus:border-red-500 transition-colors cursor-pointer"
                      >
                        <option value="Enroll in Japanese N5/N4 Academy" className="bg-slate-900 text-white">Enroll in OneTech N5/N4 Academy (Mirpur-10)</option>
                        <option value="Have JLPT N5 / NAT-TEST 5Q Score" className="bg-slate-900 text-white">Have JLPT N5 / NAT-TEST 5Q Score</option>
                        <option value="Have JLPT N4 / N3 (SSW Work Visa)" className="bg-slate-900 text-white">Have JLPT N4 / N3 (SSW Work Ready)</option>
                        <option value="English Track (Have IELTS Score)" className="bg-slate-900 text-white">English Degree Track (Have IELTS Score)</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Country Preview Card with Smooth AnimatePresence */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={matchedDestination.slug}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl bg-white/[0.03] border border-white/10 p-3.5 sm:p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{matchedDestination.flag}</span>
                          <span className="text-xs sm:text-sm font-bold text-white">
                            Study in {matchedDestination.name}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5">
                          99%+ COE & Visa Success
                        </span>
                      </div>

                      {/* Responsive Facts Grid — Guaranteed Zero Overflow on Mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5 flex sm:flex-col justify-between sm:justify-center items-center text-left sm:text-center">
                          <span className="text-[11px] sm:text-[10px] text-slate-400">Avg. Tuition:</span>
                          <strong className="text-red-400 font-bold text-xs sm:text-sm mt-0 sm:mt-0.5 truncate max-w-[170px] sm:max-w-none">{matchedDestination.avgTuition}</strong>
                        </div>
                        <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5 flex sm:flex-col justify-between sm:justify-center items-center text-left sm:text-center">
                          <span className="text-[11px] sm:text-[10px] text-slate-400">Work Rights:</span>
                          <strong className="text-slate-200 font-bold text-xs sm:text-sm mt-0 sm:mt-0.5 truncate max-w-[170px] sm:max-w-none">28 hrs/week (Legal)</strong>
                        </div>
                        <div className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5 flex sm:flex-col justify-between sm:justify-center items-center text-left sm:text-center">
                          <span className="text-[11px] sm:text-[10px] text-slate-400">Language Academy:</span>
                          <strong className="text-emerald-400 font-bold text-xs sm:text-sm mt-0 sm:mt-0.5">
                            N5/N4 Batches Open ✓
                          </strong>
                        </div>
                      </div>

                      <div className="pt-1">
                        <motion.a
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          href={whatsappHref()}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary w-full text-center text-xs py-2.5 font-bold cursor-pointer rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-none"
                        >
                          <IconWhatsApp className="w-4 h-4" />
                          <span>Apply / Check Japan Eligibility on WhatsApp</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right: Verified Success Banner Wall (Official Asset Spotlight) */}
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
                    <img
                      src="/banner.png"
                      alt="OneTech Education official study in Japan banner"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer max-h-[340px] sm:max-h-none"
                      onClick={() => setLightboxOpen(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-rose-300 font-bold block text-xs">
                          ★ Official OneTech Banner
                        </span>
                        <span className="text-[10px] text-slate-300">
                          Study in Japan · N5/N4 Courses · Click to enlarge
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        className="rounded-lg bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 text-[11px] font-bold backdrop-blur-md cursor-pointer transition-colors"
                      >
                        🔍 Enlarge
                      </button>
                    </div>
                  </div>

                  {/* 2 Pillars Under Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-white/[0.04] p-3 border border-white/10 flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold text-[11px]">Japanese Language Academy</strong>
                        <span className="text-[10px] text-slate-300">JLPT / NAT N5 & N4 multimedia batches</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 border border-white/10 flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold text-[11px]">Mirpur-10 Principal Office</strong>
                        <span className="text-[10px] text-slate-300">Gemcon EL Mercado (Lift-09, Shop 114)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Official Banner */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-900 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/banner.png"
                alt="OneTech Education official study in Japan banner"
                className="max-h-[75vh] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain mx-auto"
              />
              <div className="p-3 text-center">
                <p className="text-xs sm:text-sm font-bold text-white">
                  OneTech Education — Official Study in Japan & Language Academy Banner
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  &quot;Connecting Possibilities&quot; · Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold hover:bg-white/40 cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
