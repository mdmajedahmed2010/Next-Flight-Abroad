import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;
  const otherBranches = company.branches.slice(1);

  return (
    <div className="space-y-8">
      {/* Central Hub: Chittagong Head Office & Highlights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal Office Card & Location */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-blue-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-800">
                <span>🏛️</span>
                <span>Head Office &amp; Counseling Wing (Chittagong)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আমাদের চট্টগ্রাম প্রধান কার্যালয়ে সরাসরি আসুন এবং ব্রিটিশ কাউন্সিল সার্টিফাইড অভিজ্ঞ কাউন্সেলরদের সাথে আলোচনা করুন। কোনো সার্ভিস চার্জ বা ফাইল ওপেনিং চার্জ ছাড়াই যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া, যুক্তরাষ্ট্র ও ইউরোপে উচ্চশিক্ষার সঠিক গাইডলাইন নিন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Location:</strong> 4091, CJKS Shopping Complex (3rd Floor), Kazir Dewri, Chittagong-4000
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {principal.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} · {company.phones[1]} (WhatsApp &amp; Calls)
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={principal.mapUrl}
                title="Abroad Blueprint Chittagong Office Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I would like to visit your Chittagong Head Office at CJKS Shopping Complex for a free profile assessment.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 shadow-sm active:scale-95 font-bold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-none flex items-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Chittagong Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold text-slate-800"
              >
                <IconPhone className="w-3.5 h-3.5 text-blue-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Abroad Blueprint Commitments & Special Wings */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-blue-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🎓</span>
                <span>British Council Certified Agency</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Study Abroad, Fly With Dependent &amp; Language Academy
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                এব্রড ব্লুপ্রিন্ট শিক্ষার্থীদের কোনো ফাইল ওপেনিং বা প্রসেসিং চার্জ ছাড়া আন্তর্জাতিক মানের শিক্ষা ও পরিবারের সকলকে সাথে নিয়ে বিশ্বমঞ্চে পদার্পণে সহায়তা করে।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0f172a] block text-xs">Official Commitments &amp; Facilities:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600 font-bangla">
                    <li>• <strong>START HERE, GO ANYWHERE!</strong> শুরু করুন এখান থেকেই, পৌঁছে যান বিশ্বমঞ্চে!</li>
                    <li>• <strong>British Council Certified Agent:</strong> #British_Council_Certified_Agent অনুমোদিত কাউন্সেলিং</li>
                    <li>• <strong>Zero Service Charge ❌:</strong> কোনো ফাইল ওপেনিং চার্জ বা প্রসেসিং ফি নেই (১০০% ফ্রি প্রসেসিং)</li>
                    <li>• <strong>Fly with Dependent 👨‍👩‍👧‍👦:</strong> UK MRes, DBA ও PhD প্রোগ্রামে স্পাউসের ফুল-টাইম কাজের অনুমতিসহ ভিসা</li>
                    <li>• <strong>Scholarships Up to £5,000 / 100%:</strong> পার্টনার বিশ্ববিদ্যালয়গুলোতে সর্বোচ্চ স্কলারশিপ নিশ্চিতকরণ</li>
                    <li>• <strong>Dual Presence:</strong> চট্টগ্রাম হেড অফিস ও ১৭ উডগেট, বার্মিংহাম ইউকে সাপোর্ট অফিস</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <strong>✨ Official Brand:</strong> {company.name} — @AbroadBlueprint
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I want to consult about UK university admissions and scholarship opportunities.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 active:scale-95 font-bold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-none flex items-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult Senior Advisor</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold text-slate-800"
              >
                <IconPhone className="w-3.5 h-3.5 text-blue-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* UK Liaison Office & Additional Desks */}
      <div className="grid gap-5 sm:grid-cols-2">
        {otherBranches.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-blue-600 uppercase tracking-wider">
                  {b.tag}
                </span>
                <span className="text-base">🇬🇧</span>
              </div>
              <h5 className="font-display text-sm font-bold text-slate-900">{b.name}</h5>
              <p className="text-xs text-slate-600 leading-snug">{b.address}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={`tel:${b.phone.replace(/[^0-9+]/g, "")}`}
                className="font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <IconPhone className="w-3 h-3 text-blue-500" />
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

