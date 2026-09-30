import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${company.name}` },
      {
        name: "description",
        content: `Terms and conditions governing study abroad admissions, language academy training, and educational advisory services at ${company.name} (${company.taglineBangla}).`,
      },
      { property: "og:title", content: `Terms of Use | ${company.name}` },
      {
        name: "og:description",
        content: "Terms governing foreign university admissions, IELTS courses, and study abroad guidance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Educational Advisory Services",
    body: `${company.name} (${company.taglineBangla}) provides specialized foreign university selection, direct application processing, scholarship facilitation, IELTS preparation, and visa guidance for the United Kingdom, Canada, USA, Australia, and Europe. Statutory third-party fees (such as official university tuition, embassy visa fees, medical exams, and test registration fees) are payable directly to the respective authorities.`,
  },
  {
    title: "2. Zero Service Charge & Free Processing Commitment",
    body: `Under our core philosophy "${company.tagline}" (${company.taglineBangla}), all student profile assessments, university application submissions, offer letter follow-ups, and visa file preparations are provided 100% free of charge with zero service charge before or after visa issuance (ভিসার আগে বা পরে কোনো সার্ভিস চার্জ নেই ❌).`,
  },
  {
    title: "3. Document Authenticity & Applicant Responsibility",
    body: `Applicants and students are solely responsible for the accuracy and authenticity of all academic certificates, marks transcripts, language scorecards, and financial documentation provided. ${company.name} adheres strictly to British Council Certified ethical counseling standards with zero tolerance for fraudulent submissions.`,
  },
  {
    title: "4. Sovereign Visa Decisions Disclaimer",
    body: `${company.name} provides expert document verification, university correspondence, and embassy interview coaching, but sovereign visa approvals remain within the exclusive legal jurisdiction of destination embassies and high commissions (e.g., UKVI).`,
  },
  {
    title: "5. Contact & Inquiries",
    body: `For questions regarding these terms, please email ${company.email}, call ${company.phones.join(" / ")}, or visit our Head Office at ${company.address.full}.`,
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Conditions"
        title="Terms of Use"
        subtitle="Last updated: September 2026"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]} />
      </PageHero>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {s.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
