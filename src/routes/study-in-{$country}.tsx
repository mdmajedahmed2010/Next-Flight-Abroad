import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, RegisterButton } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/study-in-{$country}")({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.country);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.destination;
    const title = d
      ? `Study in ${d.name} | ${company.name} — Admission & Visa Guidance | Beanibazar`
      : `Study Abroad Destinations | ${company.name}`;
    const description = d
      ? `${d.tagline}. University admissions, 100% genuine visa guidance, IELTS requirements, and Study Gap assessment for ${d.name} with ${company.name} (${company.taglineBangla}). Beanibazar Campuses: ${company.address.full}. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`
      : `Study abroad admissions and language academy coaching from ${company.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();

  const whatsappHref = () => {
    const text = `Hello ${company.name}! I want to explore higher education pathways in ${d.name}.\n\nPlease guide me on university admission requirements, partner institutions, scholarships, and upcoming intake deadlines.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow={`${d.flag} ${d.region} · Official Destination`}
        title={`Study in ${d.name}`}
        subtitle={d.tagline}
        image="/milestone-celebration.jpg"
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
            <RegisterButton label={`Free ${d.name} Assessment`} className="px-8 py-3.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none" />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              <span>💬 WhatsApp About {d.name}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* Main Country Content & Sidebar */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Left Content */}
          <div className="space-y-10">
            {/* Quick Metrics Matrix */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                Key Facts for Applicants · {d.name}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Average Tuition:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgTuition}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Living Expenses:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgLiving}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">
                    Post-Study Work Visa:
                  </span>
                  <span className="font-bold text-sky-600 mt-1 block">{d.pswv}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Major Intakes:</span>
                  <span className="font-bold text-slate-900 mt-1 block">
                    {Array.isArray(d.intakes) ? d.intakes.join(" · ") : d.intakes}
                  </span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Scholarships / Perks:</span>
                  <span className="font-bold text-sky-700 mt-1 block">{d.scholarships}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">
                    Language / Test Requirement:
                  </span>
                  <span
                    className={`font-bold mt-1 block ${d.withoutIelts ? "text-emerald-600" : "text-slate-700"}`}
                  >
                    {d.withoutIelts ? "MOI / Without IELTS Options Available" : "IELTS / Test Required"}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Study in Country */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Why Choose {d.name} with {company.name}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {d.intro}
              </p>
              <BulletList items={d.why || d.keyBenefits || []} />
            </div>

            {/* Top Partner Universities */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Key Institutions &amp; Opportunities in {d.name}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {(d.topUnis || d.popularCourses || d.popularFields || []).map((uni) => (
                  <div
                    key={uni}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-lg shadow-sm border border-sky-200 text-sky-600">
                      🎓
                    </span>
                    <span className="text-xs font-bold text-slate-800">{uni}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Assessment Form & Hotlines */}
          <aside className="space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 sticky top-24 border border-sky-200 bg-white shadow-md space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700">
                Senior Counselor Support
              </span>
              <h3 className="font-display text-lg font-black text-slate-900">
                Apply for {d.name} with {company.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Connect directly with our senior foreign education counselors for university shortlisting,
                IELTS score targets, study gap assessment, and fast-track offer letter &amp; visa filing.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  💬 Chat on WhatsApp with Counselor
                </a>
                <a
                  href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                  className="btn-secondary w-full text-xs py-3 text-center justify-center text-slate-800 font-bold"
                >
                  📞 Call Hotline: {company.phones[0]}
                </a>
              </div>

              <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>🏛️ Main Campus:</strong> {company.branches[0]?.address}
                </p>
                <p>
                  <strong>📍 Annex Campus:</strong> {company.branches[1]?.address}
                </p>
                <p>
                  <strong>💻 CD IELTS Lab:</strong> Azir Market (2nd Floor), Beanibazar
                </p>
                <p>
                  <strong>🕒 Counseling Hours:</strong> {company.hours}
                </p>
                <p className="text-sky-600 font-bold">
                  ✓ Free 1-on-1 Profile Assessment Guaranteed
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
