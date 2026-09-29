import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: `Upcoming Intakes & Signature Offers | ${company.name} — Connecting Possibilities` },
      {
        name: "description",
        content: `Explore active Japanese Language School intakes, N5/N4/N3 course admissions, SSW technical work tracks, and global study abroad packages at ${company.name} (Gemcon EL Mercado Lift-09, Mirpur-10, Dhaka).`,
      },
      { property: "og:title", content: `Upcoming Intakes & Offers | ${company.name}` },
      {
        property: "og:description",
        content: `Register for upcoming Japan student visa intakes and language academy batches at ${company.name} (${company.taglineBangla}).`,
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Signature Offers"
        title="UPCOMING INTAKES & SPECIAL OFFERS"
        subtitle={`Explore active Japanese language school admissions, N5/N4 training batches, SSW work visa pathways, and global university intakes at ${company.name}.`}
        image="/banner.png"
        imageAlt={`${company.name} active admissions and offers`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Opportunities"
          title="Current Intakes & Verified Brand Campaigns"
          subtitle={`All programs below are actively accepting applications with direct partner institution support, transparent COE processing, and personalized counseling at our Mirpur-10 Dhaka head office.`}
        />

        <StaggerContainer staggerDelay={0.08} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div
                className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full hover-lift group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="badge-clean bg-red-50 text-red-700 border-red-200 text-[0.72rem] font-bold">{item.badge}</span>
                    <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                  {item.highlights && (
                    <div className="mt-5 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80">
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-red-600 mb-2">
                        Key Highlights & Inclusions:
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
                    className="btn-primary w-full text-center text-xs py-3.5 shadow-sm font-bold block rounded-xl cursor-pointer"
                  >
                    💬 Inquire / Apply on WhatsApp
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
