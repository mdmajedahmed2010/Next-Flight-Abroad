import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone, IconSparkles } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;

  return (
    <div className="space-y-8">
      {/* Central Hub: Dhaka Head Office & Highlights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal Office Card & Location */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-7 shadow-2xl space-y-4 flex flex-col justify-between h-full hover:border-blue-500/50 transition-colors backdrop-blur-sm">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1 text-xs font-bold text-blue-300">
                <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Head Office &amp; Central Counseling Wing</span>
              </span>
              <h4 className="font-display text-lg font-black text-white">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Visit our Central Dhaka Head Office in Khilgaon for in-person profile assessments. Discuss admissions for South Korea (Kyungsung University), Greece (100% Risk-Free European pathway), Malta, UK, USA, and enroll in our certified IELTS and Kids English Academy.
              </p>
              <div className="text-xs text-slate-300 space-y-2 border-t border-white/10 pt-3 font-medium">
                <p>
                  <strong className="text-white">📍 Location:</strong> {company.address.full}
                </p>
                <p>
                  <strong className="text-white">🕒 Hours:</strong> {principal.hours}
                </p>
                <p>
                  <strong className="text-white">📞 Primary Hotlines:</strong> {company.phones.slice(0, 3).join(" · ")}
                </p>
                <p>
                  <strong className="text-white">✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[16/9] w-full shadow-inner">
              <iframe
                src={principal.mapUrl}
                title={`${company.name} Dhaka Head Office Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I would like to visit your Dhaka Head Office in Khilgaon.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-5 shadow-lg active:scale-95 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center gap-2 cursor-pointer"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Khilgaon Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all"
              >
                <IconPhone className="w-3.5 h-3.5 text-blue-400" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Next Flight Abroad Commitments & Facilities */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0E172E] to-[#0A1020] p-6 sm:p-7 shadow-2xl space-y-4 flex flex-col justify-between h-full hover:border-blue-500/50 transition-colors backdrop-blur-md">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-bold text-blue-300">
                <span>✈️</span>
                <span>{company.slogan}</span>
              </span>
              <h4 className="font-display text-lg font-black text-white">
                Higher Education Admissions &amp; Language Academy
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {company.name} represents students with absolute accountability, offering contract-guaranteed higher education admissions and certified language mentorship.
              </p>
              <div className="text-xs text-slate-300 space-y-2 border-t border-white/10 pt-3">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2 shadow-inner">
                  <strong className="text-blue-400 block text-xs uppercase tracking-wider font-bold">Official Commitments &amp; Standards:</strong>
                  <ul className="space-y-2 text-xs text-slate-300 font-medium">
                    <li>• <strong className="text-white">&quot;No Visa, No Payment&quot;:</strong> Signed contract guarantee where consultancy service fee is due strictly post-visa.</li>
                    <li>• <strong className="text-white">South Korea Flagship:</strong> Kyungsung University (Busan) Korean language and degree admissions with 30%–100% scholarships.</li>
                    <li>• <strong className="text-white">Greece 100% Risk-Free:</strong> NO IELTS required, tuition payable strictly after visa grant, unrestricted Schengen access.</li>
                    <li>• <strong className="text-white">UK, USA, Canada, Australia:</strong> Verified CAS/I-20 issuance and rigorous embassy interview drill.</li>
                    <li>• <strong className="text-white">Language Academy:</strong> IELTS Academic &amp; General (Band 7.5+), Spoken English, and Kids Phonics Studio (ages 5–14).</li>
                    <li>• <strong className="text-white">Central Location:</strong> 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219 (Beside Ansar Head Office).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <IconSparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Advance Consultancy Service Charge</span>
              </span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 font-bold hover:underline"
              >
                Official Facebook ↗
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
