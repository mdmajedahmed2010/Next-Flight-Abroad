import { useRef, useEffect, useState } from "react";
import { company } from "@/lib/site-data";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "0 BDT",
    label: "No Service Charge ❌",
    subtext: "100% Free Application & Counseling for University Admissions",
    highlight: "Student First Policy",
  },
  {
    value: "British Council",
    label: "Certified Agent",
    subtext: "Officially certified UK education advisory ensuring verified visa guidance",
    highlight: "Official Accreditation",
  },
  {
    value: "18,700+",
    label: "Facebook Followers",
    subtext: "Active, engaged student community trusting Abroad Blueprint daily",
    highlight: "Trusted Community",
  },
  {
    value: "150+",
    label: "Partner Universities",
    subtext: "Leading universities across UK, Australia, Canada, USA & Europe",
    highlight: "Global Network",
  },
];

const partnerCredentials = [
  { name: "British Council", country: "United Kingdom", type: "Officially Certified UK Education Agent" },
  { name: "Anglia Ruskin University, Cambridge", country: "🇬🇧 Cambridge, UK", type: "PhD with Dependent — Verified Visa Grant" },
  { name: "University of Greenwich", country: "🇬🇧 London, UK", type: "MRes Chemistry with Dependent — Verified Visa Grant" },
  { name: "University of Derby", country: "🇬🇧 Derby, UK", type: "MRes Programs with £3,000 Scholarships" },
  { name: "Teesside University", country: "🇬🇧 Middlesbrough, UK", type: "DBA 39-Month Doctorate — Post-PSW Pathway" },
  { name: "University of East London (UEL)", country: "🇬🇧 London, UK", type: "Up to £5,000 Merit Scholarships" },
  { name: "Aston University", country: "🇬🇧 Birmingham, UK", type: "Premier Research Master's & Technology Partner" },
  { name: "DAAD Germany", country: "🇩🇪 Germany / Europe", type: "Fully Funded Scholarships & Tuition-Free Universities" },
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
            British Council Certified Agent · Verified Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Verified Trust. Authentic Visa Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm text-slate-300 mt-2 font-medium"
          >
            Abroad Blueprint has established an impeccable standard for international admissions and dependent visa approvals through ethical practice, zero service charges, and verifiable student success stories.
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
              <div className="text-xs sm:text-sm font-bold text-slate-100 mt-2">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {m.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Success Stories Strip: Nobin Siddiky & Mst. Ima Khatun */}
        <div className="mb-14 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                ★ Recent Official Visa Grants (With Dependent)
              </span>
              <h3 className="font-display text-lg sm:text-2xl font-black text-white mt-1">
                Real Bangladeshi Families Flying Together with Abroad Blueprint
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0">
              ✓ 100% Verified Facebook Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Story 1: Nobin Siddiky */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start group hover:border-blue-500/50 transition-all">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-black">
                <img
                  src="/assets/visa-success-nobin.jpg"
                  alt="Nobin Siddiky Visa Granted with Dependent"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left min-w-0">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Visa Granted with Dependent
                </span>
                <h4 className="font-display text-base font-bold text-white truncate">
                  Nobin Siddiky
                </h4>
                <p className="text-xs text-blue-300 font-semibold">
                  Anglia Ruskin University, Cambridge
                </p>
                <p className="text-[11px] text-slate-300">
                  PhD in Management · Intake: September, 2026
                </p>
                <p className="text-[10px] text-slate-400 pt-1">
                  Accompanied by spouse & child with legal UK work permit.
                </p>
              </div>
            </div>

            {/* Story 2: Mst. Ima Khatun */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start group hover:border-blue-500/50 transition-all">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-black">
                <img
                  src="/assets/visa-success-ima.jpg"
                  alt="Mst. Ima Khatun Visa Granted with Dependent"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left min-w-0">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Visa Granted with Dependent
                </span>
                <h4 className="font-display text-base font-bold text-white truncate">
                  Mst. Ima Khatun
                </h4>
                <p className="text-xs text-blue-300 font-semibold">
                  University of Greenwich, London
                </p>
                <p className="text-[11px] text-slate-300">
                  MRes Science (Chemistry) · Intake: September, 2026
                </p>
                <p className="text-[10px] text-slate-400 pt-1">
                  MRes research track with full spouse dependent visa clearance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Partner Credentials Marquee / Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Institutional Partners & Certifications
            </span>
            <span className="text-xs text-blue-400 font-bold">
              UK · Australia · Canada · USA · Germany
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partnerCredentials.map((p) => (
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
