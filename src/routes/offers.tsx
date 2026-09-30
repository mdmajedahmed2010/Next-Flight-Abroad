import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: `Upcoming Intakes, Scholarships & Academy Batches | ${company.name}` },
      {
        name: "description",
        content: `Explore active global study abroad intakes, UK MRes Fly with Dependent scholarships (up to £5,000), IELTS Academic batches, Spoken English, and Kids English courses at ${company.name}. 100% Free Processing · Zero Service Charge.`,
      },
      { property: "og:title", content: `Upcoming Batches, Intakes & Offers | ${company.name}` },
      {
        name: "og:description",
        content: `Register for upcoming university intakes, MRes dependent research degrees, and language courses at ${company.name} (${company.taglineBangla}) — Start Here, Go Anywhere!`,
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions, Intakes & Scholarships"
        title="UPCOMING INTAKES, SCHOLARSHIPS & BATCHES"
        subtitle={`Explore upcoming UK, Canada, USA & Australia intake deadlines, Fly with Dependent research degrees, university scholarships up to £5,000, and language academy batches at ${company.name}. 100% Free Processing · 0 BDT Service Fee.`}
        image="/banner.jpg"
        imageAlt={`${company.name} active intakes, scholarships and academy batches`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Opportunities"
          title="Current Intakes, Scholarship Windows & Batches"
          subtitle={`All opportunities below are actively accepting applications with British Council Certified counseling, authentic document guidance, and 100% free visa processing at our Chittagong & UK offices.`}
        />

        <StaggerContainer staggerDelay={0.08} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div
                className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full hover-lift group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="badge-clean bg-blue-50 text-blue-700 border-blue-200 text-[0.72rem] font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                  {item.highlights && (
                    <div className="mt-5 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80">
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-blue-600 mb-2">
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
                    className="btn-primary w-full text-center text-xs py-3.5 shadow-sm font-bold block rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white border-none"
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
