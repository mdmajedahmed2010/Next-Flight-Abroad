import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name} — Head Office Chittagong & UK Branch` },
      {
        name: "description",
        content: `Contact ${company.name} (${company.taglineBangla}). Head Office: ${company.address.full}. UK Branch: ${company.branches[1].address}. Hotlines: ${company.phones.join(", ")}. Email: ${company.email}. British Council Certified Agent. 100% Free Processing & Zero Service Charge.`,
      },
      { property: "og:title", content: `Contact ${company.name} — Chittagong & Birmingham Offices` },
      {
        name: "og:description",
        content: `Visit our Chittagong Head Office at CJKS Shopping Complex (Kazir Dewri) or our UK office in Birmingham for verified study abroad counseling, UK MRes dependent admissions, and IELTS preparation.`,
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
    program: "Study in UK (Fly with Dependent / MRes)",
    destination: "United Kingdom 🇬🇧 (Flagship)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${company.name}!\n\nI want to book a free profile assessment from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Selected Program: ${formData.program}\n• Target Destination: ${formData.destination}\n• Query / Background: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="British Council Certified · Zero Service Charge"
        title={`Connect With ${company.name}`}
        subtitle="আমাদের চট্টগ্রাম প্রধান কার্যালয় (সিজেকেএস শপিং কমপ্লেক্স, ৩য় তলা, কাজীর দেউড়ী) অথবা যুক্তরাজ্যের বার্মিংহাম অফিসে সরাসরি আসুন। ভিসার আগে বা পরে কোনো সার্ভিস চার্জ নেই। শুরু করুন এখান থেকেই, পৌঁছে যান বিশ্বমঞ্চে!"
        image="/banner.jpg"
        imageAlt={`${company.name} official consultation offices in Chittagong and Birmingham`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Official Office Network Section */}
      <section className="section-shell py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-clean text-xs text-blue-700 bg-blue-50 border border-blue-200">
            Official Global Offices
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Visit Our Chittagong &amp; UK Offices
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Walk in for honest, 100% free profile evaluation, university matching, and dependent visa strategy from British Council Certified Counselors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {company.branches.map((branch) => (
            <div
              key={branch.name}
              className={`card-clean rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover-lift ${
                branch.primary
                  ? "border-blue-300 bg-gradient-to-b from-blue-50/40 via-white to-white shadow-md ring-1 ring-blue-200"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span
                    className={`badge-clean text-[0.7rem] font-bold ${
                      branch.primary ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
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
                      className="text-slate-900 hover:text-blue-600 font-semibold"
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
                  href={`https://wa.me/${(branch.primary ? company.whatsapp : branch.phone).replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to visit or inquire with your ${branch.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-xs py-2.5 font-bold shadow-sm rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white border-none flex items-center justify-center gap-1.5"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-2 text-center text-xs font-semibold text-slate-700 hover:border-blue-300 transition-colors"
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
                    Chittagong Head Office Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    4091, CJKS Shopping Complex (3rd Floor), Kazir Dewri, Chittagong
                  </p>
                </div>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title={`${company.name} Chittagong Head Office Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <span className="badge-clean bg-amber-400/20 text-amber-300 border-amber-400/30 text-xs">
                {company.tagline}
              </span>
              <span className="text-xs text-amber-300 font-bold">{company.taglineBangla}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Why Consult With {company.name}?
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>British Council Certified:</strong> Certified counselors offering verified guidance for top universities.</li>
              <li>• <strong>Zero Service Charge:</strong> No file opening charge and absolutely zero service fee before or after visa (ভিসার আগে বা পরে কোনো সার্ভিস চার্জ নেই ❌).</li>
              <li>• <strong>Fly with Dependent (UK MRes &amp; PhD):</strong> Specialists in Master by Research and Doctoral programs with full spouse work permit and free schooling for children.</li>
              <li>• <strong>Scholarships up to £5,000+:</strong> Merit scholarships with Greenwich, Derby, Anglia Ruskin Cambridge, and partner universities.</li>
              <li>• <strong>UK Branch Support:</strong> Onshore post-arrival assistance right from Birmingham, United Kingdom.</li>
              <li>• <strong>IELTS &amp; English Academy:</strong> Intensive academic preparation, Spoken English, and Kids English courses.</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Facebook: @AbroadBlueprint (18K+ Followers)</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-bold hover:underline"
              >
                Official Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean text-blue-700 bg-blue-50 border border-blue-200">
              100% Free Profile Assessment · 0 BDT Service Fee
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an {company.name} senior counselor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically,
                tap below to chat directly with our counseling team.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-xs py-3 px-6 shadow-md font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-none"
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
                  placeholder="e.g. Nobin Siddiky"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01961-532479"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  >
                    <option value="Study in UK (Fly with Dependent / MRes)">🇬🇧 Study in UK (Fly with Dependent / MRes)</option>
                    <option value="Study in UK (Standard Masters / Undergraduate)">🇬🇧 Study in UK (Undergrad / Postgrad)</option>
                    <option value="Study in Canada (SDS & Non-SDS)">🇨🇦 Study in Canada</option>
                    <option value="Study in Australia (Subclass 500)">🇦🇺 Study in Australia</option>
                    <option value="Study in USA (F1 Visa)">🇺🇸 Study in USA</option>
                    <option value="Study in Europe / Schengen">🇪🇺 Study in Europe</option>
                    <option value="IELTS Academic Preparation">🎓 IELTS Academic Preparation</option>
                    <option value="IELTS General Training">🌍 IELTS General Training</option>
                    <option value="Spoken English & Communication">🎤 Spoken English &amp; Fluency</option>
                    <option value="Kids English & Phonics">🧒 Kids English &amp; Phonics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom 🇬🇧 (Flagship)">United Kingdom 🇬🇧 (Flagship)</option>
                    <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                    <option value="United States 🇺🇸">United States 🇺🇸</option>
                    <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                    <option value="Europe / Schengen 🇪🇺">Europe / Schengen 🇪🇺</option>
                    <option value="Language Training Only">🎯 Language Training Only</option>
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
                  placeholder="e.g. Completed Bachelor's/Master's. Interested in UK MRes with spouse and child, upcoming intake, scholarships, or IELTS course..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white border-none"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 100% Free Processing · No Service Charge (ভিসার আগে বা পরে কোনো চার্জ নেই) · CJKS Complex, Kazir Dewri, Chittagong.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
