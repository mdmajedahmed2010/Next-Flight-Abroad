import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { ProofAndCredentials } from "@/components/home/proof-and-credentials";
import { DestinationBento } from "@/components/home/destination-bento";
import { VideoReelsCinema } from "@/components/home/video-reels-cinema";
import { AcademyStudio } from "@/components/home/academy-studio";
import { OfficesHub } from "@/components/home/offices-hub";
import { HonestyManifesto } from "@/components/home/honesty-manifesto";
import { Testimonials } from "@/components/testimonials";
import { CtaBand, IconSparkles } from "@/components/ui-blocks";
import { faqs, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${company.name} | Study in Japan, Japanese Language Academy & SSW Work Visas | Mirpur-10, Dhaka`,
      },
      {
        name: "description",
        content:
          `${company.name} — ${company.tagline}. Study in Japan: Language Schools, Universities & SSW Visas. Japanese N5/N4/N3 Academy in Mirpur-10, Dhaka. Principal Office: Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216. Hotlines: 01345-918515, 01345-918516.`,
      },
      { property: "og:title", content: `${company.name} — Study in Japan & Japanese Language Academy` },
      {
        property: "og:description",
        content:
          "Connecting Possibilities. Top Japanese Language School admissions, SSW work visa guidance, N5/N4 courses, and 28 hrs/week legal part-time work rights. Principal Office: Gemcon EL Mercado (Lift-09), Mirpur-10, Dhaka.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqCategories = [
    "All",
    "Study in Japan",
    "Japanese Academy (N5/N4)",
    "SSW Work Visa",
    "Part-Time Work & Living",
    "Offices & Contact",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          if (activeFaqCategory === "Study in Japan")
            return (
              f.q.toLowerCase().includes("japan") ||
              f.a.toLowerCase().includes("japan") ||
              f.q.toLowerCase().includes("intake") ||
              f.a.toLowerCase().includes("intake")
            );
          if (activeFaqCategory === "Japanese Academy (N5/N4)")
            return (
              f.q.toLowerCase().includes("language") ||
              f.q.toLowerCase().includes("n5") ||
              f.q.toLowerCase().includes("jlpt") ||
              f.a.toLowerCase().includes("n5") ||
              f.a.toLowerCase().includes("nat-test")
            );
          if (activeFaqCategory === "SSW Work Visa")
            return (
              f.q.toLowerCase().includes("ssw") ||
              f.a.toLowerCase().includes("ssw") ||
              f.a.toLowerCase().includes("tokutei")
            );
          if (activeFaqCategory === "Part-Time Work & Living")
            return (
              f.q.toLowerCase().includes("work") ||
              f.a.toLowerCase().includes("28 hours") ||
              f.a.toLowerCase().includes("part-time") ||
              f.a.toLowerCase().includes("¥")
            );
          if (activeFaqCategory === "Offices & Contact")
            return (
              f.q.toLowerCase().includes("office") ||
              f.q.toLowerCase().includes("located") ||
              f.q.toLowerCase().includes("contact") ||
              f.q.toLowerCase().includes("book") ||
              f.a.toLowerCase().includes("mercado") ||
              f.a.toLowerCase().includes("mirpur")
            );
          return true;
        });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070B16] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* 1. Grand Opening: Hero Showcase with Double-Bezel Concierge & Banner Lightbox */}
      <HeroShowcase />

      {/* 2. The Proof Stage: Real Metrics & Accredited Japanese Institutions */}
      <ProofAndCredentials />

      {/* 3. Asymmetrical Flagship Destination Bento Grid (Japan, SSW, UK, Malaysia, Global) */}
      <DestinationBento />

      {/* 4. The Facebook Video Reels Cinema Theater Mode */}
      <VideoReelsCinema />

      {/* 5. OneTech Japanese Language Academy Studio */}
      <AcademyStudio />

      {/* 6. Strategic Presence: Mirpur-10 Principal Office & Facilities */}
      <OfficesHub />

      {/* 7. The OneTech Standard & Values */}
      <HonestyManifesto />

      {/* 8. Voice of Real Students: Testimonials */}
      <Testimonials />

      {/* 9. Minimalist Categorized FAQ Accordion with Animated Pill */}
      <section className="bg-[#0A1020] py-20 sm:py-28 border-t border-white/10 text-white">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-3.5 py-1 text-xs font-bold text-red-400 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Transparent Answers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Direct, transparent answers regarding studying in Japan, Japanese language N5/N4 courses, SSW work visas, and our Mirpur-10 office.
            </p>
          </div>

          {/* FAQ Category Filter Pills with layoutId */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((cat) => {
              const isActive = activeFaqCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory(cat);
                    setOpenFaqIndex(0);
                  }}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs font-bold transition-colors cursor-pointer active:scale-95",
                    isActive ? "text-white" : "text-slate-400 hover:text-white bg-white/5 border border-white/10",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFaqPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-rose-600 shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Modern Clean Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-white/[0.06] border-red-500 shadow-lg ring-1 ring-red-500/30"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                        isOpen
                          ? "bg-red-600 text-white rotate-180"
                          : "bg-white/10 text-slate-400",
                      )}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium border-t border-white/5 whitespace-pre-line">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <CtaBand />
    </div>
  );
}
