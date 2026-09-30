import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: `Study Destinations & Global Admissions | ${company.name} — Beanibazar, Sylhet` },
      {
        name: "description",
        content:
          `Explore global study destinations guided by ${company.name}: United Kingdom (Flagship for Sylhet), Canada, United States, Australia, and Europe. Zero file opening fee. Campuses at Azir Market & Somobay Market, College Road, Beanibazar, Sylhet. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      { property: "og:title", content: `Study Destinations & Global Admissions | ${company.name}` },
      {
        property: "og:description",
        content:
          `Your Gateway to Foreign University Admissions with ${company.name} (${company.taglineBangla}) — Get Ready For The World.`,
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const regions = ["All", "Europe", "North America", "Oceania"];

  const filtered = destinations.filter((d) => {
    const matchesRegion =
      activeRegion === "All" ||
      d.region === activeRegion ||
      (activeRegion === "Europe" && (d.region === "Europe" || d.slug === "uk" || d.slug === "europe")) ||
      (activeRegion === "North America" && (d.region === "North America" || d.slug === "usa" || d.slug === "canada")) ||
      (activeRegion === "Oceania" && (d.region === "Oceania" || d.slug === "australia"));
    const matchesSearch =
      (d.name || d.country || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.popularFields || d.popularCourses || []).some((f) => f.toLowerCase().includes(search.toLowerCase())) ||
      (d.tagline || "").toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Global University Network"
        title="Official Study Destinations & Visa Pathways"
        subtitle={`Explore university admission criteria, IELTS requirements, post-study work rights (PSW / PGWP / OPT), living costs, and visa guidelines guided by ${company.name}.`}
        image="/milestone-celebration.jpg"
        imageAlt={`${company.name} study destinations`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Destinations" }]} />
      </PageHero>

      {/* Directory & Filters */}
      <section className="section-shell py-14 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeRegion === reg
                    ? "bg-sky-600 text-white shadow-sm border border-sky-600 font-extrabold"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {reg} {reg === "All" ? `(${destinations.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search country or program..."
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-xs text-slate-800 outline-none shadow-sm focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            Showing <strong>{filtered.length}</strong> of {destinations.length} verified
            destinations
          </p>
          <span className="text-sky-700 font-bold">
            ✓ Free Profile Assessment at Azir Market &amp; Somobay Market, Beanibazar Campuses
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.slug}
              className="rounded-3xl p-6 flex flex-col justify-between border border-slate-200 bg-white hover:border-sky-500/50 shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{d.flag}</span>
                    <div>
                      <h3 className="font-display text-lg font-black text-slate-900">{d.name}</h3>
                      <span className="text-xs font-semibold text-slate-500">{d.region}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-sky-50 border border-sky-200 px-2.5 py-0.5 text-xs font-bold text-sky-800">
                    {d.pswv}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed font-medium">{d.intro}</p>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Avg Tuition:</span>
                    <span className="font-bold text-slate-900">{d.avgTuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Avg Living:</span>
                    <span className="font-bold text-slate-900">{d.avgLiving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Main Intakes:</span>
                    <span className="font-bold text-slate-900">{d.intakes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Scholarships / Perks:</span>
                    <span className="font-bold text-sky-700">{d.scholarships}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.popularFields.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="rounded-lg bg-slate-100 px-2 py-1 text-[0.68rem] font-medium text-slate-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {d.withoutIelts ? "✅ MOI / Without IELTS Options" : "IELTS Required"}
                </span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-sky-700 transition-colors cursor-pointer"
                >
                  Explore Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
