import { useRef, useEffect, useState } from "react";
import { company } from "@/lib/site-data";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "1,500+",
    label: "Graduates & Students",
    subtext: "Empowered across IELTS, Spoken English, and Study Abroad in Beanibazar",
    highlight: "Massive Alumni",
  },
  {
    value: "350+",
    label: "Band 7.0–8.5 Achievers",
    subtext: "Honored with official cash prize rewards and stage recognition",
    highlight: "Cash Prize Rewards",
  },
  {
    value: "30+ Seats",
    label: "Computer Mock Lab",
    subtext: "Beanibazar's premier IDP/British Council simulation terminals",
    highlight: "Authentic Software",
  },
  {
    value: "98%",
    label: "Student Visa Success",
    subtext: "Proven admission & visa track record for UK, Canada, USA & Europe",
    highlight: "High Approvals",
  },
];

const partnerCredentials = [
  { name: "IDP Education", country: "Global Partner", type: "Official IELTS Test Registration & Partner Support" },
  { name: "Cambridge University Press", country: "United Kingdom", type: "Official IELTS 11–19 Authentic Test Materials" },
  { name: "University of Hertfordshire", country: "🇬🇧 Hatfield, UK", type: "Premier UK Master's & Bachelor's Partner" },
  { name: "Coventry University", country: "🇬🇧 West Midlands, UK", type: "Fast-Track Offer Letters & 2-Yr Graduate Route" },
  { name: "Conestoga College", country: "🇨🇦 Ontario, Canada", type: "Top DLI Institution with 3-Yr PGWP" },
  { name: "Deakin University", country: "🇦🇺 Melbourne, Australia", type: "World Top 1% University & Regional PR" },
  { name: "European University of Lefke", country: "🇪🇺 Cyprus / Europe", type: "Affordable European Tuition & Scholarships" },
  { name: "British Council Resources", country: "Global Standard", type: "Aligned Testing & Examiner Criteria" },
];

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/([\d,.]+)/);
    if (!match) return;
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
    <section className="relative bg-[#070B16] border-y border-white/10 py-16 sm:py-20 text-white overflow-hidden">
      {/* Subtle ambient beam with Framer Motion pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-44 w-full max-w-5xl bg-gradient-to-b from-cyan-600/15 via-blue-500/10 to-transparent blur-3xl"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2"
          >
            Verified Track Record · Real Beanibazar Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Unmatched Scale. Authentic Achievements.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm text-slate-300 mt-2 font-medium"
          >
            Milestone Beanibazar has set the benchmark for English proficiency and international student placements in Sylhet through verifiable results, not empty slogans.
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
              className="rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/50 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center justify-between text-[10px] font-bold text-cyan-300 uppercase tracking-wider mb-2">
                <span>{m.highlight}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                <AnimatedMetric value={m.value} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-100 mt-2">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {m.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monumental Celebration Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 items-center"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-300">
              <span>★ 100+ Graduates with Giant 3D MILESTONE Letters</span>
            </div>
            <h3 className="font-display text-xl sm:text-3xl font-black text-white leading-snug">
              Beanibazar's Largest Student Assembly & Graduation Celebration
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Look at the real proof of our student community. Over 100 successful Milestone alumni holding their official certificates alongside CEO Saleh Ahmed Shaheen, Chief Instructor Ahbabur Rahman Tahmid, and faculty. No other institution in Beanibazar commands this level of community trust and student pride.
            </p>
            <div className="flex flex-wrap gap-2 text-[0.72rem] font-bold text-slate-300">
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">✓ Verified Certificate Holders</span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">✓ Band 7.0+ Cash Awardees</span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">✓ Global University Enrollees</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src="/milestone-celebration.jpg"
              alt="Milestone Beanibazar 100+ Graduates"
              className="w-full h-auto object-cover max-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white">
                Official Graduation Ceremony in Beanibazar
              </span>
            </div>
          </div>
        </motion.div>

        {/* Accredited Partners Strip */}
        <div className="border-t border-white/10 pt-10">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Accredited International Partners & Testing Alliances
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {partnerCredentials.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-white/[0.02] border border-white/5 p-3 sm:p-4 text-left hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-xs font-bold text-white truncate">{p.name}</div>
                <div className="text-[11px] text-cyan-400 font-medium mt-0.5">{p.country}</div>
                <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
