import { useState } from "react";
import { company, embeddedVideos } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsCinema() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  const videos = embeddedVideos;
  const currentVideo = videos[activeVideoIdx] || videos[0]!;

  return (
    <section className="relative bg-[#060A14] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Animated Ambient Theater Lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/20 blur-[160px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/15 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-blue-500/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Video Proof & Facebook Broadcasts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            See Real Results. Hear Real Guidance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Verified Facebook broadcasts from Abroad Blueprint. Learn directly how students secure admissions with MRes scholarships, fly with dependents, and prepare for IELTS and Spoken English.
          </motion.p>
        </div>

        {/* Cinema Stage Container — Double-Bezel Architecture */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0A1224]/95 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              {/* Left: Active Featured Video Player */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideo.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full overflow-hidden flex items-center justify-center bg-black min-h-[460px] sm:min-h-[520px] p-2"
                    >
                      <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center">
                        <iframe
                          key={currentVideo.id}
                          src={currentVideo.iframeSrc}
                          title={currentVideo.title}
                          width={currentVideo.id === "3218021131830463" ? "267" : "273"}
                          height="476"
                          style={{ border: "none", overflow: "hidden", maxWidth: "100%", maxHeight: "100%" }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Video Meta Info */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pt-1">
                  <div>
                    <span className="text-amber-400 text-xs font-bold block">{currentVideo.badge}</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">{currentVideo.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-md">{currentVideo.description}</p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Abroad Blueprint! I watched your video "${currentVideo.title}" and would like admission counseling.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-4 font-bold rounded-xl inline-flex items-center justify-center gap-2 shadow-sm shrink-0 bg-[#0052cc] hover:bg-[#0043a8] text-white"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5" />
                    <span>WhatsApp Counselor</span>
                  </motion.a>
                </div>
              </div>

              {/* Right: Interactive Playlist Switcher */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Video Playlist ({videos.length})
                  </span>
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-400 font-bold hover:underline"
                  >
                    All Facebook Videos ↗
                  </a>
                </div>

                <div className="space-y-2.5">
                  {videos.map((vid, idx) => {
                    const active = activeVideoIdx === idx;
                    return (
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        key={vid.id}
                        type="button"
                        onClick={() => setActiveVideoIdx(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3 sm:gap-4 ${
                          active
                            ? "bg-gradient-to-r from-blue-600/30 to-indigo-600/20 border-blue-500/80 text-white ring-1 ring-blue-500/40 shadow-md"
                            : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm sm:text-base font-bold text-amber-400 border border-white/10">
                          {active ? "▶" : `0${idx + 1}`}
                        </span>

                        <div className="space-y-0.5 sm:space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase font-bold tracking-wider rounded-md bg-white/10 px-2 py-0.5 text-blue-300">
                              {vid.badge}
                            </span>
                            {active && (
                              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Playing Now
                              </span>
                            )}
                          </div>
                          <h4 className="font-display text-xs sm:text-sm font-bold text-white leading-snug truncate sm:line-clamp-2">
                            {vid.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1 sm:line-clamp-2">
                            {vid.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Assurance Box */}
                <div className="rounded-2xl bg-white/[0.04] p-3.5 sm:p-4 border border-white/10 space-y-1.5 text-xs">
                  <span className="text-amber-400 font-bold block">
                    ★ British Council Certified Education Agency
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Watch our official updates on UK university admissions (Derby, Greenwich, Teesside, UEL, Cambridge ARU), MRes programs with dependent visa rights, and English preparation at Abroad Blueprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
