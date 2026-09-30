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
        title: `${company.name} | Study Abroad Consultancy & IELTS Language Academy | Beanibazar, Sylhet`,
      },
      {
        name: "description",
        content:
          `${company.name} — ${company.tagline}. Beanibazar's premier Study Abroad consultancy and IELTS Academy. IDP Partner, First Computer-Delivered (CD) Mock Lab, Spoken English, and UK, Canada, USA, Australia admissions. Campuses: Azir Market & Somobay Market, College Road, Beanibazar, Sylhet. Hotlines: 01781-545490, 01706-452949.`,
      },
      { property: "og:title", content: `${company.name} — Study Abroad & IELTS Language Academy` },
      {
        property: "og:description",
        content:
          "Get Ready For The World. Premier IELTS Academic & General coaching, Beanibazar's only Computer-Delivered (CD) Mock Lab, and direct UK, Canada, USA & Australia admissions. Hotlines: 01781-545490, 01706-452949.",
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
    "Study Abroad (UK, Canada, USA)",
    "IELTS & CD Mock Lab",
    "Spoken English & Fluency",
    "Campuses & Admissions",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          const lowerQ = (f.q || f.question || "").toLowerCase();
          const lowerA = (f.a || f.answer || "").toLowerCase();
          if (activeFaqCategory === "Study Abroad (UK, Canada, USA)")
            return (
              lowerQ.includes("uk") ||
              lowerA.includes("uk") ||
              lowerQ.includes("visa") ||
              lowerA.includes("visa") ||
              lowerQ.includes("canada") ||
              lowerA.includes("canada") ||
              lowerQ.includes("country") ||
              lowerA.includes("university")
            );
          if (activeFaqCategory === "IELTS & CD Mock Lab")
            return (
              lowerQ.includes("ielts") ||
              lowerA.includes("ielts") ||
              lowerQ.includes("mock") ||
              lowerA.includes("mock") ||
              lowerQ.includes("cd") ||
              lowerA.includes("computer") ||
              lowerQ.includes("band") ||
              lowerA.includes("band")
            );
          if (activeFaqCategory === "Spoken English & Fluency")
            return (
              lowerQ.includes("spoken") ||
              lowerA.includes("spoken") ||
              lowerQ.includes("english") ||
              lowerA.includes("english") ||
              lowerQ.includes("junior") ||
              lowerA.includes("junior") ||
              lowerQ.includes("kids") ||
              lowerA.includes("fluency")
            );
          if (activeFaqCategory === "Campuses & Admissions")
            return (
              lowerQ.includes("campus") ||
              lowerA.includes("campus") ||
              lowerQ.includes("office") ||
              lowerA.includes("office") ||
              lowerQ.includes("beanibazar") ||
              lowerA.includes("azir") ||
              lowerQ.includes("contact") ||
              lowerA.includes("road")
            );
          return true;
        });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070B16] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 1. Grand Opening: Hero Showcase with Double-Bezel Concierge & Celebration Banner */}
      <HeroShowcase />

      {/* 2. The Proof Stage: Real Metrics, CD Lab & IDP Partnership */}
      <ProofAndCredentials />

      {/* 3. Asymmetrical Flagship Destination Bento Grid (UK, Canada, USA, Australia, Europe) */}
      <DestinationBento />

      {/* 4. The Facebook Video Reels Cinema Theater Mode (3 Verified Facebook Embeds) */}
      <VideoReelsCinema />

      {/* 5. Milestone Language & IELTS Academy Studio */}
      <AcademyStudio />

      {/* 6. Strategic Presence: Beanibazar Campuses & CD IELTS Lab */}
      <OfficesHub />

      {/* 7. The Milestone Standard & 6 Core Commitments */}
      <HonestyManifesto />

      {/* 8. Voice of Real Students: Testimonials & Band 7+ Achievers */}
      <Testimonials />

      {/* 9. Minimalist Categorized FAQ Accordion with Animated Pill */}
      <section className="bg-[#0A1020] py-20 sm:py-28 border-t border-white/10 text-white">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-400 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Transparent Answers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked <span className="text-sky-400">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Direct, transparent answers regarding IELTS coaching, Computer-Delivered Mock Tests, Study Abroad admissions, and our Beanibazar campuses.
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
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 shadow-md"
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
            {filteredFaqs.slice(0, 7).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qText = faq.q || faq.question;
              const aText = faq.a || faq.answer;
              return (
                <div
                  key={faq.id || qText || idx}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-white/[0.06] border-sky-400 shadow-lg ring-1 ring-sky-400/30"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-white">
                      {qText}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                        isOpen
                          ? "bg-sky-500 text-white rotate-180"
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
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium border-t border-white/5 whitespace-pre-line font-bangla">
                          {aText}
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
