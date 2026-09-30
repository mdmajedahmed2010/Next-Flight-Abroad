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
        title: `About Us | ${company.name} — Start Here, Go Anywhere! · Chittagong & UK`,
      },
      {
        name: "description",
        content:
          `About ${company.name} (${company.nativeName}) — Start Here, Go Anywhere! British Council Certified Agent offering 100% free study abroad processing (No Service Charge ❌) for the UK, Canada, Australia, USA, and Europe. Specialized in Fly with Dependent (MRes & PhD), IELTS, Spoken English, and Kids English. Head Office: 4091, CJKS Shopping Complex (3rd Floor), Kazir Dewri, Chittagong. UK Office: 17, Woodgate, Birmingham. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — British Council Certified Study Abroad & Language Academy`,
      },
      {
        property: "og:description",
        content:
          `Official profile of ${company.name}. Start Here, Go Anywhere! 100% Free Processing, British Council Certified counseling, and dual presence in Chittagong, Bangladesh and Birmingham, UK.`,
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global Study Abroad Admissions Wing",
    hub: "Chittagong Head Office & Birmingham Liaison Desk",
    badge: "UK, Canada, Australia, USA & Europe",
    icon: "✈️",
    desc: "Direct admissions into accredited global universities across the UK, Canada, Australia, USA, and Europe with zero service charges and no file opening fee.",
  },
  {
    title: "Fly With Dependent & Research Wing",
    hub: "Specialized UK MRes, DBA & PhD Center",
    badge: "Spouse Legal Work Rights 👨‍👩‍👧‍👦",
    icon: "🎓",
    desc: "Dedicated guidance for Master by Research (MRes) and PhD programs in the UK allowing students to fly with their spouse and children with full-time employment rights.",
  },
  {
    title: "Language Academy (IELTS & Spoken)",
    hub: "Chittagong Campus & Online Zoom Studio",
    badge: "British Council Certified Standard",
    icon: "🗣️",
    desc: "Comprehensive preparation for IELTS Academic & General Training, Spoken English professional communication, and PTE Academic by certified trainers.",
  },
  {
    title: "Kids English & Phonics Academy",
    hub: "Early Childhood English Studio",
    badge: "Ages 5–12 Phonics & Fluency",
    icon: "🧒",
    desc: "Engaging, phonics-based English foundation programs designed to build clear pronunciation, vocabulary, and natural spoken confidence for school students.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="ABROAD BLUEPRINT"
        subtitle="START HERE, GO ANYWHERE! 🌍 British Council Certified educational agency with dual offices in Chittagong, Bangladesh and Birmingham, UK. 100% free profile evaluation, zero service charge, and specialized Fly with Dependent pathways."
        image="/assets/abroad-blueprint-banner.jpg"
        imageAlt="Abroad Blueprint official banner with world landmarks and contact information"
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
                <dt className="text-slate-500 font-medium">Head Office (Chittagong)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[0].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">UK Liaison Office</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[1].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Accreditation</dt>
                <dd className="font-bold text-blue-700 text-right">
                  British Council Certified Agent
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Processing Fee Policy</dt>
                <dd className="font-bold text-emerald-700 text-right">
                  0 BDT Service Fee · No File Opening Charge ❌
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines &amp; WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
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
              Guiding Bangladeshi Students &amp; Families to the Global Stage
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              {company.name} ({company.nativeName}) বাংলাদেশের শিক্ষার্থীদের জন্য আন্তর্জাতিক মানের উচ্চশিক্ষা, স্কলারশিপ ও ভিসা নিশ্চিতকরণে একটি নির্ভরযোগ্য ও ব্রিটিশ কাউন্সিল সার্টিফাইড প্রতিষ্ঠান। চট্টগ্রামের কাজীর দেউড়ির সিজেকেএস শপিং কমপ্লেক্স (৩য় তলা) এবং যুক্তরাজ্যের বার্মিংহামে অবস্থিত আমাদের অফিসের মাধ্যমে শিক্ষার্থীদের ভর্তির শুরু থেকে যুক্তরাজ্যে পৌঁছানো পর্যন্ত পূর্ণাঙ্গ সহায়তা প্রদান করা হয়।
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              আমরা শিক্ষার্থীদের কোনো সার্ভিস চার্জ বা ফাইল ওপেনিং চার্জ ছাড়াই ১০০% ফ্রি প্রসেসিং সেবা প্রদান করি। বিশেষ করে যুক্তরাজ্যের Master by Research (MRes) এবং PhD প্রোগ্রামে স্পাউস ও সন্তানদের সাথে নিয়ে ফুল-টাইম কাজের সুযোগসহ উচ্চশিক্ষার পথ উন্মোচন আমাদের অন্যতম বিশেষত্ব।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  কোনো লুকানো খরচ বা সার্ভিস চার্জ ছাড়া শতভাগ স্বচ্ছতার সাথে শিক্ষার্থীদের জন্য শীর্ষ বিশ্ববিদ্যালয় ভর্তি, সর্বোচ্চ স্কলারশিপ এবং সঠিক ভিসা গাইডলাইন নিশ্চিত করা।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  বাংলাদেশ ও যুক্তরাজ্যে সর্বোচ্চ আস্থাভাজন শিক্ষা পরামর্শক হিসেবে শিক্ষার্থীদের বিশ্বমঞ্চে নেতৃত্ব দেওয়ার যোগ্য করে তোলা—&quot;Start Here, Go Anywhere!&quot;
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-blue-900 mb-2">
                🌟 The Core {company.name} Commitments:
              </h4>
              <BulletList
                items={[
                  "Zero Service Charge ❌: ভিসার আগে বা পরে কোনো প্রকার সার্ভিস চার্জ বা ফাইল চার্জ নেওয়া হয় না।",
                  "British Council Certified Agent: ব্রিটিশ কাউন্সিল প্রত্যয়িত আন্তর্জাতিক মানের পেশাদার কাউন্সেলিং।",
                  "Fly With Dependent 👨‍👩‍👧‍👦: MRes ও PhD প্রোগ্রামে স্পাউসের ফুল-টাইম ওয়ার্ক রাইটসসহ সম্পূর্ণ ফাইল প্রসেসিং।",
                  "Scholarships Up to £5,000 / 100%: শীর্ষ পার্টনার বিশ্ববিদ্যালয়গুলোতে সর্বোচ্চ স্কলারশিপ নিশ্চিতকরণ।",
                  "Dual Global Presence: চট্টগ্রাম হেড অফিস ও ১৭ উডগেট, বার্মিংহাম অন-শোর সাপোর্ট অফিস।",
                  "Language Academy: IELTS (Academic/General), Spoken English এবং Kids English কোর্স।",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Spotlight */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Leadership & Accreditation"
          title="Certified Educational Advisors"
          subtitle="Experienced British Council Certified counselors and study abroad specialists dedicated to your academic journey."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center text-2xl font-black text-blue-700">
                  AB
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Abroad Blueprint Counseling Desk</h3>
                  <span className="text-xs font-semibold text-blue-600">British Council Certified Counselors</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়গুলোতে শিক্ষার্থীদের সরাসরি আবেদন, অফার লেটার, ক্যাশ (CAS) ও ভিসা প্রসেসিংয়ে সার্বক্ষণিক সহায়তা।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-700">
              📍 Head Office: CJKS Shopping Complex, Kazir Dewri, Chittagong
            </div>
          </div>

          <div className="card-clean rounded-3xl p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-2xl font-black text-indigo-700">
                  UK
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">UK On-Shore Support Desk</h3>
                  <span className="text-xs font-semibold text-indigo-600">Birmingham Liaison &amp; Student Welfare</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                যুক্তরাজ্যে পৌঁছানোর পর শিক্ষার্থীদের বিমানবন্দর অভ্যর্থনা পরামর্শ, আবাসন ব্যবস্থা এবং ডিপেন্ডেন্ট স্পাউস গাইডলাইনে সরাসরি সহায়তা।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-indigo-700">
              📍 UK Office: 17, Woodgate, Birmingham, United Kingdom
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
          title="Abroad Blueprint Offices"
          subtitle="Visit our Chittagong Head Office at CJKS Shopping Complex, Kazir Dewri or connect with our UK liaison desk in Birmingham."
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
