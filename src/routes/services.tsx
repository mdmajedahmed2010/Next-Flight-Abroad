import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  IconCheck,
  IconSparkles,
  IconWhatsApp,
} from "@/components/ui-blocks";
import { company, services, courses, processSteps } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: `Services & Japanese Academy | ${company.name} — Study in Japan, JLPT N5/N4 & SSW`,
      },
      {
        name: "description",
        content:
          `Explore ${company.name} services: Study in Japan Admissions (Tokyo, Osaka, Kyoto, Nagoya, Fukuoka), Japanese Language Academy (N5/N4/N3), SSW Work Visas, COE Processing & Embassy Interview Preparation. Dhaka HQ: ${company.address.full}.`,
      },
      { property: "og:title", content: `Services & Japanese Academy | ${company.name}` },
      {
        property: "og:description",
        content:
          `Official services of ${company.name}. Connecting Possibilities. Premier Japan higher education admissions, Japanese Language Academy, and SSW career placement.`,
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study in Japan Admissions" },
  { id: "language-academy", label: "Japanese Language Academy" },
  { id: "ssw-support", label: "SSW Work Visas & Career" },
  { id: "visa-audit", label: "COE & Visa Documentation" },
];

const comparisonData = [
  {
    feature: "Core Brand Philosophy",
    oneTech: "CONNECTING POSSIBILITIES — 100% transparent counseling & zero hidden fees",
    traditional: "Hidden charges, exaggerated promises, and uncertain outcomes",
    highlight: true,
  },
  {
    feature: "Flagship Destination Focus",
    oneTech: "Specialized in Japan 🇯🇵: Language Schools, Senmon Gakko, Universities & SSW",
    traditional: "Generic agency lacking Japan Immigration (Nyukan) expertise",
    highlight: true,
  },
  {
    feature: "In-House Japanese Language Academy",
    oneTech: "JLPT & NAT-TEST N5, N4, N3 interactive courses with native audio-visual studio",
    traditional: "No in-house Japanese training or completely outsourced without quality control",
    highlight: true,
  },
  {
    feature: "School & Embassy Interview Coaching",
    oneTech: "One-on-one Jikoshoukai drills simulating school principal & Nyukan verification calls",
    traditional: "No interview preparation, leading to avoidable visa rejections",
    highlight: true,
  },
  {
    feature: "COE Approval Track Record",
    oneTech: "99%+ COE (Certificate of Eligibility) approval record with verified student reels",
    traditional: "High rejection rate due to faulty sponsor documentation and financial gaps",
    highlight: true,
  },
  {
    feature: "Post-Arrival Welfare in Japan",
    oneTech: "Tokyo Support Desk: Airport pickup, residence registration, bank accounts & Arubaito",
    traditional: "Zero support once the student lands abroad",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "Why is Japan the flagship destination at OneTech Education?",
    a: "Japan offers world-renowned safety, cutting-edge technology, and unmatched student benefits: legal 28 hours per week part-time work rights (¥1,100 to ¥1,400/hr), affordable initial tuition, 99%+ COE approval rates, and smooth pathways to high-paying permanent employment after graduation.",
  },
  {
    q: "What courses are taught at the OneTech Japanese Language Academy?",
    a: "Our academy delivers intensive JLPT & NAT-TEST N5 (Beginner), N4 (Elementary / SSW level), and N3 (Intermediate) batches using the Minna no Nihongo curriculum. Classes feature native audio-visual drills, Kanji flashcards, and simulated mock exams at our Mirpur-10 studio.",
  },
  {
    q: "Can I apply for a Japan student visa without prior Japanese knowledge?",
    a: "Yes! You can enroll in our 2.5-month N5 foundation batch at our Mirpur-10 center or online Zoom class. By the time your school interview and COE application are submitted, you will be well prepared to pass the NAT-TEST or JLPT N5 exam.",
  },
  {
    q: "What is the SSW (Specified Skilled Worker) visa for Japan?",
    a: "The SSW (Tokutei Ginou) is a Japanese government employment visa allowing qualified candidates to work in industries such as Caregiving (Kaigo), Food Service, Hospitality, and Construction. We help candidates prepare for the N4 Japanese exam, pass industry skill evaluations, and secure employment contracts.",
  },
  {
    q: "Where is OneTech Education located in Dhaka?",
    a: "Our Principal Head Office and Japanese Language Academy are located at Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh (just steps from the Mirpur-10 Metro Rail Station).",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  return (
    <>
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Japan Education Advisory & Language Academy"
        title="JAPAN HIGHER EDUCATION & JAPANESE LANGUAGE ACADEMY"
        subtitle="OneTech Education (ওয়ানটেক এডুকেশন) provides certified admissions to Japanese Language Schools and Universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka, alongside our premier Japanese Language Academy (N5/N4/N3) and SSW career matching."
        image="/banner.png"
        imageAlt="OneTech Education official banner"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold"
            >
              <span>Book Free Japan Assessment</span>
              <IconSparkles className="w-4 h-4 text-white" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I would like to inquire about Japanese Language School admission, N5/N4 courses, and SSW work visas.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900 font-bold"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {company.phones[0]}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Service Category Filter Tabs */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[69px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="section-shell">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-[#0f172a] text-red-400 shadow-md border border-red-500/40"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Study Abroad & Advisory Services Grid */}
      {(activeCategory === "all" ||
        activeCategory === "study-abroad" ||
        activeCategory === "ssw-support" ||
        activeCategory === "visa-audit") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Connecting Possibilities</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Japan Admissions <span className="text-red-600">& Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              আমাদের মিরপুর-১০ প্রধান কার্যালয় ও ল্যাঙ্গুয়েজ স্টুডিওতে সরাসরি এসে অভিজ্ঞ সিনিয়র জাপান কাউন্সেলরদের সাথে বসুন। শতভাগ স্বচ্ছ ভর্তি ও ভিসা গাইডলাইন।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-red-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-red-50 text-red-800 border border-red-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-bangla">{service.desc}</p>

                  <div className="pt-2 border-t border-slate-100">
                    <BulletList items={service.features} />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">Admission Open</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Counselor</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Language Academy & Japanese Courses Section */}
      {(activeCategory === "all" || activeCategory === "language-academy") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>OneTech Japanese Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Premier Japanese Language <span className="text-red-600">Training Programs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              জেএলপিটি ও ন্যাট-টেস্টে কাঙ্ক্ষিত স্কোর অর্জন, স্পোকেন জাপানিজ ফ্লুয়েন্সি এবং স্কুল ও এম্বাসি ইন্টারভিউয়ের জন্য আমাদের আধুনিক ল্যাঙ্গুয়েজ স্টুডিও।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-red-50 border border-red-200/80">
                      {course.icon || "⛩️"}
                    </span>
                    <span className="rounded-full bg-red-100 text-red-900 border border-red-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-700 mt-0.5">{course.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-bangla">{course.desc}</p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-[0.72rem] text-slate-700 border border-slate-200/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration:</span>
                      <strong className="text-slate-900">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Schedule:</span>
                      <strong className="text-slate-900">{course.schedule}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Format:</span>
                      <strong className="text-slate-900">{course.format}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Highlights:
                    </span>
                    <ul className="space-y-1 font-bangla">
                      {course.features.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-primary w-full text-xs py-2.5 justify-center shadow-md cursor-pointer font-bold"
                  >
                    <span>Enroll Now</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I want to enroll in the ${course.title} batch.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2 justify-center text-slate-900 font-bold"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Key Flagship Destinations Showcase */}
      {(activeCategory === "all" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0f172a] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-red-500/20 text-red-400 border border-red-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Flagship Destinations & Global Opportunities
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with {company.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Featured study destinations across Japan (Flagship), UK, Malaysia, Australia, Canada, and Europe.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Japan (Tokyo, Osaka, Fukuoka)",
                  icon: "🇯🇵",
                  desc: "Premier flagship destination! 28 hours/week legal work (¥1,100–¥1,400/hr), high COE approval rate, and clear career transition.",
                  badge: "Flagship Destination",
                },
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's degrees, 2-year Graduate Route Post Study Work (PSW), and admissions open for Jan, May, and September intakes.",
                  badge: "1-Yr Masters & PSW",
                },
                {
                  title: "Malaysia",
                  icon: "🇲🇾",
                  desc: "Affordable UK/Australian twinning dual degrees, fast EMGS visa processing, and budget-friendly living costs.",
                  badge: "Fast Visa & Budget",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "Leading university network, post-study work rights up to 4+ years, spouse work rights, and Subclass 500 visa filing.",
                  badge: "High Visa Ratio",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Designated Learning Institutions (DLI), up to 3-year PGWP, and clear permanent residency (PR) pathways.",
                  badge: "PGWP & PR Track",
                },
                {
                  title: "Finland (Nordic)",
                  icon: "🇫🇮",
                  desc: "World-class Nordic education, 30 hours per week student work rights, and post-graduation residence permit.",
                  badge: "Nordic Quality",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-red-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-red-400 hover:text-red-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
                  >
                    Check Eligibility →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Transparency Comparison Table */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Honesty & Excellence</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Trust <span className="text-red-600">{company.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our verified Japan specialization, in-house Japanese Academy, and Tokyo support against ordinary consulting firms.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-red-400 font-extrabold bg-[#0f172a]">
                    ★ {company.name}
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Ordinary Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "transition-colors hover:bg-slate-50",
                      row.highlight && "bg-red-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-red-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{row.oneTech}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Step-by-Step Roadmap */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 4-Step Japan Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            From free profile assessment at Gemcon EL Mercado (Lift-09), Mirpur-10 to language training, COE approval, and flying to Japan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-red-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-red-600">{step.step}</span>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs font-semibold text-red-600">{step.bengaliTitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Service FAQs Accordion */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, transparent answers about Study in Japan admissions, N5/N4 courses, SSW work visas, and COE procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white border-red-500 shadow-md ring-1 ring-red-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-sm sm:text-base text-slate-900"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                      isOpen ? "bg-red-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <CtaBand />
    </>
  );
}
