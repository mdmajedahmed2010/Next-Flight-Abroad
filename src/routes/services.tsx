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
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: `Services & Language Academy | ${company.name} — Study Abroad & IELTS | Dhaka`,
      },
      {
        name: "description",
        content: `Explore ${company.name} services: Study Abroad Admissions (South Korea, Greece, Malta, UK, USA, Canada, Australia), Contract Visa Facility ("No Visa, No Payment"), IELTS Band 7.5+, Spoken English, and Kids Academy. Head Office: ${company.address.full}. Hotlines: ${company.phones.join(", ")}.`,
      },
      { property: "og:title", content: `Services & Language Academy | ${company.name}` },
      {
        property: "og:description",
        content: `Official services of ${company.name}. Gateway to Global Education ✈️! Study Abroad, IELTS prep, 'No Visa, No Payment' contract guarantee, and Khilgaon Dhaka head office.`,
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "contract-visa", label: "Contract Visa ('No Visa, No Payment') 🛡️" },
  { id: "ielts-academy", label: "IELTS & Language Academy" },
  { id: "admissions-counseling", label: "Profile Assessment & Mock Interviews" },
];

const comparisonData = [
  {
    feature: "Contract Guarantee",
    blueprint: "Legal 'No Visa, No Payment' contract — consultancy fees payable strictly after visa grant",
    traditional: "Non-refundable upfront deposits and hidden file processing charges",
    highlight: true,
  },
  {
    feature: "Head Office Transparency",
    blueprint: "Prime accessible location: 338/14, Block-C, Khilgaon, Dhaka (Beside Ansar Head Office)",
    traditional: "Temporary desks or shifting residential rooms with zero accountability",
    highlight: true,
  },
  {
    feature: "Specialized Flagship Routes",
    blueprint: "South Korea (Kyungsung University, Busan) & Greece (100% Risk-Free, No IELTS)",
    traditional: "Limited generic sub-par colleges with high refusal rates",
    highlight: true,
  },
  {
    feature: "In-House Language Academy",
    blueprint: "IELTS Academic/General, Spoken English Fluency, and Kids Phonics Studio (Ages 5–14)",
    traditional: "Outsourced third-party coaching or zero language support",
    highlight: true,
  },
  {
    feature: "Document Drafting & Mock Drill",
    blueprint: "Course-specific SOP writing, financial dossier audit, and realistic embassy mock interviews",
    traditional: "Generic copy-pasted templates triggering visa refusal",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does Next Flight Abroad's 'No Visa, No Payment' facility work?",
    a: "We process your higher education visa under a formal written agreement. Our consultancy service charge is payable strictly after your student visa is granted and stamped. If the visa is not granted, you owe us zero consultancy service charge.",
  },
  {
    q: "Where is Next Flight Abroad's head office located?",
    a: "Our Central Head Office is located at 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219, Bangladesh (Beside Ansar Head Office, Khilgaon). You are welcome Saturday through Thursday between 9:30 AM and 7:30 PM for face-to-face evaluation.",
  },
  {
    q: "What makes South Korea (Kyungsung University) and Greece study routes special?",
    a: "South Korea offers rapid D-4-1 Korean Language & D-2 Bachelor's/Master's admissions with 30% to 100% scholarships at Kyungsung University, Busan. Greece is a 100% Risk-Free European pathway with NO IELTS requirement, where full tuition is payable strictly after visa approval with complete 29-country Schengen mobility.",
  },
  {
    q: "What English language courses are offered by Next Flight Abroad?",
    a: "We offer comprehensive IELTS Academic, IELTS General Training (Target Band 7.5+), Spoken English Fluency Studio, and Kids English & Junior Phonics Academy (ages 5–14) taught by certified mentors at our Khilgaon campus and interactive online classes.",
  },
  {
    q: "How do I book a free profile assessment?",
    a: "You can visit our Khilgaon Dhaka office directly or reach out via our official hotlines: +880 1568-019270 (WhatsApp), +880 1903-152643, +880 1843-376714, or +880 1705-614388.",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Study Abroad & Language Academy"
        title="GLOBAL ADMISSIONS, CONTRACT VISA & LANGUAGE ACADEMY"
        subtitle={`${company.name} — Gateway to Higher Education Abroad with 'No Visa, No Payment' contract guarantee, South Korea & European pathways, and premier IELTS & Kids Academy.`}
        image="/banner.jpg"
        imageAlt={`${company.name} official banner`}
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center gap-2"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4 text-white" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I would like to inquire about your Study Abroad & Language Academy services.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all"
            >
              <IconWhatsApp className="w-4 h-4 text-white" />
              <span>WhatsApp: {company.phones[0]}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Service Category Filter Tabs */}
      <section className="bg-[#0A1020]/95 border-b border-white/10 py-6 sticky top-[69px] z-30 shadow-md backdrop-blur-md">
        <div className="section-shell">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10",
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
        activeCategory === "contract-visa" ||
        activeCategory === "admissions-counseling") && (
        <section className="section-shell py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Gateway to Global Education</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Comprehensive Study Abroad <span className="text-blue-400">&amp; Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Head Office: 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219 (Beside Ansar Head Office). Visit us for an in-person profile assessment.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 shadow-2xl flex flex-col justify-between hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all backdrop-blur-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-3 rounded-2xl bg-blue-500/15 border border-blue-400/20">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 px-3 py-1 text-[0.68rem] font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{service.desc}</p>

                  <div className="pt-3 border-t border-white/10">
                    <BulletList items={service.features} />
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold">No Visa, No Payment</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Advisor</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Language Academy & IELTS Courses Section */}
      {(activeCategory === "all" || activeCategory === "ielts-academy") && (
        <section className="section-shell py-16 sm:py-20 border-t border-white/10 bg-[#0A1020]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{company.name} Language Academy</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Premier IELTS &amp; Fluency <span className="text-blue-400">Training Courses</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Certified Band 7.5+ IELTS instructors, interactive Spoken English studios, and phonics-based Kids English programs at our Khilgaon Dhaka center and online.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <motion.div
                key={course.slug}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 shadow-2xl flex flex-col justify-between hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all backdrop-blur-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-3 rounded-2xl bg-blue-500/15 border border-blue-400/20">
                      {course.icon || "🎓"}
                    </span>
                    <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-400 mt-1">{course.tagline || course.targetScore}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{course.desc || course.summary}</p>

                  <div className="space-y-2 rounded-2xl bg-black/40 p-4 text-[0.72rem] text-slate-300 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Duration:</span>
                      <strong className="text-white">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Schedule:</span>
                      <strong className="text-white">{course.schedule || course.intakeStatus}</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Class Format:</span>
                      <strong className="text-blue-300">{course.format || course.classFormat}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Course Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {(course.features || course.keyFeatures || []).slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                          <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 mt-5 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-primary w-full text-xs py-3 justify-center shadow-lg cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center gap-1.5"
                  >
                    <span>Enroll / Book Demo Class</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I want to enroll in the ${course.title} batch.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Transparency Comparison Table */}
      <section className="section-shell py-16 sm:py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Transparent Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Students Trust <span className="text-blue-400">{company.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Compare our contract-guaranteed service model, dedicated IELTS & Language Academy, and verified university admissions.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl max-w-4xl mx-auto backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0B1528] text-white font-display uppercase tracking-wider text-[0.7rem] border-b border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Key Feature</th>
                  <th className="p-4 sm:p-5 text-amber-300 font-extrabold bg-blue-900/30">
                    ★ {company.name}
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "transition-colors hover:bg-white/[0.04]",
                      row.highlight && "bg-blue-500/[0.05]",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-200 bg-blue-500/[0.08]">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.blueprint}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Global Roadmap */}
      <section className="section-shell py-16 sm:py-20 border-t border-white/10 bg-[#0A1020]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Proven 4-Step Global Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            From initial document verification at our Khilgaon office to visa grant under our 'No Visa, No Payment' contract guarantee.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-xl space-y-3 relative hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-blue-400">{step.step}</span>
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="font-display font-bold text-base text-white">{step.title}</h3>
              <p className="text-xs font-semibold text-blue-400">{step.bengaliTitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Service FAQs Accordion */}
      <section className="section-shell py-16 sm:py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Clear, transparent answers about university admissions, contract guarantees, and language academy courses.
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
                    ? "bg-white/[0.06] border-blue-400 shadow-lg ring-1 ring-blue-400/30"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-sm sm:text-base text-white"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                      isOpen ? "bg-blue-500 text-white rotate-180" : "bg-white/10 text-slate-400",
                    )}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <CtaBand />
    </div>
  );
}
