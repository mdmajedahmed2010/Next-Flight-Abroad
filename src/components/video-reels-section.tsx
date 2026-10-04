import { company, embeddedVideos } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export function VideoReelsSection({
  title = "Official Facebook Video Broadcasts & Visa Insights",
  subtitle = `Watch real visa handovers, Greek Cyprus work permits, and study admissions insights directly from ${company.name}.`,
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
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/90 px-4 py-1.5 text-xs font-bold text-[#0052cc] mb-3 shadow-2xs">
          <IconSparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>VERIFIED SOCIAL BROADCASTS · OFFICIAL FACEBOOK REELS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
          {subtitle}
        </p>
        <p className="text-xs text-slate-500 font-bangla mt-1">
          মালদ্বীপে ভিসা হস্তান্তর, গ্রিক সাইপ্রাস ওয়ার্ক পারমিট ২০২৬ ও স্টাডি ভিসা প্রসেসিং নিয়ে সরাসরি ফেসবুক ভিডিও দেখুন।
        </p>
      </div>

      {/* Reels Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {reels.map((reel, idx) => (
          <SlideIn
            key={reel.id}
            direction="up"
            delay={0.1 * (idx + 1)}
            className="flex flex-col h-full"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-[#0052cc] hover:shadow-[0_16px_40px_rgba(0,82,204,0.12)] transition-all duration-300">
              {/* Header Badge */}
              <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-gradient-to-r from-blue-50/70 to-slate-50">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-blue-100 text-[#0052cc] border border-blue-300/80 shadow-2xs">
                  {reel.badge}
                </span>
                <span className="text-[0.65rem] font-black text-amber-600 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-amber-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Official Facebook Reel</span>
                </span>
              </div>

              {/* Video Mockup Frame */}
              <div className="p-4 flex items-center justify-center bg-slate-900 min-h-[500px]">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black flex items-center justify-center">
                  <iframe
                    src={reel.iframeSrc}
                    title={reel.title}
                    width={reel.id === "3218021131830463" ? "267" : "273"}
                    height="476"
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
                  <h3 className="font-display text-base font-extrabold text-[#0a192f] group-hover:text-[#0052cc] transition-colors leading-snug">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] hover:underline transition-colors"
                  >
                    <span>Watch on Facebook ↗</span>
                  </motion.a>

                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I saw your video "${reel.title}" and would like counseling.`,
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
