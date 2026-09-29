import { useState } from "react";
import { company } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsSection({
  title = "Official Facebook Video Reels & Japan Visa Success Stories",
  subtitle = "Watch real student COE celebrations, Japanese language admissions briefings, and visa guidance directly from OneTech Education.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const reels = company.featuredReels || [];

  if (!reels || reels.length === 0) return null;

  return (
    <section className="section-shell py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200/90 px-4 py-1.5 text-xs font-bold text-red-600 mb-3 shadow-2xs">
          <IconSparkles className="w-3.5 h-3.5 text-red-600" />
          <span>VERIFIED SOCIAL PROOF · OFFICIAL FACEBOOK BROADCASTS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
          {subtitle}
        </p>
        <p className="text-xs text-slate-500 font-bangla mt-1">
          জাপানের স্টুডেন্ট ভিসা ও সিওই (COE) প্রাপ্তির আনন্দ, ভাষা শিক্ষা গাইডলাইন ও অভিজ্ঞ কাউন্সেলরদের বাস্তব দিকনির্দেশনা দেখুন।
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
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-red-600 hover:shadow-[0_16px_40px_rgba(220,38,38,0.12)] transition-all duration-300">
              {/* Header Badge */}
              <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-gradient-to-r from-red-50/70 to-slate-50">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-red-100 text-red-900 border border-red-300/80 shadow-2xs">
                  {reel.badge}
                </span>
                <span className="text-[0.65rem] font-black text-rose-600 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-rose-100 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>Reel ({reel.width}×{reel.height})</span>
                </span>
              </div>

              {/* Smartphone Mockup Frame */}
              <div className="p-4 flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black flex items-center justify-center">
                  <iframe
                    src={reel.embedSrc}
                    title={reel.title}
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Content & Actions */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-extrabold text-[#0f172a] group-hover:text-red-600 transition-colors leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium line-clamp-2">
                    {reel.desc}
                  </p>
                  {reel.bengaliDesc && (
                    <p className="text-[0.72rem] text-slate-500 font-bangla leading-relaxed line-clamp-2">
                      {reel.bengaliDesc}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={reel.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>Watch on Facebook</span>
                    <span className="text-[0.7rem]">↗</span>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I watched your video reel "${reel.title}" on Facebook and would like details about Japan admissions and Japanese language courses.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}

