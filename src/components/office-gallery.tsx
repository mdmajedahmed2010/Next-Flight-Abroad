import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;
  const otherBranches = company.branches.slice(1);

  return (
    <div className="space-y-8">
      {/* Central Hub: Dhaka Principal HQ & Map */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal HQ Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-red-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-800">
                <span>🏢</span>
                <span>Principal Head Office (Mirpur-10, Dhaka)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আমাদের মিরপুর-১০ প্রধান কার্যালয়ে সরাসরি এসে অভিজ্ঞ সিনিয়র জাপান কনসালট্যান্টদের সাথে বসুন। জাপানের শীর্ষ ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয় ভর্তি, সিওই (COE) ও জাপানিজ ভাষা কোর্সের সঠিক দিকনির্দেশনা গ্রহণ করুন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Landmark:</strong> Gemcon EL Mercado (Lift-09, Shop 114), Near Mirpur-10 Metro Rail Station
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {principal.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} · {company.phones[1]} (WhatsApp & Calls)
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={principal.mapUrl}
                title="OneTech Education Principal HQ Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I would like to visit your Mirpur-10 Principal Office (Gemcon EL Mercado) for a free Japan counseling session.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 shadow-sm active:scale-95 font-bold"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Mirpur Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* OneTech Education Special Wings & Core Commitments */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50/30 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-red-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 border border-red-200 px-3 py-1 text-xs font-bold text-red-900">
                <span>⛩️</span>
                <span>Japan Higher Education & Career Advisory</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Japanese Language Academy, COE Filing & SSW Career Hub
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                ওয়ানটেক এডুকেশন জাপানে উচ্চশিক্ষা ও ক্যারিয়ার গড়ার প্রতিটি ধাপে শিক্ষার্থীদের সর্বোচ্চ সততা ও আন্তরিকতার সাথে সহযোগিতা করে।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0f172a] block text-xs">Official Commitments & Pillars:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600 font-bangla">
                    <li>• <strong>CONNECTING POSSIBILITIES:</strong> জাপানে নিশ্চিত ভবিষ্যৎ নির্মাণে সততাই আমাদের অঙ্গীকার</li>
                    <li>• <strong>Study in JAPAN (Flagship):</strong> টোকিও, ওসাকা, কিয়োটো ও ফুকুওকার শীর্ষ ল্যাঙ্গুয়েজ স্কুলে ভর্তি</li>
                    <li>• <strong>Japanese Language Academy:</strong> JLPT ও NAT-TEST N5, N4 ও N3 স্পেশাল অডিও-ভিজ্যুয়াল ব্যাচ</li>
                    <li>• <strong>Legal 28 hrs/week Work Rights:</strong> পড়াশোনার পাশাপাশি বৈধ পার্ট-টাইম কাজ (ঘণ্টায় ¥১,১০০–¥১,৪০০)</li>
                    <li>• <strong>SSW Work Visas:</strong> কেয়ারগিভিং, ফুড সার্ভিস ও হসপিটালিটিতে টেকনিক্যাল ক্যারিয়ার গড়ার সুযোগ</li>
                    <li>• <strong>Tokyo Post-Arrival Welfare Desk:</strong> জাপানে পৌঁছার পর এয়ারপোর্ট পিকআপ, ব্যাংক ও পার্ট-টাইম কাজ সহায়তা</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <strong>✨ Official Slogan:</strong> &quot;{company.tagline}&quot; — @OneTechEducation
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I want to consult about Japanese Language School admission and N5/N4 courses.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 active:scale-95 font-bold"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult Senior Japan Counselor</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Other Regional & Global Desks Strip */}
      <div className="grid gap-5 sm:grid-cols-2">
        {otherBranches.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-red-600 uppercase tracking-wider">
                  {b.tag}
                </span>
                <span className="text-base">📍</span>
              </div>
              <h5 className="font-display text-sm font-bold text-slate-900">{b.name}</h5>
              <p className="text-xs text-slate-600 leading-snug">{b.address}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={`tel:${b.phone.replace(/[^0-9+]/g, "")}`}
                className="font-bold text-slate-800 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <IconPhone className="w-3 h-3 text-red-500" />
                <span>{b.phone}</span>
              </a>
              <span className="text-[0.68rem] text-slate-400">{b.hours}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
