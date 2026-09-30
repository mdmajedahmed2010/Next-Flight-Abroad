import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;
  const otherBranches = company.branches.slice(1);

  return (
    <div className="space-y-8">
      {/* Central Hub: Beanibazar Main Campus & Highlights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal Campus Card & Location */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-800">
                <span>🏛️</span>
                <span>Main Campus &amp; CD IELTS Lab (Beanibazar, Sylhet)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আমাদের বিয়ানীবাজার প্রধান ক্যাম্পাসে সরাসরি এসে চিফ ইন্সট্রাক্টর সালেহ আহমদ শাহীন ও আববাবুর রহমান তাহমিদের সাথে কথা বলুন। বিশ্বমানের আইইএলটিএস প্রস্তুতি, সিডি মক টেস্ট ও যুক্তরাজ্য, কানাডা, আমেরিকা, অস্ট্রেলিয়ার ভিসা প্রসেসিং গাইডলাইন নিন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Landmark:</strong> Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet
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
                title="Milestone Beanibazar Campus Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I would like to visit your Azir Market Main Campus on College Road, Beanibazar for a free IELTS and study abroad counseling session.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 shadow-sm active:scale-95 font-bold bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none flex items-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Beanibazar Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold text-slate-800"
              >
                <IconPhone className="w-3.5 h-3.5 text-sky-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Milestone Education Commitments & Special Wings */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/30 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-900">
                <span>🎓</span>
                <span>Study Abroad &amp; Language Academy Hub</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                IELTS Academic, Computer-Delivered Lab &amp; Global Admissions
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                মাইলস্টোন বিয়ানীবাজার সিলেট অঞ্চলের শিক্ষার্থীদের আন্তর্জাতিক মানসম্মত ভাষা শিক্ষা ও সম্পূর্ণ ফাইল ওপেনিং চার্জ ছাড়া বিশ্বমঞ্চে পদার্পণে সহায়তা করে।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0f172a] block text-xs">Official Commitments &amp; Facilities:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600 font-bangla">
                    <li>• <strong>GET READY FOR THE WORLD:</strong> বিয়ানীবাজারের শ্রেষ্ঠ বিদ্যাপীঠে বিশ্বজয়ের প্রস্তুতি</li>
                    <li>• <strong>IDP Education Partner:</strong> আইডিপি অনুমোদিত অফিসিয়াল এক্সাম রেজিস্ট্রেশন ও মক পার্টনার</li>
                    <li>• <strong>Beanibazar&apos;s 1st CD IELTS Lab:</strong> ৩০+ আসনের সম্পূর্ণ এয়ার-কন্ডিশন্ড কম্পিউটার ল্যাব ও রিয়েল সফটওয়্যার</li>
                    <li>• <strong>Band 7.0+ Cash Prizes:</strong> আইইএলটিএস ব্যান্ড ৭+ অর্জনে ক্যাশ রিওয়ার্ড ও গ্র্যান্ড সেলিব্রেশন</li>
                    <li>• <strong>Speakers&apos; Mania:</strong> স্পোকেন ইংলিশ শিক্ষার্থীদের জন্য সাপ্তাহিক ফ্লুয়েন্সি ও প্রেজেন্টেশন স্টেজ</li>
                    <li>• <strong>Milestone Junior:</strong> শিশুদের জন্য আধুনিক ফনিক্স, স্পোকেন ও কিডস ইংলিশ একাডেমি</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <strong>✨ Official Brand:</strong> &quot;{company.tagline}&quot; — @milestonebeanibazar
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I want to consult about IELTS course batches and UK university admissions.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 active:scale-95 font-bold bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white border-none flex items-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult Senior Advisor</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95 font-semibold text-slate-800"
              >
                <IconPhone className="w-3.5 h-3.5 text-sky-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Annex Campus & Additional Desks */}
      <div className="grid gap-5 sm:grid-cols-2">
        {otherBranches.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-sky-600 uppercase tracking-wider">
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
                className="font-bold text-slate-800 hover:text-sky-600 transition-colors flex items-center gap-1"
              >
                <IconPhone className="w-3 h-3 text-sky-500" />
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
