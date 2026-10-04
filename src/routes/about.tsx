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
        title: `About Us | ${company.name} — ${company.tagline} · ঢাকা হেড অফিস`,
      },
      {
        name: "description",
        content: `About ${company.name} (${company.nativeName}) — ${company.taglineBangla}। স্টাডি অ্যাব্রড, আইইএলটিএস, স্পোকেন ইংলিশ, কিডস ইংলিশ এবং গ্রিক সাইপ্রাস ও মালদ্বীপ কাজের ভিসা কাউন্সেলিং। প্রধান কার্যালয়: ${company.address.full}। হটলাইন: ${company.phones.join(", ")}।`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — আপনার ভ্রমণের সাথী ✈️`,
      },
      {
        property: "og:description",
        content: `Official profile of ${company.name} (নেক্সট ফ্লাইট ওভারসিজ)। বিশ্বস্ত স্টাডি অ্যাব্রড, আইইএলটিএস এবং ইউরোপীয় ওয়ার্ক পারমিট কাউন্সেলিং সেন্টার। হেড অফিস: রাজ্জাক প্লাজা, মগবাজার, ঢাকা।`,
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global Higher Education Wing",
    hub: "ঢাকা হেড অফিস (মগবাজার)",
    badge: "UK, Canada, Europe, USA",
    icon: "✈️",
    desc: "যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়গুলোতে অ্যাডমিশন ও পূর্ণাঙ্গ ভিসা প্রসেসিং সেবা।",
  },
  {
    title: "European Work Permit 2026 Wing",
    hub: "গ্রিক সাইপ্রাস ও ইউরোপিয়ান ডেস্ক",
    badge: "১৪ ট্রেড কাজের সুযোগ 🇪🇺",
    icon: "🏗️",
    desc: "গ্রিক সাইপ্রাস ২০২৬ ওয়ার্ক পারমিটে ১৪টি ট্রেডে দক্ষ ও সাধারণ কর্মীদের জন্য দ্রুত ৩-৪ মাসের ভিসা প্রসেসিং।",
  },
  {
    title: "Language Academy (IELTS & Spoken)",
    hub: "ঢাকা ক্যাম্পাস ও অনলাইন স্টুডিও",
    badge: "IELTS 7.5+ & Spoken Fluency",
    icon: "🗣️",
    desc: "অভিজ্ঞ ট্রেইনারদের পরিচালনায় IELTS Academic, General Training এবং প্রফেশনাল Spoken English কোর্স।",
  },
  {
    title: "Kids English & Phonics Studio",
    hub: "শিশু-কিশোর স্পেশাল ব্যাচ",
    badge: "বয়স ৫–১৪ বছর 🧒",
    icon: "🌟",
    desc: "ফোনিক্স বেসড কিডস ইংলিশ, নির্ভুল উচ্চারণ ও ছোটবেলা থেকেই কনফিডেন্ট স্পিকিং স্কিল ডেভেলপমেন্ট।",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title={company.name}
        subtitle={`${company.taglineBangla} ✈️ স্টাডি অ্যাব্রড, আইইএলটিএস, স্পোকেন ইংলিশ এবং ইউরোপীয় কাজের ভিসা কাউন্সেলিংয়ে আপনার সবচেয়ে বিশ্বস্ত ও নির্ভরযোগ্য সঙ্গী।`}
        image="/assets/nextflight-banner.jpg"
        imageAlt={`${company.name} official banner with world landmarks and contact information`}
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
                <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-xs font-bold text-blue-800 mt-1">
                  British Council Certified Agent
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Brand</dt>
                <dd className="font-bold text-slate-900 text-right">{company.name}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Head Office (Dhaka)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.address.full}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Office Hours</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[0].hours}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Services</dt>
                <dd className="font-bold text-blue-700 text-right">
                  Study Abroad · IELTS · Greek Cyprus Work Permit 2026
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Contact</dt>
                <dd className="font-bold text-emerald-700 text-right">
                  {company.phones.slice(0, 2).join(" · ")}
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Official Email</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.email}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-blue-50/80 p-4 border border-blue-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Brand Slogan:</p>
              <p className="text-xs italic text-blue-950 font-bold">&quot;{company.slogan}&quot; — {company.taglineBangla}</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean text-blue-700 bg-blue-50 border border-blue-200">Our Vision &amp; Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              ভ্রমণ ও ক্যারিয়ারে আপনার নির্ভরযোগ্য পথপ্রদর্শক
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              {company.name} ({company.nativeName}) শিক্ষার্থীদের জন্য আন্তর্জাতিক মানের উচ্চশিক্ষা, বিশ্বস্ত ভিসা প্রসেসিং, আইইএলটিএস ও স্পোকেন ইংলিশ ট্রেনিং এবং ইউরোপীয় ওয়ার্ক পারমিটের এক নির্ভরযোগ্য ঠিকানা। রাজধানী ঢাকার মগবাজারস্থ রাজ্জাক প্লাজা (লিফট-১২)-এ আমাদের প্রধান কার্যালয় থেকে প্রতিদিন বহু শিক্ষার্থী ও বিদেশযাত্রী সঠিক দিকনির্দেশনা গ্রহণ করছেন।
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              আমরা সম্পূর্ণ স্বচ্ছ প্রক্রিয়ায় স্টাডি অ্যাব্রড, গ্রিক সাইপ্রাস ২০২৬-এর ১৪টি ট্রেডে কাজের ভিসা, মালদ্বীপ সহ মধ্যপ্রাচ্য ও ইউরোপের অনুমোদিত ভিসা প্রসেসিং করে থাকি। সাথে রয়েছে আইইএলটিএস, স্পোকেন ইংলিশ এবং বাচ্চাদের জন্য কিডস ইংলিশের বিশেষ ব্যাচ।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  সঠিক তথ্য ও নির্ভরযোগ্য প্রসেসিংয়ের মাধ্যমে প্রতিটি শিক্ষার্থী এবং কর্মপ্রত্যাশীর বিদেশযাত্রাকে নিরাপদ, স্বচ্ছ ও সফল করা।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  বাংলাদেশের অন্যতম শীর্ষস্থানীয় গ্লোবাল এডুকেশন ও ওভারসিজ সলিউশন ব্র্যান্ড হিসেবে নিজেকে প্রতিষ্ঠিত রাখা—&quot;আপনার ভ্রমণের সাথী ✈️&quot;।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-blue-900 mb-2">
                🌟 The Core {company.name} Commitments:
              </h4>
              <BulletList
                items={[
                  "সরাসরি মগবাজার ঢাকা হেড অফিস: মুখোমুখি কাউন্সিলিং এবং নির্ভুল ফাইল যাচাই।",
                  "গ্রিক সাইপ্রাস ২০২৬ ওয়ার্ক পারমিট: ইউরোপীয় কান্ট্রিতে ১৪টি ক্যাটাগরিতে কাজ ও থাকার সুবিধা।",
                  "স্টাডি অ্যাব্রড সলিউশন: ইউকে, কানাডা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ ইউনিভার্সিটিতে ভর্তির সুযোগ।",
                  "আইইএলটিএস ও স্পোকেন একাডেমি: অভিজ্ঞ ট্রেইনারের পরিচালনায় অফলাইন ও অনলাইন স্পেশাল ব্যাচ।",
                  "কিডস ইংলিশ ও ফোনিক্স স্টুডিও: ছোটবেলা থেকেই শিশুদের শুদ্ধ উচ্চারণ ও ফ্লুয়েন্ট কমিউনিকেশন।",
                  "স্বচ্ছ ও আন্তরিক সেবা: প্রতিটি ফাইল আন্তরিকতা ও শতভাগ দায়িত্বশীলতার সাথে প্রসেস করা হয়।",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Spotlight */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Leadership & Advisory"
          title="Dedicated Counselors & Advisors"
          subtitle="Experienced study abroad specialists, language mentors, and overseas employment advisors dedicated to your global journey."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center text-2xl font-black text-blue-700">
                  NF
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{company.name} Counseling Desk</h3>
                  <span className="text-xs font-semibold text-blue-600">Higher Education &amp; Admissions</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                যুক্তরাজ্য, কানাডা, যুক্তরাষ্ট্র ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়গুলোতে শিক্ষার্থীদের সরাসরি আবেদন, অফার লেটার ও ভিসা প্রসেসিংয়ে সার্বক্ষণিক সহায়তা।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-700">
              📍 Head Office: Razzak Plaza, 383 (Lift-12), Moghbazar, Dhaka
            </div>
          </div>

          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-2xl font-black text-indigo-700">
                  WP
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Overseas Work Permit Desk</h3>
                  <span className="text-xs font-semibold text-indigo-600">Greek Cyprus 2026 &amp; Global Permits</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                গ্রিক সাইপ্রাস ২০২৬-এর ১৪টি ট্রেডে অনুমোদিত কাজের ভিসা, মালদ্বীপ ও মধ্যপ্রাচ্যে বৈধ কর্মসংস্থান প্রক্রিয়ায় স্বচ্ছ ও নির্ভরযোগ্য গাইডলাইন।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-indigo-700">
              📍 Direct WhatsApp: {company.whatsapp}
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
          subtitle="Comprehensive academic and consultancy wings serving undergraduate, postgraduate, research, and language learners."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[0.68rem] px-2.5 py-0.5 font-bold">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-blue-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Campuses & Office Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Our Locations"
          title={`${company.name} Center`}
          subtitle={`Visit our Head Office at ${company.address.full} or connect with our counselors online.`}
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
