import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${company.name}` },
      {
        name: "description",
        content: `Terms and conditions governing study abroad admissions, language academy courses, and educational consultancy services at ${company.name}.`,
      },
      { property: "og:title", content: `Terms of Use | ${company.name}` },
      {
        name: "og:description",
        content: "Terms governing foreign university admissions, IELTS courses, and contract visa guidance.",
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Higher Education & Language Services",
    body: `${company.name} provides university admission facilitation, official document evaluation, statement of purpose (SOP) guidance, embassy mock interview preparation, and Language Academy coaching (IELTS, Spoken English, Kids English). Statutory third-party charges (such as official university tuition, embassy visa application fees, medical tests, biometrics, and test registration fees) are payable directly to the respective institutions and embassies.`,
  },
  {
    title: "2. 'No Visa, No Payment' Contract Guarantee",
    body: `Under our signature Contract Visa Facility, prospective students and clients enter into a clear, legally binding agreement. Consultancy service charges are payable strictly after the visa is approved and issued. If a visa application is refused by sovereign immigration authorities, you are not charged any consultancy service fee by ${company.name}.`,
  },
  {
    title: "3. Document Authenticity & Applicant Integrity",
    body: `Applicants are solely responsible for ensuring the absolute truthfulness, validity, and authenticity of all academic certificates, mark sheets, language score reports, and financial sponsorship records presented. ${company.name} strictly maintains an ethical zero-tolerance policy against fraudulent documentation.`,
  },
  {
    title: "4. Sovereign Visa Decisions Disclaimer",
    body: `${company.name} provides exhaustive file auditing, university liaising, and embassy interview coaching. However, sovereign visa decisions and permits remain under the exclusive constitutional jurisdiction of foreign embassies, high commissions, and immigration departments.`,
  },
  {
    title: "5. Office Contact & Legal Inquiries",
    body: `For questions regarding these terms, please contact our legal desk at ${company.email}, call ${company.phones.join(" / ")}, or visit our Central Head Office at ${company.address.full}.`,
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Legal & Conditions"
        title="TERMS OF USE"
        subtitle="Last updated: October 2026"
        image="/banner.jpg"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]} />
      </PageHero>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display text-lg font-bold text-white">
                {s.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
