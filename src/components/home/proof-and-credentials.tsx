import { useRef, useEffect, useState } from "react";
import { company } from "@/lib/site-data";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "7.7K+",
    label: "Facebook Followers",
    subtext: "সক্রিয় অনুসারী ও ভ্রমণ-ক্যারিয়ার প্রত্যাশীদের নির্ভরযোগ্য প্ল্যাটফর্ম",
    highlight: "Official Facebook",
  },
  {
    value: "100K+",
    label: "Reel & Video Views",
    subtext: "মালদ্বীপ ভিসা হ্যান্ডওভার, মঙ্গোলিয়া ও সাইপ্রাস কাজের ভিডিও",
    highlight: "Viral Proofs",
  },
  {
    value: "14 Trades",
    label: "Greek Cyprus 2026",
    subtext: "ইউরোপীয় স্ট্যান্ডার্ড কাজের ভিসা, দ্রুত ৩-৪ মাসের প্রক্রিয়া",
    highlight: "European Work Permit",
  },
  {
    value: "100%",
    label: "সরাসরি অফিস কাউন্সিলিং",
    subtext: "রাজ্জাক প্লাজা (লিফট-১২), মগবাজার, ঢাকা হেড অফিসে মুখোমুখি পরামর্শ",
    highlight: "Transparent & Direct",
  },
];

const serviceHighlights = [
  { name: "Greek Cyprus EU Work Permit", country: "🇨🇾 European Union", type: "14 Trade Skill Work Permit · 2026 Urgent Quota" },
  { name: "Mongolia Logistics & Farming", country: "🇲🇳 Mongolia", type: "Reach Stacker Crane Driver & Modern Greenhouse ($800–$900)" },
  { name: "Maldives Work & Tourism", country: "🇲🇻 Maldives", type: "Resort Hospitality & Design · Direct Handover" },
  { name: "Global Air Ticketing", country: "✈️ Worldwide Routes", type: "Best Airfare, Group Booking & Visit Visa" },
  { name: "European Study Abroad", country: "🇪🇺 Cyprus / Germany / Malta", type: "Undergraduate & Master's Admissions & Credit Transfer" },
  { name: "IELTS Preparation Academy", country: "🏆 Cambridge Aligned", type: "Academic & General Training (Band 7.5+ Target)" },
  { name: "Spoken English Fluency", country: "🗣️ Corporate & Everyday", type: "Hesitation Removal & Practical Conversation" },
  { name: "Kids English & Phonics Studio", country: "🧒 Ages 5–14", type: "Phonics, Sound Mastery & Confidence Building" },
];

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/([\d,.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    const numStr = match[1].replace(/,/g, "");
    const target = parseFloat(numStr);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index! + match[0].length);

    const duration = 1400;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;

      const formatted = Number.isInteger(target)
        ? Math.round(current).toLocaleString()
        : current.toFixed(1);

      setDisplayValue(`${prefix}${formatted}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function ProofAndCredentials() {
  return (
    <section className="relative bg-[#060a14] border-y border-white/10 py-16 sm:py-20 text-white overflow-hidden">
      {/* Subtle ambient beam with Framer Motion pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-44 w-full max-w-5xl bg-gradient-to-b from-blue-600/20 via-indigo-500/10 to-transparent blur-3xl"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2"
          >
            NextFlight BD · আপনার ভ্রমণের সাথী ✈️
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            বাস্তব প্রমাণ ও ভেরিফায়েড ভিসা সাকসেস
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm text-slate-300 mt-2 font-medium max-w-2xl mx-auto font-bangla"
          >
            নেক্সট ফ্লাইট ওভারসিজ সরাসরি শিক্ষার্থীদের এবং কর্মপ্রত্যাশীদের বাস্তব প্রমাণ, নির্ভরযোগ্য ভিসা হ্যান্ডওভার এবং স্পষ্ট গাইডলাইনের মাধ্যমে সেবা প্রদান করে আসছে।
          </motion.p>
        </div>

        {/* 4 Counter Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center justify-between text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-2">
                <span>{m.highlight}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                <AnimatedMetric value={m.value} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-100 mt-2 font-bangla">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed font-bangla">
                {m.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Success Stories Strip: Maldives Reel & Greek Cyprus Post */}
        <div className="mb-14 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block font-bangla">
                ★ অফিশিয়াল ফেসবুক ভেরিফায়েড আপডেট ও হ্যান্ডওভার
              </span>
              <h3 className="font-display text-lg sm:text-2xl font-black text-white mt-1 font-bangla">
                সরাসরি ফেসবুক পেইজ থেকে ভেরিফায়েড সাফল্য
              </h3>
            </div>
            <a
              href="https://www.facebook.com/nextflightbd26/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-blue-400 hover:text-white bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full shrink-0 flex items-center gap-1.5"
            >
              <span>fb.com/nextflightbd26</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Story 1: Maldives Visa Handover Reel */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start group hover:border-blue-500/50 transition-all">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-black flex items-center justify-center relative">
                <img
                  src="/assets/nextflight-banner.jpg"
                  alt="Maldives Visa Handover NextFlight BD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white bg-black/40 text-xl font-bold">
                  ▶ Reel
                </span>
              </div>
              <div className="space-y-1.5 text-center sm:text-left min-w-0">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified Visa Handover
                </span>
                <h4 className="font-display text-base font-bold text-white truncate font-bangla">
                  মালদ্বীপ ভিসা হ্যান্ডওভার
                </h4>
                <p className="text-xs text-blue-300 font-semibold font-bangla">
                  অফিশিয়াল রিলস ভিডিও ভেরিফিকেশন
                </p>
                <p className="text-[11px] text-slate-300 font-bangla">
                  সরাসরি অফিসে ক্লায়েন্টকে পাসপোর্ট ও ভিসা প্রদানের আনন্দঘন মুহূর্ত।
                </p>
                <div className="pt-1">
                  <a
                    href="https://www.facebook.com/reel/4536639709888626/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>ফেসবুকে রিলটি দেখুন</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Story 2: Greek Cyprus Work Permit Post */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start group hover:border-blue-500/50 transition-all">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-black flex items-center justify-center relative">
                <img
                  src="/assets/nextflight-logo.jpg"
                  alt="Greek Cyprus Work Permit NextFlight BD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 p-2 bg-[#0f2b48]"
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[9px] font-bold bg-blue-600 text-white rounded">
                  2026 Batch
                </span>
              </div>
              <div className="space-y-1.5 text-center sm:text-left min-w-0">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Greek Cyprus 14 Trade
                </span>
                <h4 className="font-display text-base font-bold text-white truncate font-bangla">
                  গ্রিক সাইপ্রাস ওয়ার্ক পারমিট ২০২৬
                </h4>
                <p className="text-xs text-blue-300 font-semibold font-bangla">
                  ইউরোপীয় কান্ট্রি · ১৪ টি ট্রেডে কাজের সুযোগ
                </p>
                <p className="text-[11px] text-slate-300 font-bangla">
                  বেতন ৮০০-১৫০০ ইউরো, কোম্পানি কর্তৃক থাকা-খাওয়া ও মেডিকেল সুবিধা।
                </p>
                <div className="pt-1">
                  <a
                    href="https://www.facebook.com/nextflightbd26/posts/pfbid0phA4F2QGCx3Kehfdb9G7KvzdCC4cdp6Rvxb9jA3Dff3BU14PWS6SxihM8RFZw8iBl"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>ফেসবুক পোস্ট দেখুন</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Core Pillars & Verified Services Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-bangla">
              নেক্সট ফ্লাইট বিডি-র মূল সেবা ও গন্তব্যসমূহ (Core Services &amp; Wings)
            </span>
            <span className="text-xs text-blue-400 font-bold">
              Cyprus · Mongolia · Maldives · Europe · Travel · Academy
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {serviceHighlights.map((p) => (
              <div
                key={p.name}
                className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-3 sm:p-4 hover:border-blue-400/40 transition-colors"
              >
                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider truncate">
                  {p.country}
                </div>
                <div className="font-display text-xs sm:text-sm font-bold text-white mt-1 truncate">
                  {p.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-2">
                  {p.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
