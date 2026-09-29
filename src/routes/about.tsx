import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About Us | ${company.name} — Connecting Possibilities · Japan Education & Careers`,
      },
      {
        name: "description",
        content:
          `About ${company.name} (${company.nativeName}) — Connecting Possibilities. Premier Japan higher education consultancy and Japanese language academy. Japanese Language Schools, Senmon Gakko, SSW work visas & JLPT N5/N4 coaching. Dhaka Principal Office: ${company.address.full}. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — Japan Higher Education & Language Academy`,
      },
      {
        property: "og:description",
        content:
          `Official profile of ${company.name}. Connecting Possibilities. Your trusted companion for higher education, language school admissions, and SSW careers in Japan.`,
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Japan Language School Admissions Wing",
    hub: "Mirpur-10 HQ & Japan Partner Network",
    badge: "Tokyo, Osaka & Fukuoka",
    icon: "🇯🇵",
    desc: "Direct admissions into accredited Japanese Language Schools (Nihongo Gakko), Senmon Gakko, and Universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka.",
  },
  {
    title: "OneTech Japanese Language Academy Studio",
    hub: "Gemcon EL Mercado Lift-09, Mirpur-10",
    badge: "JLPT & NAT N5/N4/N3",
    icon: "⛩️",
    desc: "Targeted Japanese language batches (N5 Beginner, N4 Elementary, N3 Intermediate) with native audio-visual equipment, Minna no Nihongo curriculum, and mock examinations.",
  },
  {
    title: "COE Approval & Nyukan Compliance Wing",
    hub: "Certified Japan Advisory Wing",
    badge: "99%+ Approval Record",
    icon: "🛡️",
    desc: "Rigorous sponsor document scrutiny, financial solvency statements, and SOP drafting meeting strict Japanese Immigration Bureau (Nyukan) criteria.",
  },
  {
    title: "SSW (Specified Skilled Worker) & Career Desk",
    hub: "Japan Technical Work Track",
    badge: "Tokutei Ginou Visas",
    icon: "💼",
    desc: "Employment placement and interview training for Caregiving, Food Service, Hospitality, and Construction tracks with accredited Japanese companies.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="ONETECH EDUCATION (ওয়ানটেক এডুকেশন)"
        subtitle="CONNECTING POSSIBILITIES. Premier consultancy for Study in Japan, Japanese Language Academy, and SSW work visas. Empowering ambitious students across Bangladesh with direct admissions, honest visa guidance, and Sensei mentorship."
        image="/banner.png"
        imageAlt="OneTech Education official banner"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8 border border-slate-200/90 shadow-lg bg-white">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-xs font-bold text-red-800 mt-1">
                  Connecting Possibilities
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Brand</dt>
                <dd className="font-bold text-slate-900 text-right">{company.name} ({company.legalName})</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Principal Office (Dhaka)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[0].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Philosophy</dt>
                <dd className="font-bold text-red-600 text-right">
                  Connecting Possibilities (পসিবিলিটিজ কানেক্ট করে ভবিষ্যৎ গড়া)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Destination</dt>
                <dd className="font-bold text-slate-800 text-right">
                  Japan 🇯🇵 (28h Legal Work, High COE Approval, N5/N4 Academy)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Academy</dt>
                <dd className="font-bold text-red-700 text-right">
                  Japanese N5, N4, N3 • Interview Prep • IELTS Academic
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-red-50/80 p-4 border border-red-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Motto:</p>
              <p className="text-xs italic text-red-950 font-bold">&quot;{company.motto}&quot;</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-orange text-red-700 bg-red-50 border border-red-200">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Connecting Bangladeshi Students with Japanese Higher Education & Career Possibilities
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              {company.name} ({company.nativeName}) জাপানে উচ্চশিক্ষা ও ক্যারিয়ার গড়ার বিশ্বস্ত প্রতিষ্ঠান। জেমকন এল মেরকাডো (৯ম তলা, শপ ১১৪), মিরপুর-১০ এ অবস্থিত আমাদের প্রধান কার্যালয় ও আধুনিক জাপানিজ ল্যাঙ্গুয়েজ স্টুডিও শিক্ষার্থীদের স্বপ্ন পূরণে প্রতিশ্রুতিবদ্ধ।
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              আমাদের জাপানিজ ল্যাঙ্গুয়েজ একাডেমিতে শিক্ষার্থীরা পাচ্ছেন মিন্না নো নিহোঙ্গো কারিকুলামে N5, N4 ও N3 লেভেলের পূর্ণাঙ্গ প্রস্তুতি, অভিজ্ঞ সেনসেইদের তত্ত্বাবধানে এম্বাসি ও স্কুল ইন্টারভিউ ড্রিল এবং শতভাগ নিখুঁত সিওই (COE) ডকুমেন্টেশন গাইডলাইন।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  সততা, স্বচ্ছতা এবং নির্ভরযোগ্য গাইডলাইনের মাধ্যমে জাপানের শীর্ষ ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয়ে ভর্তি নিশ্চিত করা এবং জাপানি ভাষায় দক্ষ জনশক্তি গড়ে তোলা।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  বাংলাদেশের সর্বাধিক নির্ভরযোগ্য জাপান এডুকেশন কনসালট্যান্সি ও ল্যাঙ্গুয়েজ একাডেমি হিসেবে প্রতিটি শিক্ষার্থীর উজ্জ্বল ও নিরাপদ ভবিষ্যৎ নিশ্চিত করা।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-red-50/70 via-slate-50 to-amber-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-red-800 mb-2">
                🌟 The Core {company.name} Pillars:
              </h4>
              <BulletList
                items={[
                  "CONNECTING POSSIBILITIES: প্রতিটি পরামর্শে সততা, আন্তরিকতা ও শিক্ষার্থীদের স্বার্থকে সর্বোচ্চ অগ্রাধিকার।",
                  "Study in Japan Flagship: টোকিও, ওসাকা, কিয়োটো, নাগোয়া ও ফুকুওকার শীর্ষ ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয়ে ভর্তি।",
                  "OneTech Japanese Academy: JLPT ও NAT-TEST N5, N4, N3 প্রস্তুতি এবং এম্বাসি ও স্কুল ইন্টারভিউ ড্রিল।",
                  "Legal 28 hrs/week Work Rights: সপ্তাহে ২৮ ঘণ্টা বৈধ পার্ট-টাইম কাজ করে টিউশন ও থাকার খরচ নির্বাহের সুযোগ।",
                  "SSW Technical Work Visas: কেয়ারগিভিং, ফুড সার্ভিস ও হসপিটালিটিতে টেকনিক্যাল ক্যারিয়ার গড়ার বিশ্বস্ত মাধ্যম।",
                  "Mirpur-10 Principal Office: জেমকন এল মেরকাডো (৯ম তলা, শপ ১১৪), মিরপুর-১০ মেট্রোরেল স্টেশনের নিকটবর্তী সুপরিসর ক্যাম্পাস।",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Presence Spotlight */}
      <section className="section-shell py-12 border-t border-slate-200">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full bg-red-500/20 text-red-300 border border-red-400/30 px-3 py-1 text-xs font-bold">
                Principal Headquarters & Academy
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Dhaka Principal Office (Mirpur-10)
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-bangla">
                জেমকন এল মেরকাডো, ৯ম তলা (শপ ১১৪), সেনপাড়া পর্বতা, মিরপুর-১০, ঢাকা-১২১৬ তে সরাসরি এসে অভিজ্ঞ সিনিয়র জাপান কনসালট্যান্টদের সাথে ফ্রি প্রোফাইল মূল্যায়ন করান।
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-red-400">📍 Principal Head Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.branches[0].address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) · {company.phones[1]}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-0.5">
                    ✉️ {company.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  {company.name}
                </h4>
                <p className="text-xs text-red-400 font-bold">
                  {company.tagline}
                </p>
                <p className="text-xs text-slate-400">
                  {company.branches[0].address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Operational Wings */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Specialized Divisions"
          title="Our Operational Divisions"
          subtitle="Dedicated wings for Japan language school admissions, language coaching studio, COE documentation audit, and SSW career matching."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-red-500 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="rounded-full bg-red-50 border border-red-200 text-red-800 text-[0.68rem] px-2.5 py-0.5 font-bold">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-red-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-red-600 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Media & Office Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Our Offices"
          title="OneTech Education Campuses"
          subtitle="Explore our Principal Headquarters and Japanese Academy studio in Mirpur-10, Dhaka, and our Tokyo Liaison Desk."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
