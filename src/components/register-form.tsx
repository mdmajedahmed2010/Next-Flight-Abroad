import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "Study in Japan — Language School Admission (Tokyo, Osaka, Kyoto, Nagoya, Fukuoka)",
  "Japanese Language Course N5 (Beginner to JLPT/NAT 5Q)",
  "Japanese Language Course N4 (Elementary / SSW Eligible)",
  "Japanese Language Course N3 (Intermediate & Vocational Track)",
  "SSW (Specified Skilled Worker) Career & Technical Visa Support",
  "Japanese Embassy & School Interview Mock Preparation",
  "Global Admissions (UK 1-Yr Masters, Malaysia Dual Degree, Australia, Canada, Europe)",
  "IELTS Academic & Spoken English Fluency Batch",
];

const officeOptions = [
  "Principal Head Office (Gemcon EL Mercado, Lift-09, Shop 114, Mirpur-10, Dhaka)",
  "OneTech Japanese Academy Studio (Gemcon EL Mercado, Lift-09, Mirpur-10)",
  "Tokyo Liaison & Student Welfare Desk (Shinjuku, Tokyo, Japan)",
  "Online Consultation (WhatsApp / Zoom / Phone Call)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    destination: "Japan",
    currentStatus: "HSC / A-Level Completed (Language School & Bachelor's Aspirant)",
    office: officeOptions[0],
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      `✨ Free Consultation Request — ${company.name}`,
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Target Destination: ${form.destination}`,
      `🎓 Status/Background: ${form.currentStatus}`,
      `🏢 Preferred Office/Mode: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      `\nI would like to schedule a free counseling session with ${company.name}.`,
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
      <div className="py-10 text-center space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl shadow-inner">
          ✅
        </div>
        <h3 className="font-display text-2xl font-black text-slate-900">Appointment Requested! 🎉</h3>
        <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
          Thank you, <strong className="text-slate-900">{form.name}</strong>! Your consultation request has been registered. An expert counselor from <strong>{company.name}</strong> will contact you on{" "}
          <strong className="text-red-600">{form.phone}</strong> shortly.
        </p>
        <div className="mt-2 rounded-2xl border border-red-200 bg-red-50/50 p-4 text-xs text-slate-800 text-left space-y-1">
          <p>✔ {company.address.full}</p>
          <p>✔ Connecting Possibilities (পসিবিলিটিজ কানেক্ট করে জাপানে ভবিষ্যৎ গড়া)</p>
          <p>✔ Study in Japan: Language Schools, Senmon Gakko & Universities</p>
          <p>✔ Japanese Language Academy (N5/N4/N3) & SSW Work Visas</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs py-3 justify-center shadow-md font-bold"
          >
            💬 Open WhatsApp Chat with {company.name} Counselor
          </a>
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="btn-secondary text-xs py-2.5 justify-center"
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
      <div className="border-b border-slate-100 pb-3 mb-2">
        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-red-600">
          {company.name} ({company.taglineBangla})
        </span>
        <h3 className="font-display text-xl font-black text-slate-900">
          Book Your Free Japan Assessment & Language Evaluation
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Principal HQ: {company.address.short} · Hotlines: {company.phones[0]} / {company.phones[1]}
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
            placeholder="e.g. 01335-XXXXXX"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-service" className={label}>
            Interested Service / Course
          </label>
          <select id="reg-service" value={form.service} onChange={set("service")} className={field}>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reg-dest" className={label}>
            Preferred Country / Destination
          </label>
          <select
            id="reg-dest"
            value={form.destination}
            onChange={set("destination")}
            className={field}
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.flag} {d.name}
              </option>
            ))}
            <option value="Language Course (IELTS / Spoken / Kids)">
              🎯 Language Training Only
            </option>
            <option value="Other / Need Advice">🌍 Other / Need Advice</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-status" className={label}>
            Current Academic / Work Status
          </label>
          <select
            id="reg-status"
            value={form.currentStatus}
            onChange={set("currentStatus")}
            className={field}
          >
            <option value="HSC / A-Level Completed (Language School & Bachelor's Aspirant)">
              HSC / A-Level Completed (Language School & Bachelor's)
            </option>
            <option value="Bachelor's Graduate (Language School / Master's / Senmon Gakko)">
              Bachelor's Graduate (Master's / Senmon Gakko)
            </option>
            <option value="Diploma / Polytechnic Graduate (Japan Technical & SSW Track)">
              Diploma / Polytechnic Graduate (Japan Technical / SSW)
            </option>
            <option value="Working Professional (Japan Career / SSW / Study Gap)">
              Working Professional (Japan Career / SSW / Study Gap)
            </option>
            <option value="Student for Japanese Language Course Only (N5/N4)">
              Japanese Language Course Aspirant (N5/N4)
            </option>
            <option value="Other / Need Guidance">Other / Need Guidance</option>
          </select>
        </div>

        <div>
          <label htmlFor="reg-office" className={label}>
            Preferred Office / Meeting Mode
          </label>
          <select id="reg-office" value={form.office} onChange={set("office")} className={field}>
            {officeOptions.map((o) => (
              <option key={o} value={o}>
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
            placeholder="e.g. name@example.com"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-msg" className={label}>
            Specific Questions / Notes (Optional)
          </label>
          <textarea
            id="reg-msg"
            rows={1}
            value={form.message}
            onChange={set("message")}
            placeholder="Target intake, background, study gap details, etc."
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-xs py-3.5 mt-2 justify-center shadow-lg cursor-pointer font-bold"
      >
        <span>Book Free Appointment</span>
        <span>→</span>
      </button>

      <p className="text-center text-[0.7rem] text-slate-600">
        🔒 100% Privacy Guaranteed · {company.name} · Principal HQ: {company.address.full}
      </p>
    </form>
  );
}
