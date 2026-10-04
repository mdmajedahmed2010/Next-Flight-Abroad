import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${company.name}` },
      {
        name: "description",
        content: `How ${company.name} collects, protects, and handles applicant personal data for global university admissions, IELTS academy courses, and visa counseling.`,
      },
      { property: "og:title", content: `Privacy Policy | ${company.name}` },
      {
        name: "og:description",
        content: "Our commitment to protecting your personal information and student records.",
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you register with ${company.name} for overseas university admissions (South Korea, Greece, Malta, UK, USA, Canada, Australia) or enroll in our Language Academy (IELTS Academic, General Training, Spoken English, Kids English), we collect relevant personal details including your name, mobile/WhatsApp number, email address, academic certificates, mark transcripts, passport information, language test scores, and study preferences. Minimal anonymous website analytics are also collected to ensure system security and optimal performance.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `Your information is utilized solely to assess academic eligibility, issue university offer letters, process scholarship grants, prepare visa application dossiers under our 'No Visa, No Payment' contract guarantee, and manage course attendance. All advisory sessions are conducted transparently from our Central Head Office at ${company.address.full}.`,
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "We share your documents strictly with accredited partner universities, authorized testing centers (British Council, IDP), and official sovereign visa processing authorities/embassies upon your explicit instruction and consent. We NEVER sell, rent, or trade your personal data to commercial third parties, brokers, or marketers.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: `Applicant records and physical documents are protected within secure, access-controlled repositories accessible only by authorized ${company.name} compliance officers and senior counselors. Electronic transmissions are encrypted to safeguard confidentiality.`,
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request access to, correction of, or permanent deletion of your personal records at any time by contacting our data protection officer at ${company.email} or calling our official hotlines at ${company.phones.join(" / ")}.`,
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Legal & Trust"
        title="PRIVACY POLICY"
        subtitle="Last updated: October 2026"
        image="/banner.jpg"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
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
