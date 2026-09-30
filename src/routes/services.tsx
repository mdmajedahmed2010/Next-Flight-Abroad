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
        title: `Services & IELTS Academy | ${company.name} — Study Abroad & Language Academy | Beanibazar, Sylhet`,
      },
      {
        name: "description",
        content:
          `Explore ${company.name} services: Study Abroad Admissions (UK, Canada, USA, Australia, Europe), IELTS Academic & General, Beanibazar's First Computer-Delivered (CD) Mock Lab, Spoken English (Speakers' Mania), and Kids English. Beanibazar Campuses: ${company.address.full}. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      { property: "og:title", content: `Services & IELTS Academy | ${company.name}` },
      {
        property: "og:description",
        content:
          `Official services of ${company.name}. Get Ready For The World. Premier foreign university admissions, IELTS Band 7+ prep, CD Mock Lab, and English fluency in Beanibazar, Sylhet.`,
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "ielts-academy", label: "IELTS & CD Mock Lab" },
  { id: "spoken-english", label: "Spoken & Kids English" },
  { id: "visa-consultancy", label: "Visa Filing & Support" },
];

const comparisonData = [
  {
    feature: "File Assessment Fee",
    milestone: "100% FREE — Zero file opening charges before university evaluation",
    traditional: "Demand high upfront non-refundable charges just to check mark sheets",
    highlight: true,
  },
  {
    feature: "IELTS Mock Lab Facilities",
    milestone: "Beanibazar's First & Only Computer-Delivered (CD) 30+ Seat Lab with authentic software",
    traditional: "Only paper-based photocopies or no mock lab environment whatsoever",
    highlight: true,
  },
  {
    feature: "IDP Testing Partnership",
    milestone: "Official IDP Education partner for direct IELTS exam booking & verified practice tests",
    traditional: "Unregistered third-party middlemen without official testing accreditation",
    highlight: true,
  },
  {
    feature: "Band 7.0+ Student Incentives",
    milestone: "Instant cash prize rewards and grand stage honoring ceremony for high achievers",
    traditional: "No student incentives or recognition",
    highlight: true,
  },
  {
    feature: "Speaking & Fluency Training",
    milestone: "Weekly 'Speakers' Mania' stage contests, mic presentations, and confidence drills",
    traditional: "Confined to rote grammar memorization without practical fluency practice",
    highlight: true,
  },
  {
    feature: "Senior Faculty Accessibility",
    milestone: "Direct mentorship by Saleh Ahmed Shaheen & Ahbabur Rahman Tahmid in Beanibazar",
    traditional: "Inexperienced junior reception staff without study abroad qualifications",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "Why is Milestone Beanibazar considered the leading IELTS academy in the area?",
    a: "Milestone is Beanibazar's premier language academy featuring certified Cambridge & IDP-standard mentors, Beanibazar's first dedicated Computer-Delivered (CD) IELTS Mock Test Lab with 30+ workstations, weekly 'Speakers' Mania' fluency contests, and proven cash prize rewards for students achieving Band 7.0 and above.",
  },
  {
    q: "Can I apply for UK universities through Milestone Beanibazar without IELTS?",
    a: "Yes! Many accredited UK partner universities accept MOI (Medium of Instruction) certificates or high English scores in HSC/A-Levels for qualifying undergraduate and master's candidates. Our senior counselors at Azir Market evaluate your eligibility for free.",
  },
  {
    q: "What is special about Beanibazar's First Computer-Delivered (CD) IELTS Mock Lab?",
    a: "The CD IELTS exam is taken on a computer with results in just 1-5 days. Our lab in Azir Market (2nd Floor) simulates the exact real IDP/British Council test interface, timed modules, and individual noise-cancelling headphones so students feel completely confident on official exam day.",
  },
  {
    q: "Does Milestone Beanibazar charge any file opening fee for study abroad?",
    a: "No. Milestone Beanibazar has a strict zero file opening charge policy before university assessment. You receive 100% transparent counseling regarding admission requirements, course fees, and visa criteria without hidden costs.",
  },
  {
    q: "Where are Milestone's campuses located in Beanibazar?",
    a: "Our Main Campus & CD IELTS Lab is located at Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet. Our Annex Admissions Office is located at Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet.",
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
        eyebrow="Study Abroad & IELTS Language Academy"
        title="GLOBAL ADMISSIONS & LANGUAGE EXCELLENCE"
        subtitle="Milestone Beanibazar (MICU) provides certified admissions to premier universities across the UK, Canada, USA, Australia, and Europe, alongside Beanibazar's first Computer-Delivered IELTS Lab and Spoken English academy."
        image="/milestone-celebration.jpg"
        imageAlt="Milestone Beanibazar celebration gathering"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none flex items-center gap-2"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4 text-white" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I would like to inquire about IELTS batches and Study Abroad university admissions.`,
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
                    ? "bg-[#0f172a] text-sky-400 shadow-md border border-sky-500/40"
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
        activeCategory === "visa-consultancy") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Get Ready For The World</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Study Abroad <span className="text-sky-600">&amp; Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              বিয়ানীবাজার কলেজ রোডের আজির মার্কেট ও সমবায় মার্কেট ক্যাম্পাসে সরাসরি এসে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের সাথে কথা বলুন। শতভাগ স্বচ্ছ ভর্তি ও ভিসা প্রসেসিং।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-sky-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                  <span className="text-slate-500 font-semibold">Admissions Active</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-sky-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
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
      {(activeCategory === "all" ||
        activeCategory === "ielts-academy" ||
        activeCategory === "spoken-english") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Milestone Language &amp; IELTS Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Premier IELTS &amp; Fluency <span className="text-sky-600">Training Courses</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              আইইএলটিএস একাডেমিক ও জেনারেল, বিয়ানীবাজারের প্রথম সিডি মক ল্যাব, স্পোকেন ইংলিশ এবং বাচ্চাদের ফনিক্স কোর্সে ভর্তি চলছে।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between hover:border-sky-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-sky-50 border border-sky-200/80">
                      {course.icon || "🎓"}
                    </span>
                    <span className="rounded-full bg-sky-100 text-sky-900 border border-sky-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 mt-0.5">{course.tagline || course.targetScore}</p>
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
                    className="btn-primary w-full text-xs py-2.5 justify-center shadow-md cursor-pointer font-bold bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none flex items-center gap-1.5"
                  >
                    <span>Enroll / Book Demo</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I want to enroll in the ${course.title} batch at Beanibazar Campus.`,
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
          <div className="rounded-3xl border border-slate-800 bg-[#0f172a] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Academic Destinations
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with {company.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Proven pathways for higher studies across the United Kingdom, Canada, USA, Australia, and European destinations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "United Kingdom (UK)",
                  icon: "🇬🇧",
                  desc: "Premier flagship destination! 1-year master's degrees, 2-year Graduate Route PSW, and direct admission with or without IELTS based on qualifications.",
                  badge: "Sylhet Flagship · Fast Track",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "World-class public colleges and universities, up to 3-year PGWP post-graduation work permits, and stable career settlement.",
                  badge: "PGWP & Career Growth",
                },
                {
                  title: "United States (USA)",
                  icon: "🇺🇸",
                  desc: "High-ranking universities, generous STEM OPT extensions up to 3 years, and intensive F-1 visa mock interview coaching.",
                  badge: "STEM OPT & Scholarships",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "Top Group of Eight universities, post-study work visas up to 4+ years, and spouse work rights on Subclass 500.",
                  badge: "Spouse Visa & PSW",
                },
                {
                  title: "Europe & Schengen",
                  icon: "🇪🇺",
                  desc: "Affordable and tuition-free options in Germany, Sweden, Denmark, Poland, and Finland with Schengen mobility.",
                  badge: "Low Tuition & English Taught",
                },
                {
                  title: "Ireland",
                  icon: "🇮🇪",
                  desc: "European technology & pharma hub, 2-year Third Level Graduate Scheme work visa, and English-speaking environment.",
                  badge: "Tech Capital & Fast PR",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-sky-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-sky-400 bg-sky-500/20 px-2 py-0.5 rounded-full border border-sky-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-sky-400 hover:text-sky-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Milestone Standard</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Trust <span className="text-sky-600">{company.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our verified IDP partnership, Beanibazar&apos;s first CD IELTS Lab, and zero file opening charges against traditional agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Feature</th>
                  <th className="p-4 sm:p-5 text-sky-400 font-extrabold bg-[#0f172a]">
                    ★ {company.name} (Beanibazar)
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
                      row.highlight && "bg-sky-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-sky-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{row.milestone}</span>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 4-Step Global Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            From free profile evaluation in Beanibazar to IELTS coaching, university offer letters, and visa approval.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-sky-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-sky-600">{step.step}</span>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs font-semibold text-sky-600">{step.bengaliTitle}</p>
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
            Clear, transparent answers about IELTS course preparation, CD Mock Lab sessions, and UK/Canada university admissions.
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
                    ? "bg-white border-sky-500 shadow-md ring-1 ring-sky-500/20"
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
                      isOpen ? "bg-sky-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
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
