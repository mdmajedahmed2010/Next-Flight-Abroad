import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { academyCourses, company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function AcademyStudio() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);

  const currentCourse = academyCourses[activeCourseIdx] || academyCourses[0]!;

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Animated Soft Glow Ambient Orbs (Blue & Rose) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-10 left-10 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="pointer-events-none absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-rose-600/15 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 backdrop-blur-md"
            >
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Language & Fluency Excellence · Next Flight Abroad Academy</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Next Flight Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400">Language Academy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed"
            >
              Master English fluency and achieve IELTS Band 7.5+ with Cambridge-certified trainers. Offline smart classes at our Khilgaon center and flexible interactive online sessions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:border-blue-400 transition-all active:scale-95"
            >
              <span>Explore All Courses</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Double-Bezel Studio Architecture */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0A1020]/95 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            {/* Interactive Course Selection Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-2.5 pb-6 sm:pb-8 border-b border-white/10">
              {academyCourses.map((c, idx) => {
                const active = activeCourseIdx === idx;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setActiveCourseIdx(idx)}
                    className={`relative p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      active
                        ? "border-blue-400/80 text-white shadow-md ring-1 ring-blue-400/40"
                        : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeAcademyTab"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/30 to-indigo-600/20"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl sm:text-2xl">
                          {c.id.includes("ielts") ? "🏆" : c.id.includes("kids") ? "🧒" : c.id.includes("interview") ? "🎙️" : "🗣️"}
                        </span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-amber-300">
                          {c.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1">
                        {c.title}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-1">
                        {c.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Course Deep Dive with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCourse.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left 7 Columns: Details, Features, Learning Outcomes */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 text-xs font-bold mb-3">
                      <span>{currentCourse.category}</span>
                      <span>•</span>
                      <span>Target: {currentCourse.targetScore}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-3xl font-black text-white">
                      {currentCourse.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-medium">
                      {currentCourse.summary}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Course Curriculum Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentCourse.keyFeatures.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                        >
                          <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intake & Schedule Status */}
                  <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Batch Availability:</span>
                      <span className="text-white font-bold">{currentCourse.intakeStatus}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Class Format:</span>
                      <span className="text-blue-300 font-bold">{currentCourse.classFormat}</span>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Enrollment Card & Hotline */}
                <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-slate-900 border border-white/10 p-5 sm:p-7 shadow-xl space-y-5">
                  <div className="pb-4 border-b border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Target Audience:
                    </span>
                    <p className="text-xs font-bold text-white mt-1">
                      {currentCourse.audience}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Class Duration:</span>
                      <span className="text-white font-bold">{currentCourse.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Study Level:</span>
                      <span className="text-white font-bold">{currentCourse.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Diagnostic Test:</span>
                      <span className="text-emerald-400 font-bold">Free Evaluation Included</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="button"
                      onClick={open}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Enroll in {currentCourse.title.split("(")[0]}</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I want to know about course fees, class schedules and batch details for: ${currentCourse.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5" />
                      <span>Inquire Course Fee on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2 text-[0.68rem] text-slate-400 text-center leading-relaxed">
                    Khilgaon Center: 338/14, Block-C, Khilgaon, Taltola (Beside Ansar Head Office)
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
