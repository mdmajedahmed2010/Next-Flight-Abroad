import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: `Upcoming Batches, Intakes & Cash Rewards | ${company.name} — Beanibazar, Sylhet` },
      {
        name: "description",
        content: `Explore active IELTS coaching batches, Computer-Delivered (CD) Mock Test slots, Band 7+ cash reward incentives, and global study abroad intakes at ${company.name} (Azir Market & Somobay Market, College Road, Beanibazar, Sylhet).`,
      },
      { property: "og:title", content: `Upcoming Batches, Intakes & Offers | ${company.name}` },
      {
        property: "og:description",
        content: `Register for upcoming IELTS batches, CD Mock Test slots, and study abroad university admissions at ${company.name} (${company.taglineBangla}).`,
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions, Batches & Student Incentives"
        title="UPCOMING BATCHES & SPECIAL INCENTIVES"
        subtitle={`Explore active IELTS Academic & General batches, Computer-Delivered Mock Lab schedules, Band 7+ cash rewards, and global university intake deadlines at ${company.name}.`}
        image="/milestone-celebration.jpg"
        imageAlt={`${company.name} active admissions, batches and student achievements`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Opportunities"
          title="Current Batches, Lab Slots & Intake Deadlines"
          subtitle={`All programs below are actively accepting admissions with IDP testing partnership, authentic Cambridge materials, and personalized counseling at our Beanibazar campuses.`}
        />

        <StaggerContainer staggerDelay={0.08} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div
                className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full hover-lift group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="badge-clean bg-sky-50 text-sky-700 border-sky-200 text-[0.72rem] font-bold">{item.badge}</span>
                    <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                  {item.highlights && (
                    <div className="mt-5 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80">
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-sky-600 mb-2">
                        Key Highlights &amp; Inclusions:
                      </p>
                      <BulletList items={item.highlights} />
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to apply / register for: "${item.title}".`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full text-center text-xs py-3.5 shadow-sm font-bold block rounded-xl cursor-pointer bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none"
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
    </>
  );
}
