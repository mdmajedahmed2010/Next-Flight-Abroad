import { company, embeddedVideos } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export function VideoReelsSection({
  title = "Official Facebook Video Broadcasts & Student Achievements",
  subtitle = "Watch real classroom sessions, Computer-Delivered IELTS mock tests, and cash prize ceremonies directly from Milestone Beanibazar.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const reels = embeddedVideos || [];

  if (!reels || reels.length === 0) return null;

  return (
    <section className="section-shell py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-200/90 px-4 py-1.5 text-xs font-bold text-cyan-700 mb-3 shadow-2xs">
          <IconSparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>VERIFIED SOCIAL PROOF · OFFICIAL FACEBOOK BROADCASTS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
          {subtitle}
        </p>
        <p className="text-xs text-slate-500 font-bangla mt-1">
          কম্পিউটার-ডেলিভার্ড মক টেস্ট, স্পোকেন ইংলিশ ফ্লুয়েন্সি সেশন ও ৭+ ব্যান্ড স্কোর অর্জনকারীদের প্রাইজমানি বিতরণের বাস্তব দৃশ্য দেখুন।
        </p>
      </div>

      {/* 3 Reels Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
        {reels.map((reel, idx) => (
          <SlideIn
            key={reel.id}
            direction="up"
            delay={0.1 * (idx + 1)}
            className="flex flex-col h-full"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-cyan-500 hover:shadow-[0_16px_40px_rgba(0,152,218,0.12)] transition-all duration-300">
              {/* Header Badge */}
              <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-gradient-to-r from-cyan-50/70 to-slate-50">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-cyan-100 text-cyan-900 border border-cyan-300/80 shadow-2xs">
                  {reel.badge}
                </span>
                <span className="text-[0.65rem] font-black text-amber-600 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-amber-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Verified Video</span>
                </span>
              </div>

              {/* Video Mockup Frame */}
              <div className="p-4 flex items-center justify-center bg-slate-900 min-h-[460px]">
                <div
                  className={`w-full ${
                    reel.aspect === "16:9" ? "max-w-[340px] aspect-[16/9]" : "max-w-[280px] aspect-[9/16]"
                  } rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black flex items-center justify-center`}
                >
                  <iframe
                    src={reel.iframeSrc}
                    title={reel.title}
                    width={reel.aspect === "16:9" ? "560" : "267"}
                    height={reel.aspect === "16:9" ? "314" : "476"}
                    style={{ border: "none", overflow: "hidden", maxWidth: "100%", maxHeight: "100%" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content & Actions */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-extrabold text-[#0f172a] group-hover:text-cyan-600 transition-colors leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium line-clamp-2">
                    {reel.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <span>Watch on Facebook ↗</span>
                  </motion.a>

                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Milestone Beanibazar! I saw your video "${reel.title}" and would like admission counseling.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[0.72rem] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    <IconWhatsApp className="w-3 h-3 text-emerald-600" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
