import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, CtaBand, PageHero, IconSparkles } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: `Global Study Destinations | ${company.name}` },
      {
        name: "description",
        content: `Explore global higher study destinations with ${company.name}: South Korea (Kyungsung University), Greece (100% Risk-Free European pathway), Malta, United Kingdom, USA, Canada, Australia, and Schengen Europe. Head Office: ${company.address.full}.`,
      },
      { property: "og:title", content: `Study Destinations & University Admissions | ${company.name}` },
      {
        name: "og:description",
        content: `Authorized university admissions, 'No Visa, No Payment' contract guarantee, and scholarship advisory by ${company.name}.`,
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const regions = [
    "All",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
  ];

  const filtered = destinations.filter((d) => {
    const matchesRegion =
      activeRegion === "All" ||
      d.region.toLowerCase().includes(activeRegion.toLowerCase()) ||
      (activeRegion === "Asia" && (d.region === "Asia" || d.slug === "south-korea")) ||
      (activeRegion === "Europe" && (d.region === "Europe" || d.slug === "greece" || d.slug === "malta" || d.slug === "uk" || d.slug === "europe")) ||
      (activeRegion === "North America" && (d.region === "North America" || d.slug === "usa" || d.slug === "canada")) ||
      (activeRegion === "Oceania" && (d.region === "Oceania" || d.slug === "australia"));

    const matchesSearch =
      (d.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.popularFields || []).some((f) => f.toLowerCase().includes(search.toLowerCase())) ||
      (d.tagline || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.intro || "").toLowerCase().includes(search.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Official Global Study Pathways"
        title="GLOBAL STUDY DESTINATIONS & VISA PATHWAYS"
        subtitle={`Explore verified university admission criteria, post-study work rights, living costs, scholarship opportunities, and our 'No Visa, No Payment' contract guarantee with ${company.name}.`}
        image="/banner.jpg"
        imageAlt={`${company.name} official study destinations`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Destinations" }]} />
      </PageHero>

      {/* Directory & Interactive Filters */}
      <section className="section-shell py-14 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer",
                  activeRegion === reg
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500 font-extrabold"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {reg} {reg === "All" ? `(${destinations.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full max-w-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search country, course, or university..."
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs text-white placeholder-slate-400 outline-none shadow-sm focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        {/* Results Counter & Transparency Notice */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            Showing <strong className="text-white">{filtered.length}</strong> of {destinations.length} verified destinations
          </p>
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
            <IconSparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Contract Guarantee: Service Charge Payable Strictly After Visa Issuance</span>
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <motion.article
              key={d.slug}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl drop-shadow-md">{d.flag}</span>
                    <div>
                      <h3 className="font-display text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                        {d.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400">{d.region}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1 text-[0.68rem] font-bold text-blue-300">
                    {d.pswv}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed font-medium line-clamp-3">
                  {d.intro}
                </p>

                <div className="mt-5 rounded-2xl bg-black/40 p-4 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Avg Tuition:</span>
                    <span className="font-bold text-white">{d.avgTuition}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Living Expenses:</span>
                    <span className="font-bold text-slate-200">{d.avgLiving}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Main Intakes:</span>
                    <span className="font-bold text-slate-200">{d.intakes}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/5 pt-2">
                    <span className="text-slate-400 font-medium">Scholarships:</span>
                    <span className="font-bold text-emerald-400">{d.scholarships}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.popularFields.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[0.68rem] font-medium text-slate-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {d.withoutIelts ? "✅ MOI / Without IELTS Option" : "IELTS Required"}
                </span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="rounded-full bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-all shadow-md hover:shadow-blue-500/25 cursor-pointer"
                >
                  Explore Guide →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
