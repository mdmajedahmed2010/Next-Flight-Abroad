import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero, IconSparkles } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name} — Head Office Khilgaon, Dhaka` },
      {
        name: "description",
        content: `Contact ${company.name}. Head Office: ${company.address.full}. Hotlines: ${company.phones.join(", ")}. Email: ${company.email}. Verified Study Abroad admissions, 'No Visa, No Payment' contract guarantee, and Language Academy.`,
      },
      { property: "og:title", content: `Contact ${company.name} — Dhaka Head Office` },
      {
        name: "og:description",
        content: `Visit our Dhaka Head Office at ${company.address.full} for verified study abroad counseling, IELTS coaching, and contract-backed visa processing.`,
      },
      { property: "og:image", content: "/banner.jpg" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Study Abroad Admissions (South Korea / Europe / UK)",
    destination: "South Korea 🇰🇷",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${company.name}!\n\nI want to book an assessment from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Selected Program: ${formData.program}\n• Target Destination: ${formData.destination}\n• Background / Query: ${formData.notes || "N/A"}\n\nPlease schedule a free consultation for me under your 'No Visa, No Payment' contract guarantee.`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100">
      <PageHero
        eyebrow="Next Flight Abroad · Gateway to Global Education"
        title={`CONNECT WITH ${company.name.toUpperCase()}`}
        subtitle={`Central Head Office: ${company.address.full}. Visit our office for in-person document evaluation, university selection, IELTS coaching, and contract-backed visa filing.`}
        image="/banner.jpg"
        imageAlt={`${company.name} official consultation office in Khilgaon, Dhaka`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Official Office Network Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Authorized Consultation Center</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Visit Our Central Dhaka Head Office
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
            Located conveniently beside Ansar Head Office in Khilgaon. Meet our certified higher education counselors for transparent, contract-guaranteed guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {company.branches.map((branch) => (
            <div
              key={branch.name}
              className={`rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                branch.primary
                  ? "border-blue-500/50 bg-gradient-to-b from-blue-900/20 via-black/40 to-black/60 shadow-2xl ring-1 ring-blue-500/30"
                  : "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-xl"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span
                    className={`rounded-full px-3 py-1 text-[0.68rem] font-bold ${
                      branch.primary ? "bg-blue-600 text-white" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {branch.tag}
                  </span>
                  <span className="text-[0.7rem] font-bold text-slate-400">{branch.city}</span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-white leading-snug">
                  {branch.name}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-medium">
                  📍 {branch.address}
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-300 border-t border-white/10 pt-3">
                  <p>
                    <strong className="text-white">📞 Hotline:</strong>{" "}
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      {branch.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">🕒 Hours:</strong> {branch.hours}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to visit your ${branch.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-xs py-3 font-bold shadow-md rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center justify-center gap-1.5"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  📞 Direct Phone Call
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
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Dhaka Head Office Location
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {company.address.full}
                  </p>
                </div>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title={`${company.name} Dhaka Head Office Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1528] via-[#0E1B38] to-[#070B16] p-7 text-white shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs px-3 py-1 font-bold">
                {company.tagline}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mt-3">
              Why Consult With {company.name}?
            </h3>
            <ul className="mt-4 text-xs text-slate-300 space-y-2.5 leading-relaxed font-medium">
              <li>• <strong className="text-white">Central Head Office:</strong> 338/14, Block-C, Khilgaon, Taltola, Dhaka (Beside Ansar Head Office).</li>
              <li>• <strong className="text-white">&quot;No Visa, No Payment&quot; Contract:</strong> Our consultancy fees are strictly payable after visa issuance.</li>
              <li>• <strong className="text-white">South Korea Flagship Route:</strong> Kyungsung University (Busan) D-4-1 and D-2 with 30%–100% scholarships.</li>
              <li>• <strong className="text-white">Greece 100% Risk-Free:</strong> NO IELTS required, tuition payable strictly after visa, 29 Schengen nations.</li>
              <li>• <strong className="text-white">UK, USA, Canada, Australia:</strong> Direct university partnerships, CAS/I-20 issuance, and high-band visa success.</li>
              <li>• <strong className="text-white">Language Academy:</strong> Certified IELTS Academic & General (Band 7.5+), Spoken English, and Kids Phonics Studio.</li>
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Facebook: @nextflightabroad</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 font-bold hover:underline"
              >
                Official Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm">
          <div className="border-b border-white/10 pb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1 text-xs font-bold text-blue-400">
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Free In-Person / Online Assessment</span>
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-white">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Fill in your details to immediately connect with an expert {company.name} advisor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl text-emerald-400 border border-emerald-400/30">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. If WhatsApp did not open automatically, tap below to chat directly with our counseling team.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-xs py-3 px-6 shadow-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none"
              >
                💬 Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tanzimul Islam"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-black/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +880 1568-019270"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-black/60 transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Service / Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Study Abroad Admissions (South Korea Kyungsung University)">🇰🇷 South Korea (Kyungsung University)</option>
                    <option value="Greece 100% Risk-Free (No IELTS / Schengen)">🇬🇷 Greece 100% Risk-Free (No IELTS)</option>
                    <option value="Malta Study & Schengen Residency">🇲🇹 Malta English-Taught Degrees</option>
                    <option value="United Kingdom (UK) Undergrad & Masters">🇬🇧 United Kingdom (2-Yr PSW)</option>
                    <option value="United States (USA) F-1 Admissions">🇺🇸 United States (STEM OPT)</option>
                    <option value="Canada Study Permit & PGWP">🇨🇦 Canada (DLI & PGWP)</option>
                    <option value="Australia Admissions & Work Rights">🇦🇺 Australia (Global Top 100)</option>
                    <option value="IELTS Academic Preparation (Band 7.5+)">📘 IELTS Academic Masterclass</option>
                    <option value="IELTS General Training">📙 IELTS General Training</option>
                    <option value="Spoken English & Communication Fluency">🗣️ Spoken English Fluency</option>
                    <option value="Kids English & Junior Phonics (Ages 5-14)">🧒 Kids English &amp; Phonics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="South Korea 🇰🇷">South Korea 🇰🇷</option>
                    <option value="Greece 🇬🇷">Greece 🇬🇷 (100% Risk-Free)</option>
                    <option value="Malta 🇲🇹">Malta 🇲🇹</option>
                    <option value="United Kingdom 🇬🇧">United Kingdom 🇬🇧</option>
                    <option value="United States 🇺🇸">United States 🇺🇸</option>
                    <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                    <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                    <option value="Europe / Schengen 🇪🇺">Europe / Schengen 🇪🇺</option>
                    <option value="Language Academy Only">🎯 Language Academy Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Academic Background or Specific Query
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share your highest degree, GPA, IELTS score (or without IELTS), study gap, or preferred intake..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-black/60 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none"
                >
                  Send Inquiry to WhatsApp ({company.whatsapp}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-400 text-center pt-1">
                🔒 Guaranteed Privacy · &quot;No Visa, No Payment&quot; Contract · {company.address.full}
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
