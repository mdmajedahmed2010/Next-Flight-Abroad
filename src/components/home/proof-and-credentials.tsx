import { useRef, useEffect, useState } from "react";
import { company } from "@/lib/site-data";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "98.7%",
    label: "Visa Approval Ratio",
    subtext: "Consistent success across South Korea, Greece, Malta, UK, USA & Europe",
    highlight: "High Visa Success",
  },
  {
    value: "100%",
    label: "Risk-Free Contract",
    subtext: "'No Visa, No Payment' model — consultancy fee only upon visa grant",
    highlight: "Zero Advance Risk",
  },
  {
    value: "Band 7.5+",
    label: "IELTS Target Score",
    subtext: "Proven Cambridge-standard curriculum, 1-on-1 mocks & writing clinics",
    highlight: "Cambridge Standard",
  },
  {
    value: "$1.2M+",
    label: "Scholarships Secured",
    subtext: "Partial and full tuition waivers achieved for our students globally",
    highlight: "Merit Waivers",
  },
];

const serviceHighlights = [
  { name: "South Korea Higher Studies", country: "🇰🇷 Kyungsung University, Busan", type: "D-4-1 Language & D-2 Degrees · 30%–100% Scholarships" },
  { name: "Greece European Schengen", country: "🇬🇷 European Union", type: "100% Risk-Free Route · Pay Tuition After Visa · No IELTS" },
  { name: "Malta Study & Work", country: "🇲🇹 Schengen Island", type: "100% English Medium · Study Gap Accepted · Legal Work Rights" },
  { name: "United Kingdom Higher Education", country: "🇬🇧 Russell Group & Modern", type: "2-Year Graduate Route PSW · Fast CAS · Up to £5k Scholarships" },
  { name: "United States University Admissions", country: "🇺🇸 Tier-1 STEM Institutions", type: "3-Year STEM OPT · 1-on-1 F-1 Visa Interview Coaching" },
  { name: "Canada Public Colleges", country: "🇨🇦 Designated Learning (DLI)", type: "Up to 3-Year PGWP · GIC Guidance · Clear PR Migration Pathways" },
  { name: "IELTS Academic & General Academy", country: "🏆 Official Cambridge Format", type: "Intensive 2.5-Month Masterclass · Target Band 7.5+ Guaranteed" },
  { name: "Kids English & Junior Phonics", country: "🧒 Young Learners (5–14)", type: "Synthetic Phonics, Animated Storytelling & Stage Speaking" },
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
    <section className="relative bg-[#070B16] border-y border-white/10 py-16 sm:py-20 text-white overflow-hidden">
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
            Next Flight Abroad · Fly Towards Your Global Future ✈️
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Verified Performance & Trust Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm text-slate-300 mt-2 font-medium max-w-2xl mx-auto"
          >
            Next Flight Abroad is built on total transparency, authenticated university partnerships, real student visa grants, and our signature risk-free guarantee.
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
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">
                <AnimatedMetric value={m.value} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                {m.label}
              </div>
              <div className="text-[0.72rem] text-slate-400 mt-1 leading-relaxed">
                {m.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Badges Horizontal Grid */}
        <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-5 sm:p-7 backdrop-blur-md">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Specialized Education & Language Pathways
            </span>
            <span className="text-[0.68rem] bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 rounded-full font-bold">
              100% Risk Free
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {serviceHighlights.map((s) => (
              <div
                key={s.name}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all"
              >
                <div className="text-[0.7rem] font-bold text-blue-400 mb-0.5">
                  {s.country}
                </div>
                <div className="text-xs font-bold text-white">
                  {s.name}
                </div>
                <div className="text-[0.68rem] text-slate-400 mt-1 leading-relaxed">
                  {s.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
