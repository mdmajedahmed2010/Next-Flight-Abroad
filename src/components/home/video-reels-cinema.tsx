import { useState } from "react";
import { company, embeddedVideos } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsCinema() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  const videos = embeddedVideos;
  const currentVideo = videos[activeVideoIdx] || videos[0]!;

  return (
    <section className="relative bg-[#071322] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-sky-400/20">
      {/* Animated Ambient Theater Lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-sky-600/20 blur-[160px]"
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
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-400 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Facebook Live Proof & Broadcasts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Real Visa Handovers. Verified Overseas Proof.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Watch live visa handover celebrations and official announcements directly from our Facebook page (@nextflightbd26). Maldives, Greek Cyprus 14 trades, and Mongolia verified career pathways.
          </motion.p>
        </div>

        {/* Dual Live Embeds Highlight: Reel + Post Side-by-Side Showcase */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* 1. User Provided Reel: Maldives Work Permit */}
          <div className="rounded-2xl border border-sky-400/30 bg-[#0c1e33] p-4 sm:p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Live Video Reel · 20K+ Views
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full font-bold">
                Maldives Visa Handover
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-xl bg-black border border-white/10 flex items-center justify-center min-h-[314px]">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4536639709888626%2F&show_text=false&width=560&t=0"
                width="560"
                height="314"
                style={{ border: "none", overflow: "hidden", maxWidth: "100%", width: "100%" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="NextFlight BD Maldives Work Permit Visa Handover"
              />
            </div>
            <div className="pt-1 flex items-center justify-between text-xs">
              <p className="text-slate-300 text-xs font-medium">
                Live visa handover ceremony at NextFlight BD Moghbazar office.
              </p>
              <a
                href="https://www.facebook.com/reel/4536639709888626/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline font-bold text-xs shrink-0"
              >
                Watch on Facebook ↗
              </a>
            </div>
          </div>

          {/* 2. User Provided Post: Greek Cyprus 14 Trade Work Permit */}
          <div className="rounded-2xl border border-sky-400/30 bg-[#0c1e33] p-4 sm:p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                Official Facebook Announcement
              </span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2.5 py-0.5 rounded-full font-bold">
                Greek Cyprus 2026 Quota
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-xl bg-white border border-white/10 flex items-center justify-center min-h-[250px] p-1">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnextflightbd26%2Fposts%2Fpfbid0phA4F2QGCx3Kehfdb9G7KvzdCC4cdp6Rvxb9jA3Dff3BU14PWS6SxihM8RFZw8iBl&show_text=true&width=500"
                width="500"
                height="250"
                style={{ border: "none", overflow: "hidden", maxWidth: "100%", width: "100%" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="NextFlight BD Greek Cyprus Work Permit Announcement"
              />
            </div>
            <div className="pt-1 flex items-center justify-between text-xs">
              <p className="text-slate-300 text-xs font-medium">
                14 technical trade categories with official salary €800–€1500.
              </p>
              <a
                href="https://www.facebook.com/nextflightbd26/posts/pfbid0phA4F2QGCx3Kehfdb9G7KvzdCC4cdp6Rvxb9jA3Dff3BU14PWS6SxihM8RFZw8iBl"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline font-bold text-xs shrink-0"
              >
                View Post on Facebook ↗
              </a>
            </div>
          </div>
        </div>

        {/* Cinema Stage Container — Interactive Playlist Theater Mode */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-sky-400/20 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0c1e33]/95 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
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
                      className="w-full overflow-hidden flex items-center justify-center bg-black min-h-[460px] sm:min-h-[500px] p-2"
                    >
                      <div
                        className={`w-full ${
                          currentVideo.aspect === "16:9" || currentVideo.aspect === "landscape"
                            ? "max-w-[560px]"
                            : "max-w-[280px]"
                        } rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center`}
                      >
                        <iframe
                          key={currentVideo.id}
                          src={currentVideo.iframeSrc}
                          title={currentVideo.title}
                          width={currentVideo.width ? String(currentVideo.width) : "267"}
                          height={currentVideo.height ? String(currentVideo.height) : "476"}
                          style={{
                            border: "none",
                            overflow: "hidden",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
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
                    <span className="text-amber-400 text-xs font-bold block">{currentVideo.badge} · {currentVideo.views}</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                      {currentVideo.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">
                      {currentVideo.description}
                    </p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello NextFlight BD! I watched your video "${currentVideo.title}" and would like counseling.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-4 font-bold rounded-xl inline-flex items-center justify-center gap-2 shadow-sm shrink-0 bg-[#0099e5] hover:bg-[#0284c7] text-white"
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
                    className="text-xs text-sky-400 font-bold hover:underline"
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
                            ? "bg-gradient-to-r from-sky-600/30 to-blue-600/20 border-sky-400 text-white ring-1 ring-sky-400/40 shadow-md"
                            : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm sm:text-base font-bold text-amber-400 border border-white/10">
                          {active ? "▶" : `0${idx + 1}`}
                        </span>

                        <div className="space-y-0.5 sm:space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase font-bold tracking-wider rounded-md bg-white/10 px-2 py-0.5 text-sky-300">
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
                  <span className="text-sky-300 font-bold block">
                    ★ NextFlight BD — Razzak Plaza (Lift-12), Moghbazar, Dhaka
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Watch our official updates on higher study admissions (UK, Canada, Europe), European skill trade work permits (Greek Cyprus €800-€1500), Maldives visa handovers, and English courses.
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
