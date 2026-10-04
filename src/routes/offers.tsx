import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading, IconSparkles } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: `Upcoming Intakes, Batches & Opportunities | ${company.name}` },
      {
        name: "description",
        content: `Explore active university intake deadlines for South Korea (Kyungsung University), Greece 100% Risk-Free, Malta, UK, USA, and premier IELTS & Kids Academy batches at ${company.name}. Head Office: ${company.address.full}.`,
      },
      { property: "og:title", content: `Upcoming Intakes & Academy Batches | ${company.name}` },
      {
        name: "og:description",
        content: `Register for upcoming university intakes, scholarship quotas, and language academy batches at ${company.name} under our 'No Visa, No Payment' contract guarantee.`,
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Admissions & Language Batches"
        title="UPCOMING INTAKES, OFFERS & BATCHES"
        subtitle={`Explore open university intakes for South Korea, Greece, Malta, UK, Canada, USA, and upcoming IELTS Academic, Spoken English, and Kids Academy batches at ${company.name}.`}
        image="/banner.jpg"
        imageAlt={`${company.name} active intakes and academy batches`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Opportunities"
          title="Current Intakes & Language Academy Batches"
          subtitle={`All opportunities below are actively accepting applications with genuine counseling, document assessment, and contract-backed processing at our Central Dhaka Head Office (Khilgaon).`}
        />

        <StaggerContainer staggerDelay={0.08} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div
                className="rounded-3xl p-8 flex flex-col justify-between border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] hover:border-blue-500/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full backdrop-blur-sm group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3 py-1 text-[0.72rem] font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{item.date}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">{item.desc}</p>

                  {item.highlights && (
                    <div className="mt-5 rounded-2xl bg-black/40 p-4 border border-white/10">
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-blue-400 mb-2">
                        Key Inclusions &amp; Benefits:
                      </p>
                      <BulletList items={item.highlights} />
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to register / inquire for: "${item.title}".`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full text-center text-xs py-3.5 shadow-xl font-bold block rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none"
                  >
                    💬 Inquire / Register on WhatsApp
                  </motion.a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </div>
  );
}
