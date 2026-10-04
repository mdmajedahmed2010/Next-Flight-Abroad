import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

export function InteractiveMatcher() {
  const { open } = useRegisterModal();
  const [level, setLevel] = useState<string>("Bachelor's Degree (Undergrad)");
  const [score, setScore] = useState<string>("GPA 4.0 – 4.9 / Second Class Upper");
  const [ielts, setIelts] = useState<string>("Without IELTS (MOI / English Waiver)");
  const [budget, setBudget] = useState<string>("Affordable (BDT 5L – 10L)");

  const matchedDestinations = useMemo(() => {
    return destinations
      .filter((d) => {
        // Without IELTS filter
        if (ielts === "Without IELTS (MOI / English Waiver)") {
          return d.withoutIelts;
        }
        // Low tuition budget matching
        if (budget === "Affordable (BDT 5L – 10L)") {
          return ["south-korea", "greece", "malta", "europe"].includes(d.slug);
        }
        if (budget === "Mid-Range (BDT 10L – 16L)") {
          return ["south-korea", "uk", "malta", "canada"].includes(d.slug);
        }
        if (budget === "Global Tier 1 (BDT 16L+)") {
          return ["uk", "usa", "australia", "canada"].includes(d.slug);
        }
        return true;
      })
      .slice(0, 6);
  }, [budget, ielts]);

  const whatsappHref = () => {
    const text = `Hello ${company.name}! I used your Eligibility Calculator.\n\nMy Profile:\n• Desired Study Level: ${level}\n• Academic Result: ${score}\n• English Status: ${ielts}\n• Tuition Budget: ${budget}\n\nMatched Destinations: ${matchedDestinations.map((m) => m.name).join(", ")}\n\nPlease schedule a free consultation with a ${company.name} counselor under the 'No Visa, No Payment' contract guarantee!`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm text-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1 text-xs font-bold text-blue-300">
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Assessment · 100% Free Consultation</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
            Study Abroad &amp; Language <span className="text-blue-400">Eligibility Calculator</span>
          </h2>
          <p className="mt-1 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Select your academic degree level, GPA, English proficiency, and annual budget to discover matched pathways across South Korea, Greece, Malta, the UK, USA, Canada, and Australia with {company.name}.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-300">
          Verified 2026/2027 Intakes
        </div>
      </div>

      {/* Profile Filters Matrix */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Degree Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            1. Desired Study Level
          </label>
          <div className="space-y-1.5">
            {[
              "Bachelor's Degree (Undergrad)",
              "Master's / MBA / Post-Grad",
              "Korean Language Course (D-4-1)",
              "IELTS Prep (Band 7.5+ Masterclass)",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLevel(opt)}
                className={cn(
                  "w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer",
                  level === opt
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Academic Score */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            2. Academic GPA / Score
          </label>
          <div className="space-y-1.5">
            {[
              "GPA 5.0 / First Class Division",
              "GPA 4.0 – 4.9 / Second Class Upper",
              "GPA 3.0 – 3.9 / Study Gap Acceptable",
              "HSC / A-Level Appeared",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setScore(opt)}
                className={cn(
                  "w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer",
                  score === opt
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 3. English Test Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            3. English Proficiency
          </label>
          <div className="space-y-1.5">
            {[
              "Without IELTS (MOI / English Waiver)",
              "IELTS 7.0 – 8.5+ (High Direct Entry)",
              "IELTS 6.0 – 6.5 (Standard Entry)",
              "Enrolling in Next Flight Academy Batch",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setIelts(opt)}
                className={cn(
                  "w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer",
                  ielts === opt
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Budget Range */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            4. Tuition Budget / Year
          </label>
          <div className="space-y-1.5">
            {[
              "Affordable (BDT 5L – 10L)",
              "Mid-Range (BDT 10L – 16L)",
              "Global Tier 1 (BDT 16L+)",
              "Full Scholarship Aspirant",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                className={cn(
                  "w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer",
                  budget === opt
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matched Results */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Top Matched Destinations for Your Profile ({matchedDestinations.length}):
          </span>
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <span>🛡️ 'No Visa, No Payment' Contract Guarantee</span>
          </span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {matchedDestinations.map((d) => (
            <div
              key={d.slug}
              className="rounded-2xl border border-white/10 bg-black/40 p-4 transition-all hover:bg-white/[0.05] hover:border-blue-500/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                  <span className="text-2xl">{d.flag}</span> {d.name}
                </span>
                <span className="rounded-full bg-blue-500/15 border border-blue-400/30 px-2.5 py-0.5 text-[0.62rem] font-bold text-blue-300">
                  {d.pswv}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                {d.tagline}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5 text-[0.7rem]">
                <span className="font-semibold text-slate-400">
                  Intakes: {d.intakes.split("&")[0]}
                </span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <IconArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-black/60 border border-white/10 p-5 sm:p-6 text-white shadow-2xl">
          <div>
            <p className="font-display text-sm sm:text-base font-bold text-white">
              Want a Formal Profile Evaluation by Senior {company.name} Advisors?
            </p>
            <p className="text-xs text-slate-300 mt-1 font-medium">
              Visit our Central Head Office at {company.address.full}, or chat with our team directly on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs py-3 px-5 font-bold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none cursor-pointer"
            >
              Book Free Session
            </button>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-bold text-white transition-all shadow-lg"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-white" />
              <span>Send on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
