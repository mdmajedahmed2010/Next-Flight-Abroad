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
        title: `Services & Language Academy | ${company.name} — Study Abroad & IELTS | Chittagong & UK`,
      },
      {
        name: "description",
        content:
          `Explore ${company.name} services: British Council Certified Study Abroad Admissions (UK, Canada, Australia, USA, Europe), Fly with Dependent (MRes & PhD), IELTS Academic & General, Spoken English, and Kids English. 100% Free Processing & Zero Service Charge. Head Office: 4091, CJKS Shopping Complex, Kazir Dewri, Chittagong. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      { property: "og:title", content: `Services & Language Academy | ${company.name}` },
      {
        property: "og:description",
        content:
          `Official services of ${company.name}. Start Here, Go Anywhere! British Council Certified admissions, Fly with Dependent MRes programs, IELTS prep, and zero service charges in Chittagong & Birmingham UK.`,
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "dependent-track", label: "Fly with Dependent 👨‍👩‍👧‍👦" },
  { id: "ielts-academy", label: "IELTS & Language Academy" },
  { id: "visa-consultancy", label: "Visa Filing & Pre-Departure" },
];

const comparisonData = [
  {
    feature: "Service Charge & File Opening Fee",
    blueprint: "100% FREE — Zero service charge and zero file opening fees before or after visa",
    traditional: "Demand huge advance file opening fees and unexpected post-visa commission deductions",
    highlight: true,
  },
  {
    feature: "Agent Certification & Ethics",
    blueprint: "Official British Council Certified Agent with trained educational counselors",
    traditional: "Unregistered third-party middlemen without formal training or official certification",
    highlight: true,
  },
  {
    feature: "Fly With Dependent Expertise",
    blueprint: "Specialized admissions in UK MRes, DBA & PhD with spouse full-time work rights",
    traditional: "Limited to ordinary taught programs where spouse accompaniment is restricted",
    highlight: true,
  },
  {
    feature: "Scholarship Maximization",
    blueprint: "Direct partner university tie-ups delivering £3,000–£5,000 and up to 50%–100% waivers",
    traditional: "Generic admissions with little to no effort to negotiate student scholarships",
    highlight: true,
  },
  {
    feature: "Language & IELTS Academy",
    blueprint: "IELTS (Academic & General), Spoken English Fluency, and Kids English Foundation",
    traditional: "Consultancy only; outsourced coaching with disconnected application support",
    highlight: true,
  },
  {
    feature: "Dual Global Offices",
    blueprint: "Head Office at Kazir Dewri, Chittagong & On-shore Liaison Office in Birmingham, UK",
    traditional: "Single local room with zero on-ground support once the student lands abroad",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "Why is Abroad Blueprint's processing 100% free with no service charge?",
    a: "Abroad Blueprint operates as an authorized representative of partner universities across the UK, Canada, Australia, and Europe. Our institution-funded advisory model means students receive complete profile assessment, admission processing, and visa filing with 0 BDT service fee and zero file opening charges.",
  },
  {
    q: "How does the 'Fly with Dependent' pathway work for UK studies?",
    a: "Under UKVI guidelines, international students enrolled in Master by Research (MRes), DBA, or PhD programs are legally permitted to bring their spouse and dependent children. The spouse is granted full-time employment rights in the UK, and children can attend government schools. Abroad Blueprint specializes in research proposal matching and MRes university placement.",
  },
  {
    q: "Can I apply for UK universities through Abroad Blueprint without IELTS?",
    a: "Yes! Several leading UK partner universities accept Medium of Instruction (MOI) certificates from recognized Bangladeshi universities or satisfactory English scores in HSC/A-Levels for qualifying undergraduate and master's candidates. Visit our Chittagong office for a free assessment.",
  },
  {
    q: "What scholarships are available for Bangladeshi students?",
    a: "Our partner institutions in the UK, Canada, and Europe offer merit-based scholarships ranging from £1,500 to £5,000, and up to 50%–100% tuition waivers for eligible candidates. We ensure students apply within early-bird scholarship deadlines.",
  },
  {
    q: "Where is Abroad Blueprint located and how can I visit?",
    a: "Our Bangladesh Head Office is located at 4091, CJKS Shopping Complex (3rd Floor), Kazir Dewri, Chittagong-4000. Our UK Liaison Office is located at 17, Woodgate, Birmingham, United Kingdom. Walk-ins and appointments are welcome Saturday through Thursday.",
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
        eyebrow="Study Abroad & Language Academy"
        title="GLOBAL ADMISSIONS & LANGUAGE EXCELLENCE"
        subtitle="Abroad Blueprint provides British Council Certified admissions to premier universities across the UK, Canada, Australia, USA, and Europe, alongside specialized Fly with Dependent pathways and IELTS coaching."
        image="/assets/abroad-blueprint-banner.jpg"
        imageAlt="Abroad Blueprint official banner with world landmarks"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-none flex items-center gap-2"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4 text-white" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I would like to inquire about Study Abroad admissions and IELTS batches.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900 font-bold flex items-center gap-2"
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
                    ? "bg-[#0B1528] text-amber-300 shadow-md border border-blue-500/40"
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
        activeCategory === "dependent-track" ||
        activeCategory === "visa-consultancy") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Start Here, Go Anywhere!</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Study Abroad <span className="text-blue-600">&amp; Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              চট্টগ্রামের কাজীর দেউড়ি সিজেকেএস শপিং কমপ্লেক্স (৩য় তলা) প্রধান কার্যালয়ে সরাসরি এসে অভিজ্ঞ ব্রিটিশ কাউন্সিল সার্টিফাইড কাউন্সেলরদের সাথে কথা বলুন। শতভাগ ফ্রি প্রসেসিং।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                  <span className="text-emerald-700 font-bold">0 BDT Service Fee</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-blue-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Advisor</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Language Academy & IELTS Courses Section */}
      {(activeCategory === "all" || activeCategory === "ielts-academy") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Abroad Blueprint Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Premier IELTS &amp; Fluency <span className="text-blue-600">Training Courses</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              আইইএলটিএস একাডেমিক ও জেনারেল, স্পোকেন ইংলিশ ফ্লুয়েন্সি এবং শিশুদের ফনিক্স ও বেসিক ইংলিশ কোর্সে চট্টগ্রাম ক্যাম্পাসে ও অনলাইনে ক্লাস চলছে।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-blue-50 border border-blue-200/80">
                      {course.icon || "🎓"}
                    </span>
                    <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">{course.tagline || course.targetScore}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-bangla">{course.desc || course.summary}</p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-[0.72rem] text-slate-700 border border-slate-200/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration:</span>
                      <strong className="text-slate-900">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Schedule:</span>
                      <strong className="text-slate-900">{course.schedule || course.intakeStatus}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Format:</span>
                      <strong className="text-slate-900">{course.format || course.classFormat}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Highlights:
                    </span>
                    <ul className="space-y-1 font-bangla">
                      {(course.features || course.keyFeatures || []).slice(0, 3).map((h) => (
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
                    className="btn-primary w-full text-xs py-2.5 justify-center shadow-md cursor-pointer font-bold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-none flex items-center gap-1.5"
                  >
                    <span>Enroll / Book Demo</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I want to enroll in the ${course.title} batch.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2 justify-center text-slate-900 font-bold flex items-center gap-1.5"
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
          <div className="rounded-3xl border border-slate-800 bg-[#0B1528] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Academic Destinations
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with {company.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Proven pathways for higher studies across the United Kingdom, Canada, Australia, USA, and Europe with zero service charge.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "United Kingdom (UK)",
                  icon: "🇬🇧",
                  desc: "Flagship destination! Fly with Dependent in MRes & PhD, direct Undergrad & Master's, 2-Year PSW, and up to £5,000 merit scholarships.",
                  badge: "Fly with Dependent 👨‍👩‍👧‍👦",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Designated Learning Institutions (DLI), fast-track SDS permits, up to 3-year PGWP, and clear post-graduation immigration pathways.",
                  badge: "DLI & 3-Yr PGWP",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "World Top 100 universities, AUD $24.10/hr minimum wage, 48 hrs/fortnight legal work rights, and regional post-study visas up to 4 years.",
                  badge: "High Wage & Extended PSW",
                },
                {
                  title: "United States (USA)",
                  icon: "🇺🇸",
                  desc: "Ivy League & top public universities, up to $25,000/yr scholarships, 36-month STEM OPT, and rigorous F-1 visa interview prep.",
                  badge: "STEM OPT & Scholarships",
                },
                {
                  title: "Europe (Germany, Malta, Cyprus)",
                  icon: "🇪🇺",
                  desc: "€0 tuition at German public universities, affordable English-taught degrees in Malta and Cyprus, and free travel across 29 Schengen nations.",
                  badge: "Zero / Low Tuition Options",
                },
                {
                  title: "Ireland",
                  icon: "🇮🇪",
                  desc: "European technology & pharmaceutical capital, 2-year Third Level Graduate Scheme work visa, and English-speaking environment.",
                  badge: "Tech Capital & Fast PR",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-blue-400 hover:text-blue-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
                  >
                    Check Eligibility (0 BDT Fee) →
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
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Blueprint Standard</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Trust <span className="text-blue-600">{company.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our British Council accreditation, Fly with Dependent expertise, and zero service charges against traditional agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0B1528] text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Feature</th>
                  <th className="p-4 sm:p-5 text-amber-300 font-extrabold bg-[#121E36]">
                    ★ {company.name}
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "transition-colors hover:bg-slate-50",
                      row.highlight && "bg-blue-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-blue-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{row.blueprint}</span>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 4-Step Global Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            From free profile evaluation in Chittagong to IELTS coaching, university offer letters, and visa approval.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-blue-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-blue-600">{step.step}</span>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs font-semibold text-blue-600">{step.bengaliTitle}</p>
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
            Clear, transparent answers about Fly with Dependent, zero service charge processing, and IELTS coaching.
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
                    ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20"
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
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
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
