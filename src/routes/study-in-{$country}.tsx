import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, RegisterButton, IconSparkles } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/study-in-{$country}")({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.country);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.destination;
    const title = d
      ? `Study in ${d.name} | ${company.name} — ${company.slogan}`
      : `Study Abroad Destinations | ${company.name}`;
    const description = d
      ? `${d.tagline}. University admissions, genuine visa guidance, IELTS requirements, and application strategy for ${d.name} with ${company.name}. Head Office: ${company.address.full}. Hotlines: ${company.phones.join(", ")}.`
      : `Study abroad admissions and language academy coaching from ${company.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: "/banner.jpg" },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();

  const whatsappHref = () => {
    const text = `Hello ${company.name}! I am interested in higher education pathways in ${d.name}.\n\nPlease guide me on university admission criteria, scholarships, visa processing, and the next intake deadlines under your 'No Visa, No Payment' contract guarantee.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow={`${d.flag} ${d.region} · Official Study Pathway`}
        title={`STUDY IN ${d.name.toUpperCase()}`}
        subtitle={d.tagline}
        image="/banner.jpg"
        imageAlt={`Study in ${d.name} — ${company.name}`}
      >
        <div className="space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Destinations", to: "/destinations" },
              { label: d.name },
            ]}
          />
          <div className="flex flex-wrap gap-4">
            <RegisterButton
              label={`Free ${d.name} Assessment`}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none shadow-xl font-bold cursor-pointer"
            />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all"
            >
              <span>💬 WhatsApp About {d.name}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* Main Country Content & Strategic Sidebar */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Left Content */}
          <div className="space-y-10">
            {/* Quick Metrics Matrix */}
            <div className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="font-display text-xl font-black text-white flex items-center gap-2">
                  <span>Key Facts for Applicants · {d.name}</span>
                </h2>
                <span className="text-2xl">{d.flag}</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">Average Tuition:</span>
                  <span className="font-bold text-white mt-1 block">{d.avgTuition}</span>
                </div>
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">Living Expenses:</span>
                  <span className="font-bold text-slate-200 mt-1 block">{d.avgLiving}</span>
                </div>
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">
                    Post-Study Work Rights:
                  </span>
                  <span className="font-bold text-blue-400 mt-1 block">{d.pswv}</span>
                </div>
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">Major Intakes:</span>
                  <span className="font-bold text-white mt-1 block">
                    {Array.isArray(d.intakes) ? d.intakes.join(" · ") : d.intakes}
                  </span>
                </div>
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">Scholarships / Waivers:</span>
                  <span className="font-bold text-emerald-400 mt-1 block">{d.scholarships}</span>
                </div>
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <span className="text-slate-400 block text-xs font-medium">
                    Language / Test Status:
                  </span>
                  <span
                    className={`font-bold mt-1 block ${d.withoutIelts ? "text-emerald-400" : "text-amber-300"}`}
                  >
                    {d.withoutIelts ? "MOI / Without IELTS Available" : "IELTS Required (Academy Prep)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Study in Country */}
            <div className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm">
              <h2 className="font-display text-2xl font-black text-white mb-4">
                Why Choose {d.name} with {company.name}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                {d.intro}
              </p>
              <BulletList items={d.why || d.keyBenefits || []} />
            </div>

            {/* Top Partner Universities & Recommended Fields */}
            <div className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm">
              <h2 className="font-display text-2xl font-black text-white mb-4">
                Key Institutions &amp; Academic Programs in {d.name}
              </h2>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {(d.topUnis || d.popularCourses || d.popularFields || []).map((uni) => (
                  <div
                    key={uni}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-black/30 p-4 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-lg shadow-sm border border-blue-400/30 text-blue-400">
                      🎓
                    </span>
                    <span className="text-xs font-bold text-white leading-snug">{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contract Visa Guarantee Notice */}
            <div className="rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-black/60 shadow-xl flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-2xl border border-emerald-400/30 text-emerald-400">
                🛡️
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-bold text-white">
                  Our &quot;No Visa, No Payment&quot; Contract Guarantee for {d.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your visa application is processed under a signed legal contract. Our consultancy service charge is payable strictly after your visa is issued. In the unlikely event of refusal, you owe us zero service charges.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Assessment Form & Hotlines */}
          <aside className="space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 sticky top-24 border border-blue-500/30 bg-gradient-to-b from-[#0E172E] to-[#0A1020] shadow-2xl space-y-5 backdrop-blur-md">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-300">
                <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Authorized Admission Desk</span>
              </div>

              <h3 className="font-display text-xl font-black text-white">
                Apply for {d.name} with {company.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Connect directly with our senior foreign education advisors for university shortlisting, IELTS score targets, scholarship matching, and fast-track submission with file tracking.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3.5 text-xs font-bold text-white shadow-lg transition-all"
                >
                  💬 Chat on WhatsApp with Counselor
                </a>
                <a
                  href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 text-xs font-bold text-white transition-all"
                >
                  📞 Call Hotline: {company.phones[0]}
                </a>
              </div>

              <div className="border-t border-white/10 pt-4 text-xs text-slate-400 space-y-2.5">
                <p>
                  <strong className="text-slate-200">🏛️ Head Office:</strong> {company.address.full}
                </p>
                <p>
                  <strong className="text-slate-200">🕒 Counseling Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong className="text-slate-200">📞 Hotlines:</strong> {company.phones.join(" · ")}
                </p>
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/20 p-3 text-emerald-400 font-bold text-[0.72rem]">
                  ✓ 100% Free Profile Assessment · Service Fee Payable Only After Visa
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </div>
  );
}
