import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name} — Gemcon EL Mercado (Lift-09), Mirpur-10, Dhaka` },
      {
        name: "description",
        content: `Contact ${company.name} (${company.taglineBangla}). Principal Head Office: ${company.address.full}. Hotlines: ${company.phones[0]}, ${company.phones[1]}. Email: ${company.email}. Near Mirpur-10 Metro Rail Station.`,
      },
      { property: "og:title", content: `Contact ${company.name} — Mirpur-10 Dhaka HQ & Tokyo Desk` },
      {
        property: "og:description",
        content: `Visit our Principal Dhaka HQ at Gemcon EL Mercado (Lift-09), Mirpur-10 for genuine Japan higher education counseling, Japanese Language Academy (N5/N4/N3), and SSW work visas.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Study in Japan — Language School Admission (Tokyo/Osaka)",
    destination: "Japan 🇯🇵",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${company.name}!\n\nI want to book a free counseling appointment from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Selected Program: ${formData.program}\n• Target Destination: ${formData.destination}\n• Query / Background: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="National & Global Contact Desks"
        title={`Connect With ${company.name}`}
        subtitle="আমাদের ঢাকা প্রধান কার্যালয় ও ল্যাঙ্গুয়েজ স্টুডিও (জেমকন এল মেরকাডো, ৯ম তলা, শপ ১১৪, সেনপাড়া পর্বতা, মিরপুর-১০, ঢাকা-১২১৬) এ সরাসরি আসুন অথবা যেকোনো প্রয়োজনে হোয়াটসঅ্যাপে যোগাযোগ করুন। Connecting Possibilities."
        image="/banner.png"
        imageAlt={`${company.name} consultation centers`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Official Office Branches Section */}
      <section className="section-shell py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-clean badge-orange text-xs">Official Office Network</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Visit Our Headquarters & Consultation Desks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Meet our certified Japan education counselors and language Senseis for transparent profile assessments and COE filing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {company.branches.map((branch) => (
            <div
              key={branch.name}
              className={`card-clean rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover-lift ${
                branch.primary
                  ? "border-red-300 bg-gradient-to-b from-red-50/40 via-white to-white shadow-md ring-1 ring-red-200"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span
                    className={`badge-clean text-[0.7rem] font-bold ${
                      branch.primary ? "badge-orange" : "badge-navy"
                    }`}
                  >
                    {branch.tag}
                  </span>
                  <span className="text-[0.7rem] font-bold text-slate-500">{branch.city}</span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {branch.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                  📍 {branch.address}
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                  <p>
                    <strong>📞 Phone:</strong>{" "}
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-slate-900 hover:text-red-600 font-semibold"
                    >
                      {branch.phone}
                    </a>
                  </p>
                  <p>
                    <strong>🕒 Hours:</strong> {branch.hours}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to visit or inquire with your ${branch.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-xs py-2.5 font-bold shadow-sm rounded-xl cursor-pointer"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-2 text-center text-xs font-semibold text-slate-700 hover:border-red-300 transition-colors"
                >
                  📞 Direct Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Interactive Form & Google Map */}
      <section className="section-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Map and Trust Pillars */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Principal Dhaka HQ Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Gemcon EL Mercado, Lift-09 (Shop 114), Mirpur-10, Dhaka
                  </p>
                </div>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-red-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title={`${company.name} Principal Head Office Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <span className="badge-clean badge-orange text-xs">{company.tagline}</span>
              <span className="text-xs text-red-400 font-bold">{company.taglineBangla}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Why Consult With {company.name}?
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Japan Flagship Pathway:</strong> 99%+ COE approval record, 28 hours/week legal part-time work rights (¥1,100–¥1,400/hr).</li>
              <li>• <strong>OneTech Japanese Academy:</strong> JLPT & NAT-TEST N5, N4, N3 interactive courses and embassy mock drills in Mirpur-10.</li>
              <li>• <strong>SSW Work Visas:</strong> Direct employment matching in Caregiving, Food Service, Hospitality, and Construction in Japan.</li>
              <li>• <strong>Tokyo Student Welfare Desk:</strong> Airport reception, resident registration, and initial part-time job assistance in Japan.</li>
              <li>• <strong>Mirpur-10 Metro Proximity:</strong> Located at Gemcon EL Mercado (Lift-09), right next to Mirpur-10 Metro Rail Station.</li>
              <li>• <strong>Transparent Guidance:</strong> Direct counselor discussion, zero hidden file-opening charges, and genuine sponsorship guidance.</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Official Page: @OneTechEducation</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-red-400 font-bold hover:underline"
              >
                Facebook Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-orange">Free 1-on-1 Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with a {company.name} senior counselor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically,
                tap below to chat directly with our senior counseling desk.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-xs py-3 px-6 shadow-md font-bold"
              >
                💬 Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tanzimul Islam"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 01345-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-colors"
                  >
                    <option value="Study in Japan — Language School Admission (Tokyo/Osaka)">🇯🇵 Japan Language School Admission</option>
                    <option value="Japanese Language Course N5 (JLPT/NAT 5Q)">⛩️ Japanese N5 Course (Beginner)</option>
                    <option value="Japanese Language Course N4 (SSW Ready)">⛩️ Japanese N4 Course (Elementary)</option>
                    <option value="Japanese Language Course N3 (Career Track)">⛩️ Japanese N3 Course (Intermediate)</option>
                    <option value="SSW (Specified Skilled Worker) Career Support">💼 SSW Japan Career & Work Visa</option>
                    <option value="Japanese Embassy & School Interview Prep">🎙️ School & Embassy Interview Drills</option>
                    <option value="UK 1-Year Masters & 2-Year PSW">🇬🇧 UK 1-Year Masters & PSW</option>
                    <option value="Malaysia Dual Degree & EMGS Visa">🇲🇾 Malaysia International Campuses</option>
                    <option value="IELTS Academic Coaching (Band 7.5+)">📖 IELTS Coaching (Band 7.5+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-colors"
                  >
                    <option value="Japan 🇯🇵">Japan 🇯🇵 (Flagship Destination)</option>
                    <option value="United Kingdom 🇬🇧">United Kingdom 🇬🇧</option>
                    <option value="Malaysia 🇲🇾">Malaysia 🇲🇾</option>
                    <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                    <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                    <option value="Finland 🇫🇮">Finland 🇫🇮</option>
                    <option value="Cyprus 🇨🇾">Cyprus 🇨🇾</option>
                    <option value="Malta 🇲🇹">Malta 🇲🇹</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Academic Background or Specific Query
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed HSC / Bachelor's in 2023. Interested in Japan April/October Intake, N5/N4 batch enrollment, or SSW Caregiving..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling · Gemcon EL Mercado (Lift-09, Shop 114), Mirpur-10, Dhaka.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
