import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;

  return (
    <div className="space-y-8">
      {/* Central Hub: Dhaka Head Office & Highlights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal Office Card & Location */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-blue-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-800">
                <span>🏛️</span>
                <span>Head Office &amp; Counseling Wing (Dhaka)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আমাদের ঢাকা প্রধান কার্যালয়ে (মগবাজার) সরাসরি আসুন এবং অভিজ্ঞ কাউন্সিলরদের সাথে আলোচনা করুন। স্টাডি অ্যাব্রড, গ্রিক সাইপ্রাস ২০২৬-এর ১৪টি ট্রেডে কাজের ভিসা, মালদ্বীপ এমপ্লয়মেন্ট এবং আইইএলটিএস ও স্পোকেন ইংলিশের সঠিক গাইডলাইন নিন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Location:</strong> {company.address.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {principal.hours}
                </p>
                <p>
                  <strong>📞 Primary Hotlines:</strong> {company.phones.slice(0, 3).join(" · ")}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
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
                  `Hello ${company.name}! I would like to visit your Dhaka Head Office at Razzak Plaza, Moghbazar.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 shadow-sm active:scale-95 font-bold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-none flex items-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Dhaka Desk</span>
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

        {/* NextFlight BD Commitments & Facilities */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-blue-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>✈️</span>
                <span>{company.taglineBangla}</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Higher Education, Global Work Permits &amp; Language Academy
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                নেক্সট ফ্লাইট ওভারসিজ আন্তরিক ও দায়িত্বশীলভাবে শিক্ষার্থীদের আন্তর্জাতিক বিশ্ববিদ্যালয় ভর্তি এবং বৈধ ওয়ার্ক পারমিটের মাধ্যমে কর্মসংস্থানে সহায়তা প্রদান করে।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0f172a] block text-xs">Official Commitments &amp; Facilities:</strong>
                  <ul className="space-y-1.5 text-[0.73rem] text-slate-600 font-bangla">
                    <li>• <strong>আপনার ভ্রমণের সাথী ✈️:</strong> সততা ও স্বচ্ছতার সাথে প্রতিটি ফাইল প্রসেসিং।</li>
                    <li>• <strong>গ্রিক সাইপ্রাস ২০২৬:</strong> ইউরোপীয় কাজের ভিসা, ১৪টি অনুমোদিত ট্রেড, বেতন ৮০০-১৫০০ ইউরো।</li>
                    <li>• <strong>মালদ্বীপ ভিসা ডেলিভারি:</strong> সরাসরি ভিডিও ও ফেসবুক ভেরিফায়েড ভিসা হ্যান্ডওভার।</li>
                    <li>• <strong>স্টাডি অ্যাব্রড উইং:</strong> যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া, যুক্তরাষ্ট্র ও ইউরোপীয় বিশ্ববিদ্যালয়।</li>
                    <li>• <strong>আইইএলটিএস ও স্পোকেন একাডেমি:</strong> একাডেমিক ও জেনারেল ট্রেনিং, ফ্লুয়েন্সি এবং কিডস ইংলিশ।</li>
                    <li>• <strong>ঢাকা হেড অফিস:</strong> রাজ্জাক প্লাজা, ৩৮৩ (লিফট-১২), মগবাজার, ঢাকা-১২১৭।</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <strong>✨ Official Brand:</strong> {company.name} — @nextflightbd26 (7.7K+ Followers)
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I want to consult about study abroad and work permit opportunities.`,
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
    </div>
  );
}
