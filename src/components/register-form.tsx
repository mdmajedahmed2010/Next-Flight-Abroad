import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconSparkles } from "@/components/ui-blocks";

const field =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all hover:border-white/30 focus:border-blue-500 focus:bg-black/60 focus:ring-2 focus:ring-blue-500/20";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400";

const serviceOptions = [
  "South Korea (Kyungsung University, Busan) Dec/March Intakes",
  "Greece 100% Risk-Free (No IELTS / Tuition After Visa)",
  "Malta English-Taught Degrees & Schengen Access",
  "United Kingdom (UK) Admissions & 2-Yr PSW",
  "United States (USA) Admissions & STEM OPT",
  "Canada Study Permit (DLI & PGWP)",
  "Australia Admissions & Extended Work Rights",
  "Contract Visa Facility ('No Visa, No Payment')",
  "IELTS Academic Masterclass (Target Band 7.5+)",
  "IELTS General Training (Work & Migration)",
  "Spoken English & Communication Fluency",
  "Kids English & Junior Phonics (Ages 5-14)",
  "Free Profile Assessment & Career Counseling",
];

const officeOptions = [
  "Dhaka Head Office (338/14, Block-C, Khilgaon, Taltola, Dhaka-1219)",
  "Online Consultation (WhatsApp Video / Zoom / Direct Hotline Call)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    destination: "South Korea",
    currentStatus: "HSC / A-Level Completed (Bachelor's Abroad Aspirant)",
    office: officeOptions[0],
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      `✨ Free Profile Assessment Request — ${company.name}`,
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Target Destination: ${form.destination}`,
      `🎓 Academic Status: ${form.currentStatus}`,
      `🏢 Preferred Counseling Mode: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      `\nI want to schedule a free assessment with ${company.name} under the 'No Visa, No Payment' contract guarantee.`,
    ].filter(Boolean);
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 text-4xl shadow-inner border border-blue-400/30">
          ✅
        </div>
        <h3 className="font-display text-2xl font-black text-white">Assessment Requested! 🎉</h3>
        <p className="mx-auto max-w-md text-sm text-slate-300 leading-relaxed font-medium">
          Thank you, <strong className="text-white">{form.name}</strong>! Your consultation request has been registered. An expert counselor from <strong>{company.name}</strong> will contact you on{" "}
          <strong className="text-blue-400">{form.phone}</strong> shortly.
        </p>
        <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300 text-left space-y-1.5">
          <p>✔ <strong>Central Head Office:</strong> {company.address.full}</p>
          <p>✔ <strong>Brand Philosophy:</strong> &quot;{company.slogan}&quot;</p>
          <p>✔ <strong>Contract Visa Guarantee:</strong> No Visa, No Payment</p>
          <p>✔ <strong>Flagship Pathways:</strong> South Korea (Kyungsung University) &amp; Greece (100% Risk-Free)</p>
          <p>✔ <strong>Language Academy:</strong> IELTS Band 7.5+, Spoken English &amp; Kids Academy</p>
        </div>
        <div className="pt-3 flex flex-col gap-2.5">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs py-3.5 justify-center shadow-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center gap-2"
          >
            💬 Open WhatsApp Chat with {company.name}
          </a>
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="border-b border-white/10 pb-4 mb-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-0.5 text-[0.68rem] font-bold text-blue-400 mb-1.5">
          <IconSparkles className="w-3 h-3 text-blue-400" />
          <span>{company.name} · {company.tagline}</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-black text-white">
          Book Your Free Assessment &amp; Consultation
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Khilgaon Head Office: 338/14, Block-C, Khilgaon, Dhaka · Hotlines: {company.phones[0]} / {company.phones[1]}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-name" className={label}>
            Full Name *
          </label>
          <input
            id="reg-name"
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Tanzimul Islam"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-phone" className={label}>
            Mobile / WhatsApp Number *
          </label>
          <input
            id="reg-phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="e.g. +880 1568-019270"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-service" className={label}>
            Interested Service / Program
          </label>
          <select id="reg-service" value={form.service} onChange={set("service")} className={field}>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="bg-slate-900 text-white">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reg-dest" className={label}>
            Target Destination
          </label>
          <select
            id="reg-dest"
            value={form.destination}
            onChange={set("destination")}
            className={field}
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.name} className="bg-slate-900 text-white">
                {d.flag} {d.name}
              </option>
            ))}
            <option value="Language Course (IELTS / Spoken / Kids)" className="bg-slate-900 text-white">
              🎯 Language Academy Only (Khilgaon / Online)
            </option>
            <option value="Other / Need Advice" className="bg-slate-900 text-white">
              🌍 Other / General Consultation
            </option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-status" className={label}>
            Current Academic / Professional Status
          </label>
          <select
            id="reg-status"
            value={form.currentStatus}
            onChange={set("currentStatus")}
            className={field}
          >
            <option value="HSC / A-Level Completed (Bachelor's Abroad Aspirant)" className="bg-slate-900 text-white">
              HSC / A-Level Completed (Bachelor&apos;s Abroad)
            </option>
            <option value="Bachelor's / Master's Graduate (Post-Grad Aspirant)" className="bg-slate-900 text-white">
              Bachelor&apos;s / Master&apos;s Graduate (Post-Grad)
            </option>
            <option value="Seeking 100% Risk-Free European Pathway (Greece / Malta)" className="bg-slate-900 text-white">
              Seeking 100% Risk-Free European Pathway
            </option>
            <option value="IELTS Candidate (Band 7.5+ Target)" className="bg-slate-900 text-white">
              IELTS Candidate (Band 7.5+ Target)
            </option>
            <option value="Spoken English Professional Learner" className="bg-slate-900 text-white">
              Spoken English Professional Learner
            </option>
            <option value="Parent for Kids English & Phonics" className="bg-slate-900 text-white">
              Parent for Kids English &amp; Phonics
            </option>
            <option value="Other / Need Counseling" className="bg-slate-900 text-white">
              Other / Need Counseling
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="reg-office" className={label}>
            Preferred Meeting Mode
          </label>
          <select id="reg-office" value={form.office} onChange={set("office")} className={field}>
            {officeOptions.map((o) => (
              <option key={o} value={o} className="bg-slate-900 text-white">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-email" className={label}>
            Email Address (Optional)
          </label>
          <input
            id="reg-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="e.g. student@gmail.com"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-msg" className={label}>
            Academic Background / Notes (Optional)
          </label>
          <textarea
            id="reg-msg"
            rows={1}
            value={form.message}
            onChange={set("message")}
            placeholder="Target intake, study gap, current GPA or IELTS score..."
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-xs sm:text-sm py-3.5 mt-2 justify-center shadow-xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center gap-2"
      >
        <span>Submit Assessment Request (0 BDT Advance Fee)</span>
        <span>→</span>
      </button>

      <p className="text-center text-[0.7rem] text-slate-400">
        🔒 100% Privacy Guaranteed · &quot;No Visa, No Payment&quot; Contract · {company.address.full}
      </p>
    </form>
  );
}
