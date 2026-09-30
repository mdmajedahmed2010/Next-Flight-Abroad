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
        title: `About Us | ${company.name} — Get Ready For The World · Beanibazar, Sylhet`,
      },
      {
        name: "description",
        content:
          `About ${company.name} (${company.nativeName}) — Get Ready For The World. Beanibazar's premier Study Abroad consultancy and language academy. IELTS Academic, Beanibazar's first Computer-Delivered (CD) Mock Lab, Spoken English, and UK, Canada, USA, Australia admissions. Led by Saleh Ahmed Shaheen and Ahbabur Rahman Tahmid. Campuses: Azir Market & Somobay Market, College Road, Beanibazar, Sylhet. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — Study Abroad Consultancy & IELTS Language Academy`,
      },
      {
        property: "og:description",
        content:
          `Official profile of ${company.name}. Get Ready For The World. Your trusted partner for foreign university admissions, IELTS Band 7+ prep, and language fluency in Beanibazar, Sylhet.`,
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global Study Abroad Admissions Wing",
    hub: "Azir Market Main Campus & Global Partner Network",
    badge: "UK, Canada, USA, Australia & Europe",
    icon: "✈️",
    desc: "Direct admissions into top-ranked universities in the UK (with or without IELTS depending on academic background), Canada, USA, Australia, and Schengen European nations with zero file opening fee.",
  },
  {
    title: "Milestone IELTS Academy & CD Mock Lab",
    hub: "Beanibazar's 1st Computer-Delivered Lab (Azir Market 2nd Fl.)",
    badge: "IDP Authorized Partner",
    icon: "💻",
    desc: "State-of-the-art 30+ seat computer lab with authentic IDP software simulation, individual headphones, Cambridge 11-19 syllabus, and cash rewards for Band 7.0+ achievers.",
  },
  {
    title: "Spoken English & 'Speakers' Mania' Studio",
    hub: "Fluency & Stage Presentation Stage",
    badge: "Weekly Contests & Trophies",
    icon: "🎤",
    desc: "Overcome hesitation with weekly stage speech contests, situational role-plays, native pronunciation drills, and corporate presentation confidence.",
  },
  {
    title: "Milestone Junior Kids English Academy",
    hub: "Azir Market & Somobay Market Campuses",
    badge: "Ages 5–12 Phonics & Fluency",
    icon: "🧒",
    desc: "Fun, engaging, phonics-based English foundation courses for school students to build accent-free bilingual fluency from early childhood.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="MILESTONE BEANIBAZAR / MICU"
        subtitle="GET READY FOR THE WORLD. Beanibazar's most trusted Study Abroad consultancy and language academy. Empowering students across Beanibazar and Greater Sylhet with certified Cambridge mentors, Beanibazar's first Computer-Delivered IELTS Lab, and zero-fee profile assessment."
        image="/milestone-celebration.jpg"
        imageAlt="Milestone Beanibazar grand celebration gathering with 3D MILESTONE sculpture"
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
                <span className="inline-block rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-xs font-bold text-sky-800 mt-1">
                  Get Ready For The World
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Brand</dt>
                <dd className="font-bold text-slate-900 text-right">{company.name} ({company.legalName})</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Main Campus (Beanibazar)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[0].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Annex Campus (Beanibazar)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[1].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Leadership</dt>
                <dd className="font-bold text-sky-700 text-right">
                  Saleh Ahmed Shaheen &amp; Ahbabur Rahman Tahmid
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Speciality</dt>
                <dd className="font-bold text-slate-800 text-right">
                  IELTS Academic/General · Beanibazar&apos;s 1st CD Lab · Study in UK, Canada, USA
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines &amp; WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-sky-50/80 p-4 border border-sky-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Brand Slogan:</p>
              <p className="text-xs italic text-sky-950 font-bold">&quot;{company.motto}&quot;</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean text-sky-700 bg-sky-50 border border-sky-200">Our Vision &amp; Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transforming Students of Beanibazar &amp; Sylhet into Confident Global Scholars
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              {company.name} ({company.nativeName}) সিলেট অঞ্চলের শিক্ষার্থীদের বিশ্বমানের উচ্চশিক্ষা ও আন্তর্জাতিক ভাষা দক্ষতা নিশ্চিত করার অগ্রদূত। বিয়ানীবাজারের প্রাণকেন্দ্র ইনার কলেজ রোডের আজির মার্কেট (২য় তলা) ও সমবায় মার্কেট (২য় তলা) ক্যাম্পাসে অবস্থিত আমাদের ল্যাব ও একাডেমি শত শত শিক্ষার্থীর স্বপ্নের ভিত্তি তৈরি করেছে।
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              আমাদের আধুনিক কম্পিউটার-ডেলিভার্ড (CD) আইইএলটিএস ল্যাব, সাপ্তাহিক স্পিকার্স ম্যানিয়া স্টেজ বিতর্ক ও প্রেজেন্টেশন এবং কেমব্রিজ-প্রশিক্ষিত শিক্ষকদের আন্তরিক দিকনির্দেশনায় শিক্ষার্থীরা আইইএলটিএস-এ কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করছেন।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  শতভাগ সততা ও স্বচ্ছতার সাথে শিক্ষার্থীদের সঠিক বিশ্ববিদ্যালয় নির্বাচন, ভিসা প্রসেসিং ও ব্রিটিশ কাউন্সিলের আন্তর্জাতিক মানে আইইএলটিএস প্রশিক্ষণ দেওয়া।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  বিয়ানীবাজার ও সিলেটের সর্বাধিক নির্ভরযোগ্য স্টাডি অ্যাব্রড প্রতিষ্ঠান হিসেবে প্রতিটি শিক্ষার্থীকে বিশ্ব নাগরিক হিসেবে গড়ে তোলা।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-sky-50/70 via-slate-50 to-emerald-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-sky-800 mb-2">
                🌟 The Core {company.name} Pillars:
              </h4>
              <BulletList
                items={[
                  "GET READY FOR THE WORLD: কোনো ফাইল ওপেনিং চার্জ ছাড়া সম্পূর্ণ ফ্রি বিশ্ববিদ্যালয় মূল্যায়ন।",
                  "Beanibazar's First CD Lab: ৩০+ কম্পিউটারের আধুনিক ল্যাব ও ফুল লেন্থ রিয়েল টেস্ট সফটওয়্যার।",
                  "IDP Authorized Partner: আইডিএলটিএস অফিসিয়াল এক্সাম রেজিস্ট্রেশন ও ভেন্যু সাপোর্ট।",
                  "Band 7.0+ Cash Rewards: কৃতি শিক্ষার্থীদের নগদ অর্থ পুরস্কার ও গ্র্যান্ড সংবর্ধনা প্রদান।",
                  "Speakers' Mania Fluency: স্পোকেন ইংলিশের জন্য সাপ্তাহিক স্টেজ ও মাইক প্রেজেন্টেশন সেশন।",
                  "Beanibazar Campuses: আজির মার্কেট ও সমবায় মার্কেট, কলেজ রোডে সুপরিসর ক্যাম্পাস।",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Spotlight */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Leadership & Mentors"
          title="Meet Our Senior Instructors"
          subtitle="Experienced educators and study abroad consultants dedicated to your success in Beanibazar."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sky-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-2xl font-black text-sky-700">
                  SS
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Saleh Ahmed Shaheen</h3>
                  <span className="text-xs font-semibold text-sky-600">CEO &amp; Senior Consultant</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                সিলেট অঞ্চলের স্টাডি অ্যাব্রড সেক্টরে দীর্ঘদিনের অভিজ্ঞতা সম্পন্ন। যুক্তরাজ্য, কানাডা, আমেরিকা ও অস্ট্রেলিয়ার বিশ্ববিদ্যালয় ভর্তি এবং ভিসা প্রক্রিয়া পরিচালনায় অগ্রগণ্য।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-sky-700">
              📍 Azir Market Main Campus, Beanibazar
            </div>
          </div>

          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sky-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-2xl font-black text-emerald-700">
                  AT
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Ahbabur Rahman Tahmid</h3>
                  <span className="text-xs font-semibold text-emerald-600">Chief Instructor &amp; Writing Specialist</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আইইএলটিএস রাইটিং ও রিডিংয়ের বিশেষজ্ঞ মেন্টর। শত শত শিক্ষার্থীকে ব্যান্ড ৭.০+ অর্জনে প্রশিক্ষণ দিয়েছেন এবং শিক্ষার্থীদের মাঝে দারুণ জনপ্রিয়।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700">
              📍 CD IELTS Lab &amp; Academy Studio, Beanibazar
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
          subtitle="Comprehensive academic and consultancy wings serving undergraduate, postgraduate, and language learners."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[0.68rem] px-2.5 py-0.5 font-bold">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-sky-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-600 hover:underline flex items-center justify-center gap-1.5"
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
          eyebrow="Our Campuses"
          title="Milestone Beanibazar Campuses"
          subtitle="Explore our Main Campus & CD IELTS Lab at Azir Market and Admissions Annex at Somobay Market, College Road, Beanibazar, Sylhet."
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
