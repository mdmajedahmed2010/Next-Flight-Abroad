import { useState } from "react";
import { company, embeddedVideos } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsCinema() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const reel1 = embeddedVideos[0]!; // South Korea vertical reel (1096596349984586)
  const reel2 = embeddedVideos[1]!; // Greece 18.5K+ views masterclass (1786220145799938)
  const reel3 = embeddedVideos[2]!; // South Korea Kyungsung University (1690067238973794)

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Animated Ambient Theater Lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
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
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-rose-600/15 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Official Facebook Video Theater · Verified Live Proof</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Real Visa Handovers & Masterclasses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Watch official visa handover celebrations and comprehensive study abroad guides streamed directly from our Facebook page (
            <a
              href="https://www.facebook.com/nextflightabroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              @nextflightabroad
            </a>
            ). Featuring South Korea admissions, Kyungsung University, and the risk-free Greece pathway.
          </motion.p>
        </div>

        {/* Triple Video Showcase Matrix: 1 Vertical Reel + 2 Landscape Masterclasses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1: Vertical Smartphone Reel Player (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl border border-blue-500/30 bg-slate-900/90 p-5 shadow-2xl space-y-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                  Live Reel · South Korea
                </span>
              </div>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 rounded-full font-bold">
                Student Visa Grant
              </span>
            </div>

            {/* Vertical Video Container */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-black border border-white/15 flex items-center justify-center min-h-[476px] p-2">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1096596349984586%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Next Flight Abroad South Korea Student Visa Handover Reel"
                className="max-w-full rounded-xl"
              />
            </div>

            <div className="space-y-1.5 pt-1">
              <h3 className="font-bold text-sm text-white">{reel1.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {reel1.description}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[0.72rem]">Khilgaon Central Office Ceremony</span>
                <a
                  href={reel1.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                >
                  <span>Watch on Facebook</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Two Landscape Masterclasses (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Landscape Video 1: Study in Greece Masterclass */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 shadow-2xl space-y-4 backdrop-blur-xl hover:border-blue-400/40 transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇬🇷</span>
                  <span className="text-xs font-black uppercase tracking-wider text-blue-300">
                    Greece Masterclass · 18.5K+ Views
                  </span>
                </div>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full font-bold">
                  100% Risk Free Route
                </span>
              </div>

              {/* Landscape 16:9 Video Container */}
              <div className="w-full overflow-hidden rounded-2xl bg-black border border-white/15 flex items-center justify-center aspect-video sm:min-h-[314px]">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1786220145799938%2F&show_text=false&width=560&t=0"
                  width="560"
                  height="314"
                  style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Next Flight Abroad Study in Greece Masterclass"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white">{reel2.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {reel2.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[0.72rem]">Tuition paid strictly after visa confirmation</span>
                  <a
                    href={reel2.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                  >
                    <span>Watch Full Video on FB</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Landscape Video 2: Study in South Korea Kyungsung University Masterclass */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 shadow-2xl space-y-4 backdrop-blur-xl hover:border-rose-400/40 transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇰🇷</span>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                    South Korea Admissions · 15K+ Views
                  </span>
                </div>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 rounded-full font-bold">
                  Kyungsung University, Busan
                </span>
              </div>

              {/* Landscape 16:9 Video Container */}
              <div className="w-full overflow-hidden rounded-2xl bg-black border border-white/15 flex items-center justify-center aspect-video sm:min-h-[314px]">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1690067238973794%2F&show_text=false&width=560&t=0"
                  width="560"
                  height="314"
                  style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Next Flight Abroad South Korea Kyungsung University Masterclass"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white">{reel3.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {reel3.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[0.72rem]">30%–100% Scholarships & Tuition Waivers</span>
                  <a
                    href={reel3.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                  >
                    <span>Watch Full Video on FB</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Social Proof Strip */}
        <div className="mt-10 rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📺</span>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Follow Next Flight Abroad on Facebook for Regular Admission Updates
              </div>
              <div className="text-[0.72rem] text-slate-400">
                Join thousands of students and parents receiving authentic visa information daily.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://www.facebook.com/nextflightabroad/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors"
            >
              <span>Visit Facebook Page</span>
              <span>↗</span>
            </a>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors"
            >
              <IconWhatsApp className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
