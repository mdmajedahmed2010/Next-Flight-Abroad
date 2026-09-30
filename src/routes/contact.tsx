import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name} — Azir Market & College Road, Beanibazar, Sylhet` },
      {
        name: "description",
        content: `Contact ${company.name} (${company.taglineBangla}). Main Campus: ${company.address.full}. Annex Campus: Somobay Market (2nd Floor), College Road, Beanibazar. Hotlines: ${company.phones[0]}, ${company.phones[1]}. Email: ${company.email}.`,
      },
      { property: "og:title", content: `Contact ${company.name} — Beanibazar Campuses & CD IELTS Lab` },
      {
        property: "og:description",
        content: `Visit our Beanibazar Campuses at Azir Market & Somobay Market, College Road for genuine Study Abroad counseling, IELTS Academy, CD Mock Lab, and Spoken English.`,
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
    program: "IELTS Academic Preparation (Band 7.0 - 8.5)",
    destination: "United Kingdom 🇬🇧",
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
        eyebrow="Beanibazar Campus Desks & Support"
        title={`Connect With ${company.name}`}
        subtitle="আমাদের বিয়ানীবাজার প্রধান ক্যাম্পাস ও সিডি আইইএলটিএস ল্যাব (আজির মার্কেট, ২য় তলা, ১ নং গলি, ইনার কলেজ রোড, বিয়ানীবাজার, সিলেট) এ সরাসরি আসুন অথবা যেকোনো প্রয়োজনে সরাসরি কল বা হোয়াটসঅ্যাপে যোগাযোগ করুন। Get Ready For The World."
        image="/milestone-celebration.jpg"
        imageAlt={`${company.name} consultation centers in Beanibazar`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Official Office Branches Section */}
      <section className="section-shell py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-clean text-xs text-sky-700 bg-sky-50 border border-sky-200">Official Campus Network</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Visit Our Beanibazar Campuses &amp; CD Lab
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Meet Chief Instructor Saleh Ahmed Shaheen, Ahbabur Rahman Tahmid, and our senior advisors for transparent profile evaluations and IELTS mock testing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {company.branches.map((branch) => (
            <div
              key={branch.name}
              className={`card-clean rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover-lift ${
                branch.primary
                  ? "border-sky-300 bg-gradient-to-b from-sky-50/40 via-white to-white shadow-md ring-1 ring-sky-200"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span
                    className={`badge-clean text-[0.7rem] font-bold ${
                      branch.primary ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700"
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
                      className="text-slate-900 hover:text-sky-600 font-semibold"
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
                  className="btn-primary w-full text-center text-xs py-2.5 font-bold shadow-sm rounded-xl cursor-pointer bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none flex items-center justify-center gap-1.5"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-2 text-center text-xs font-semibold text-slate-700 hover:border-sky-300 transition-colors"
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
                    Beanibazar Main Campus Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet
                  </p>
                </div>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title={`${company.name} Beanibazar Campus Map`}
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
              <span className="badge-clean bg-sky-500/20 text-sky-300 border-sky-400/30 text-xs">{company.tagline}</span>
              <span className="text-xs text-emerald-400 font-bold">{company.taglineBangla}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Why Consult With {company.name}?
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Sylhet &amp; UK Flagship:</strong> Direct admission into top UK universities with or without IELTS based on qualifications.</li>
              <li>• <strong>Beanibazar&apos;s 1st CD IELTS Lab:</strong> 30+ seat computer lab with authentic IDP software simulation and individual noise-cancelling headsets.</li>
              <li>• <strong>Band 7.0+ Cash Rewards:</strong> Cash prize incentives and grand stage honors for high-achieving IELTS students.</li>
              <li>• <strong>Speakers&apos; Mania:</strong> Weekly fluency contests and presentation drills for Spoken English learners.</li>
              <li>• <strong>Prime College Road Location:</strong> Walking distance from Beanibazar Government College and major landmarks.</li>
              <li>• <strong>Strict Zero-Fee Policy:</strong> No file opening charges before university assessment and admission evaluation.</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Official Page: @milestonebeanibazar</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 font-bold hover:underline"
              >
                Facebook Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean text-sky-700 bg-sky-50 border border-sky-200">Free 1-on-1 Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with a {company.name} senior counselor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-3xl text-sky-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically,
                tap below to chat directly with our Beanibazar counseling desk.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-xs py-3 px-6 shadow-md font-bold bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-none"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-600 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01781-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-600 focus:bg-white transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  >
                    <option value="IELTS Academic Preparation (Band 7.0 - 8.5)">🎓 IELTS Academic Preparation</option>
                    <option value="Computer-Delivered (CD) IELTS Mock Test Lab">💻 CD IELTS Mock Test Lab</option>
                    <option value="IELTS General Training (Work & Migration)">🌍 IELTS General Training</option>
                    <option value="Spoken English & Fluency (Speakers' Mania)">🎤 Spoken English &amp; Fluency</option>
                    <option value="Milestone Junior (Kids English & Phonics)">🧒 Milestone Junior (Kids English)</option>
                    <option value="IELTS Life Skills A1/B1 (UK Spouse Visa)">🇬🇧 IELTS Life Skills A1 / B1</option>
                    <option value="Study in UK Admissions (Undergraduate/Masters)">🇬🇧 Study in UK Admissions</option>
                    <option value="Study in Canada, USA & Australia">✈️ Canada, USA &amp; Australia Admissions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom 🇬🇧">United Kingdom 🇬🇧 (Flagship)</option>
                    <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                    <option value="United States 🇺🇸">United States 🇺🇸</option>
                    <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                    <option value="Europe / Schengen 🇪🇺">Europe / Schengen 🇪🇺</option>
                    <option value="Language Training Only (Beanibazar Campus)">🎯 Language Training Only</option>
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
                  placeholder="e.g. Completed HSC / Bachelor's. Interested in UK upcoming intake, IELTS mock test slots, or Spoken English batch..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling · Azir Market (2nd Floor), Inner College Road, Beanibazar, Sylhet.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
