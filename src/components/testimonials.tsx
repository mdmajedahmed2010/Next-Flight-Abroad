import { useState } from "react";
import { studentTestimonials, company } from "@/lib/site-data";
import { IconSparkles, IconCheck } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, studentTestimonials.length - 3);

  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#070B16] text-white border-t border-white/10 overflow-hidden">
      {/* Background Soft Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-rose-600/10 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-300 backdrop-blur-md"
            >
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Verified Success Stories</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Real Students. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400">Verified Visas.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed"
            >
              Authentic feedback from students and families who secured international university admissions in South Korea, Greece, UK, and Malta, and achieved IELTS Band 7.5+ with {company.name}.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5">
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              aria-label="Previous Testimonials"
              onClick={prev}
              disabled={currentIndex === 0}
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 disabled:hover:bg-white/[0.05] disabled:cursor-not-allowed cursor-pointer font-bold text-base sm:text-lg"
            >
              ←
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              aria-label="Next Testimonials"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 disabled:hover:bg-white/[0.05] disabled:cursor-not-allowed cursor-pointer font-bold text-base sm:text-lg"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {studentTestimonials.slice(currentIndex, currentIndex + 3).map((r, idx) => {
              const initials = r.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <motion.div
                  key={r.name + idx}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-xl hover:border-blue-500/50 hover:shadow-2xl transition-colors flex flex-col justify-between"
                >
                  <div className="rounded-[1.35rem] bg-[#0A1020] p-5 sm:p-7 h-full flex flex-col justify-between space-y-5 sm:space-y-6">
                    <div className="space-y-3.5">
                      {/* Top Row: Stars + Verified Visa Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-400 text-xs sm:text-sm">
                          {Array.from({ length: r.rating || 5 }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide">
                          {r.badge || "Verified Visa"}
                        </span>
                      </div>

                      {/* Quotation Text */}
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        "{r.quote}"
                      </p>
                    </div>

                    {/* Student Profile Info */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-black text-white shrink-0 shadow-md">
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display text-xs sm:text-sm font-bold text-white truncate">
                            {r.name}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] text-blue-300 truncate block">
                            {r.destination}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <IconCheck className="w-3 h-3" />
                        <span>Enrolled</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
