import { useState } from "react";
import { company, destinationsData } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles, IconCheck, IconPhone } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function HeroShowcase() {
  const { open } = useRegisterModal();
  const [selectedDest, setSelectedDest] = useState("south-korea");
  const [selectedIntake, setSelectedIntake] = useState("December 2026 & March 2027 Intakes");
  const [selectedService, setSelectedService] = useState("Undergraduate & Postgraduate Degrees");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const matchedDestination =
    destinationsData.find((d) => d.slug === selectedDest) || destinationsData[0]!;

  const whatsappHref = () => {
    const text = `Hello ${company.name}!\n\nI want to check my eligibility for overseas study / language programs:\n• Target Country: ${matchedDestination.name}\n• Preferred Intake: ${selectedIntake}\n• Desired Program: ${selectedService}\n\nPlease connect me with an expert counselor at your Khilgaon Central Office for a free profile assessment.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#070B16] text-white pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pb-32">
      {/* Animated Ambient Glow Spheres (Royal Blue, Crimson Red, Metallic Amber) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[950px] rounded-full bg-gradient-to-b from-blue-600/30 via-indigo-600/15 to-transparent blur-[140px]"
      />
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-rose-600/20 blur-[130px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-10 -right-20 h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Architectural Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full p-1 pl-3.5 pr-2.5 bg-white/[0.08] border border-blue-400/30 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] max-w-full">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-200 truncate">
              STUDY ABROAD · "NO VISA, NO PAYMENT" GUARANTEE · IELTS ACADEMY
            </span>
            <span className="rounded-full bg-rose-500/30 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-rose-200 border border-rose-400/40 shrink-0">
              Khilgaon, Dhaka
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
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] text-white">
            NEXT FLIGHT ABROAD —{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400">
              Fly Towards Your Global Future ✈️
            </span>
          </h1>

          <p className="font-serif italic text-base sm:text-2xl text-blue-200/90 font-medium tracking-wide">
            &quot;{company.tagline}&quot; — 100% Risk-Free Overseas Education & IELTS Academy
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Dhaka's leading international consultancy located at Khilgaon. Specializing in{" "}
            <strong className="text-white">South Korea (Kyungsung University, Busan)</strong>,{" "}
            <strong className="text-white">Greece (100% Risk-Free, No IELTS)</strong>,{" "}
            <strong className="text-white">Malta, UK, USA, Canada & Australia</strong>, backed by our signature{" "}
            <span className="text-rose-400 font-bold underline decoration-rose-500/40 underline-offset-4">
              "No Visa, No Payment"
            </span>{" "}
            contract guarantee and Cambridge-standard Language Academy.
          </p>
        </motion.div>

        {/* Primary CTAs */}
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
            className="group w-full xs:w-auto relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 p-1.5 pl-6 pr-2 text-xs sm:text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.6)] cursor-pointer"
          >
            <span>Book Free Profile Assessment</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight className="w-4 h-4" />
            </span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={company.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-xl transition-all duration-300 hover:bg-emerald-900/40 hover:border-emerald-400 shadow-md"
          >
            <IconWhatsApp className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp ({company.phones[0]})</span>
          </motion.a>
        </motion.div>

        {/* Master Visual Centerpiece: The Official Next Flight Abroad Banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-white/20 via-blue-500/20 to-white/5 shadow-2xl backdrop-blur-2xl">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group cursor-pointer" onClick={() => setLightboxOpen(true)}>
              <img
                src="/banner.jpg"
                alt="Next Flight Abroad Official Visual Banner with Student e-Visa paper jet, World Cup, and National Jerseys"
                className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Glass Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Official Brand Banner</span>
                  </span>

                  <span className="inline-flex items-center gap-1 bg-blue-600/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
                    <span>Click to Zoom</span>
                    <span>🔍</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-white">
                      Next Flight Abroad Central Hub
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                      338/14, Block-C, Khilgaon, Taltola, Dhaka (Beside Ansar Head Office)
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-rose-600/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-lg">
                      Hotline: +880 1568-019270
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Country & Pathway Selector Box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 max-w-4xl mx-auto rounded-3xl border border-white/15 bg-white/[0.04] p-5 sm:p-7 backdrop-blur-2xl shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                <IconSparkles className="w-3.5 h-3.5" />
                <span>Instant University & Visa Route Explorer</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Select Your Desired Study Destination
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Selected Pathway:</span>
              <span className="text-xs font-bold text-white bg-blue-600/30 px-3 py-1 rounded-full border border-blue-400/30">
                {matchedDestination.name}
              </span>
            </div>
          </div>

          {/* Destination Selector Tabs */}
          <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-4 gap-2 pt-5">
            {destinationsData.map((dest) => {
              const isSelected = selectedDest === dest.slug;
              return (
                <button
                  key={dest.slug}
                  type="button"
                  onClick={() => setSelectedDest(dest.slug)}
                  className={`relative flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600/25 border-blue-400 shadow-lg ring-1 ring-blue-400/50"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="text-2xl">{dest.flag}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{dest.name}</div>
                    <div className="text-[0.65rem] text-slate-400 truncate">
                      {dest.slug === "south-korea"
                        ? "Top Partner"
                        : dest.slug === "greece"
                        ? "No IELTS"
                        : dest.avgTuition}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Matched Details Bar */}
          <div className="mt-5 p-4 rounded-2xl bg-slate-900/80 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <div className="text-[0.68rem] text-slate-400 uppercase font-bold">Average Tuition</div>
              <div className="text-xs sm:text-sm font-black text-white mt-0.5">
                {matchedDestination.averageTuition}
              </div>
            </div>

            <div>
              <div className="text-[0.68rem] text-slate-400 uppercase font-bold">English Requirement</div>
              <div className="text-xs sm:text-sm font-black text-blue-300 mt-0.5">
                {matchedDestination.ieltsRequirement}
              </div>
            </div>

            <div>
              <div className="text-[0.68rem] text-slate-400 uppercase font-bold">Work Rights / PSW</div>
              <div className="text-xs sm:text-sm font-black text-emerald-300 mt-0.5">
                {matchedDestination.pswv}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Full admission & visa guidance with "No Visa, No Payment" option</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors"
              >
                <IconWhatsApp className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={open}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-md hover:from-blue-500 hover:to-indigo-500 transition-colors"
              >
                <span>Apply for {matchedDestination.name}</span>
                <span>→</span>
              </button>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 text-sm font-bold"
              >
                ✕ Close
              </button>
              <img
                src="/banner.jpg"
                alt="Next Flight Abroad Official Visual Banner Full View"
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
