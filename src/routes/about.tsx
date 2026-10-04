import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
  IconSparkles,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About Us | ${company.name} — ${company.tagline} · Dhaka Head Office`,
      },
      {
        name: "description",
        content: `About ${company.name}: Authorized study abroad admissions (South Korea, Greece, Malta, UK, USA, Canada, Australia), 'No Visa, No Payment' contract guarantee, and premier Language Academy for IELTS Band 7.5+, Spoken English, and Kids Academy. Head Office: ${company.address.full}.`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — Gateway to Global Education ✈️`,
      },
      {
        property: "og:description",
        content: `Official profile of ${company.name}. Trusted higher education consultancy and language academy headquartered in Khilgaon, Dhaka.`,
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "South Korea & Global Admissions Wing",
    hub: "Central Counseling Desk (Khilgaon)",
    badge: "South Korea, UK, USA, Canada",
    icon: "✈️",
    desc: "Direct admissions for Kyungsung University (Busan) with 30% to 100% scholarships, alongside premier UK, USA, and Canadian university processing.",
  },
  {
    title: "European Risk-Free Pathways Wing",
    hub: "Schengen & Greece Desk",
    badge: "100% Risk-Free European Route 🇪🇺",
    icon: "🏛️",
    desc: "Greece study pathway with NO IELTS requirement and tuition payable strictly after visa issuance, granting unrestricted access across 29 Schengen countries.",
  },
  {
    title: "Language Academy (IELTS & Spoken)",
    hub: "Khilgaon Campus & Online Studio",
    badge: "Band 7.5+ Mentorship",
    icon: "🗣️",
    desc: "Certified British Council/IDP trained mentors providing rigorous preparation for IELTS Academic, General Training, and professional Spoken English fluency.",
  },
  {
    title: "Kids English & Junior Phonics Studio",
    hub: "Junior Development Center",
    badge: "Ages 5–14 Years 🧒",
    icon: "🌟",
    desc: "Phonics-based foundation, natural accent modeling, vocabulary expansion, and public speaking confidence for young learners.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Our Story & Philosophy"
        title={company.name.toUpperCase()}
        subtitle={`${company.slogan} — Your most reliable, contract-backed partner for overseas university admissions, IELTS mastery, and European pathways.`}
        image="/banner.jpg"
        imageAlt={`${company.name} official banner with world landmarks and contact information`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-white">{company.name}</h3>
                <span className="inline-block rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-0.5 text-xs font-bold text-blue-300 mt-1">
                  Authorized Study Abroad &amp; Language Academy
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <dt className="text-slate-400 font-medium">Official Brand</dt>
                <dd className="font-bold text-white text-right">{company.name}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <dt className="text-slate-400 font-medium">Head Office (Dhaka)</dt>
                <dd className="font-bold text-slate-200 text-right max-w-[260px]">
                  {company.address.full}
                </dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <dt className="text-slate-400 font-medium">Office Hours</dt>
                <dd className="font-bold text-slate-200 text-right">
                  {company.hours}
                </dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <dt className="text-slate-400 font-medium">Core Services</dt>
                <dd className="font-bold text-blue-400 text-right">
                  South Korea · Greece · UK · USA · IELTS
                </dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <dt className="text-slate-400 font-medium">Hotlines &amp; WhatsApp</dt>
                <dd className="font-bold text-emerald-400 text-right">
                  {company.phones[0]}
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-400 font-medium">Official Email</dt>
                <dd className="font-bold text-slate-200 text-right">
                  {company.email}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-blue-500/10 p-4 border border-blue-400/20">
              <p className="text-xs font-bold text-blue-300 mb-1">Official Brand Slogan:</p>
              <p className="text-xs italic text-white font-bold">&quot;{company.slogan}&quot;</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400">
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Our Vision &amp; Mission</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Guiding Your Global Academic Journey With Integrity
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 font-medium">
              {company.name} was established with a singular, unwavering mission: to provide ambitious students and professionals with transparent, contract-guaranteed guidance for overseas higher education and language mastery. Headquartered in Khilgaon, Dhaka, we take pride in delivering results without ambiguity.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 font-medium">
              Unlike ordinary consultancies that demand large non-refundable deposits upfront, {company.name} operates on a strict &quot;No Visa, No Payment&quot; policy for our contract visa facility. Our students pay consultancy service fees strictly after their visas are successfully granted.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-white">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-medium">
                  To eliminate financial risk and confusion in overseas education by delivering legally protected, transparent admissions and high-band IELTS training.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-white">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-medium">
                  To be Bangladesh&apos;s most trusted and ethical global education brand, recognized worldwide for transparency, student success, and language excellence.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-900/20 via-black/40 to-indigo-900/20 border border-white/10 p-5">
              <h4 className="font-display text-sm font-bold text-blue-400 mb-2">
                🌟 The Core {company.name} Commitments:
              </h4>
              <BulletList
                items={[
                  "Central Dhaka Head Office: 338/14, Block-C, Khilgaon, Taltola, Dhaka (Beside Ansar Head Office).",
                  "'No Visa, No Payment' Contract: Formal legal agreement where consultancy fees are due strictly post-visa.",
                  "South Korea Flagship: Kyungsung University (Busan) language and degree programs with up to 100% scholarships.",
                  "Greece Risk-Free European Pathway: 100% risk-free, NO IELTS, tuition payable strictly after visa issuance.",
                  "Certified Language Academy: IELTS Academic & General Band 7.5+ coaching and Kids English & Phonics Studio.",
                  "Honest Profile Evaluation: We never give false hopes; every profile receives genuine merit-based assessment.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Spotlight */}
      <section className="section-shell py-14 sm:py-20 border-t border-white/10 bg-[#0A1020]">
        <SectionHeading
          eyebrow="Leadership & Advisory"
          title="Dedicated Counselors & Academic Mentors"
          subtitle="Experienced study abroad strategists, language mentors, and certified visa consultants dedicated to your success."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-3xl p-7 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-2xl font-black text-blue-400">
                  NFA
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{company.name} Higher Education Desk</h3>
                  <span className="text-xs font-semibold text-blue-400">Global Admissions &amp; Visa Filing</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Comprehensive profile shortlisting, SOP drafting, financial documentation, and visa filing for South Korea, Greece, Malta, UK, USA, Canada, and Australia.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-blue-300">
              📍 Head Office: 338/14, Block-C, Khilgaon, Dhaka
            </div>
          </div>

          <div className="rounded-3xl p-7 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-2xl font-black text-indigo-400">
                  LA
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Language &amp; IELTS Academy Desk</h3>
                  <span className="text-xs font-semibold text-indigo-400">Band 7.5+ &amp; Kids English Phonics</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Certified instructors providing diagnostic mock tests, speaking interview simulations, writing review, and foundational phonics for juniors (ages 5–14).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-indigo-300">
              📍 Direct WhatsApp: {company.whatsapp}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-white/10">
        <StatsStrip />
      </section>

      {/* Operational Wings */}
      <section className="section-shell py-14 sm:py-20 border-t border-white/10 bg-[#0A1020]">
        <SectionHeading
          eyebrow="Specialized Divisions"
          title="Our Operational Divisions"
          subtitle="Comprehensive academic and consultancy wings serving undergraduate, postgraduate, research, and language learners."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="rounded-3xl p-6 flex flex-col justify-between border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] hover:border-blue-500/50 shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-3xl">{wing.icon}</span>
                  <span className="rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[0.68rem] px-2.5 py-0.5 font-bold">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-blue-400 mt-1">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Campuses & Office Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-white/10">
        <SectionHeading
          eyebrow="Our Location"
          title={`${company.name} Central Hub`}
          subtitle={`Visit our Head Office at ${company.address.full} or connect with our counselors online.`}
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </div>
  );
}
