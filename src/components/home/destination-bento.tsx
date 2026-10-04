import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function DestinationBento() {
  const { open } = useRegisterModal();

  const uk = destinations.find((d: any) => d.slug === "uk") || destinations[0]!;
  const canada = destinations.find((d: any) => d.slug === "canada") || destinations[1]!;

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 lg:py-32 text-slate-900 overflow-hidden">
      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-900"
            >
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Global Pathways · Work Permits, Study Abroad &amp; Travel</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Featured Global <span className="text-blue-600">Pathways &amp; Opportunities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-bangla"
            >
              আপনার বিশ্বস্ত ভ্রমণের ও ক্যারিয়ারের সাথী! {company.name} প্রদান করে গ্রিক সাইপ্রাস ১৪ ট্রেড ওয়ার্ক পারমিট, মঙ্গোলিয়া ও মালদ্বীপ এমপ্লয়মেন্ট, গ্লোবাল স্টাডি অ্যাডমিশন এবং ওয়ার্ল্ডওয়াইড এয়ার টিকেটিং সেবা।
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95"
            >
              <span>Explore All Destinations</span>
              <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Bento Card 1: GREEK CYPRUS (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#0B1528] via-[#0F2B48] to-slate-950 p-1.5 sm:p-2 border border-blue-500/30 shadow-xl text-white flex flex-col justify-between hover:border-blue-400 hover:shadow-2xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#0F2B48] to-[#0A1424] p-5 sm:p-8 lg:p-9 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇨🇾</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-3xl font-black text-white font-bangla">
                        গ্রীক সাইপ্রাস (Greek Cyprus - EU)
                      </h3>
                      <span className="rounded-full bg-amber-400 text-slate-950 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Urgent 2026 Quota
                      </span>
                    </div>
                    <span className="text-xs text-sky-300 font-semibold block mt-0.5 font-bangla">
                      ১৪টি ট্রেডে ইউরোপিয়ান স্কিলড ওয়ার্ক পারমিট · দ্রুত ৩–৪ মাসে প্রসেসিং
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30">
                  বৈধ ইউরোপীয় কন্ট্রাক্ট 🇪🇺
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium font-bangla">
                ইউরোপীয় ইউনিয়নের আওতাধীন গ্রীক সাইপ্রাসে ১৪টি নির্ধারিত ট্রেডে সরকারি অনুমোদিত কর্মী নিয়োগ চলছে। কিচেন হেল্পার, শেফ, ড্রাইভার, অটো মেকানিক, ইলেকট্রিশিয়ান, ওয়েল্ডার, প্লাম্বার ও টাইলস ম্যাসন পদে আবেদন করুন। কোম্পানি কর্তৃক থাকা, খাওয়া ও মেডিকেল ইনস্যুরেন্স সুবিধা।
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-bangla">মাসিক বেতন:</span>
                  <strong className="text-blue-300 font-bold text-xs">€৮০০–€১,৫০০ ইউরো</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-bangla">প্রসেসিং টাইম:</span>
                  <strong className="text-amber-300 font-bold text-xs">৩–৪ মাস (দ্রুত)</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-bangla">অন্যান্য সুবিধা:</span>
                  <strong className="text-emerald-300 font-bold text-xs">থাকা, খাওয়া ও চিকিৎসা</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-bangla">ইন্টারভিউ:</span>
                  <strong className="text-white font-bold text-xs font-bangla">ঢাকা অফিসে সরাসরি</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-3">
                <button
                  type="button"
                  onClick={open}
                  className="btn-primary text-xs py-3 px-6 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white border-none cursor-pointer"
                >
                  <span>সাইপ্রাস ভিসার জন্য আবেদন করুন</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I want to apply for the Greek Cyprus 14 Trade Work Permit 2026 quota.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>হোয়াটসঅ্যাপে জানুন</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: MONGOLIA (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-white p-1.5 sm:p-2 border border-slate-200 shadow-md flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-slate-50 to-white p-5 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇲🇳</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 font-bangla">
                      মঙ্গোলিয়া (Mongolia)
                    </h3>
                    <span className="text-xs text-blue-600 font-bold block font-bangla">
                      রিচ স্ট্যাকার ক্রেন ড্রাইভার · আধুনিক গ্রীনহাউজ কর্মী
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold font-bangla">
                  $800–$900 USD
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium font-bangla">
                মঙ্গোলিয়ায় আধুনিক ভেজিটেবল গ্রীনহাউজ গার্ডেনিং এবং কনটেইনার হ্যান্ডলিং ক্রেন ড্রাইভার ও রিচ স্ট্যাকার অপারেটর পদে সরকারি অনুমোদিত নিয়োগ। কোম্পানির খরচে উন্নত আবাসন ও খাবার প্রদান।
              </p>

              <div className="space-y-2 rounded-2xl bg-slate-100/80 p-3.5 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium font-bangla">মাসিক বেতন:</span>
                  <strong className="text-slate-900">$800 – $900 USD (প্রায় ১ লাখ+ টাকা)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium font-bangla">কাজের ধরন:</span>
                  <strong className="text-blue-700">ক্রেন ড্রাইভার / গ্রীনহাউজ ফার্মিং</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium font-bangla">থাকা ও খাওয়া:</span>
                  <strong className="text-emerald-700">কোম্পানি কর্তৃক সম্পূর্ণ ফ্রি</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium font-bangla">প্রসেসিং:</span>
                  <strong className="text-slate-900 font-bangla">১০০% বৈধ সরকারি চুক্তি</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={open}
                  className="btn-primary w-full text-center text-xs py-3 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white border-none cursor-pointer"
                >
                  <span>মঙ্গোলিয়া ভিসার তথ্য নিন</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I want to apply for the Mongolia Crane Driver / Greenhouse job quota.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-center text-xs font-bold text-slate-800 hover:border-blue-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: MALDIVES (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇲🇻</span>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold font-bangla">
                  সরাসরি পাসপোর্ট হ্যান্ডওভার
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 font-bangla">
                মালদ্বীপ (Maldives Work Visa)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium font-bangla">
                জনপ্রিয় রিসোর্ট ও হোটেল স্টাফ এবং গ্রাফিক ডিজাইনার পদে মালদ্বীপে চাকরির ভিসা। ঢাকা মগবাজার হেড অফিসে সরাসরি পাসপোর্ট ও বিমান টিকিট হস্তান্তর।
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100 font-bangla">
                <p>• <strong>বেতন:</strong> $500 – $700 USD / মাস</p>
                <p>• <strong>সুবিধা:</strong> থাকা-খাওয়া ও মেডিকেল ফ্রি</p>
                <p>• <strong>হ্যান্ডওভার:</strong> সরাসরি হেড অফিসে হস্তান্তর</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={open}
                className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between cursor-pointer"
              >
                <span>মালদ্বীপ ভিসা তথ্য দেখুন</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>

          {/* Bento Card 4: STUDY ABROAD (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl">🎓 🇪🇺 🇬🇧 🇨🇦</span>
                <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold font-bangla">
                  উচ্চশিক্ষা ভর্তি
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 font-bangla">
                বিদেশে উচ্চশিক্ষা (Study Abroad)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium font-bangla">
                সাইপ্রাস, জার্মানি, মাল্টা, যুক্তরাজ্য, কানাডা ও ইউরোপের নামিদামি বিশ্ববিদ্যালয়ে ব্যাচেলরস ও মাস্টার্স কোর্সে সরাসরি অফার লেটার ও ভিসা সাপোর্ট।
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100 font-bangla">
                <p>• <strong>দেশসমূহ:</strong> সাইপ্রাস, ইউরোপ, ইউকে, কানাডা</p>
                <p>• <strong>সুবিধা:</strong> ক্রেডিট ট্রান্সফার ও পার্ট-টাইম কাজ</p>
                <p>• <strong>কাউন্সেলিং:</strong> শতভাগ ফ্রি প্রোফাইল মূল্যায়ন</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/destinations"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between"
              >
                <span>সব স্টাডি ডেস্টিনেশন দেখুন</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 5: AIR TICKETING & TRAVEL (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">✈️ 🌍</span>
                <span className="rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 text-[10px] font-bold font-bangla">
                  আপনার ভ্রমণের সাথী
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 font-bangla">
                এয়ার টিকেটিং ও ভ্রমণ সেবা
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium font-bangla">
                দেশ-বিদেশের যেকোনো রুটের অভ্যন্তরীণ ও আন্তর্জাতিক সাশ্রয়ী বিমান টিকিট বুকিং, ট্রাভেল ইনস্যুরেন্স এবং ট্যুরিস্ট ও ভিজিট ভিসা প্রসেসিং সেবা।
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100 font-bangla">
                <p>• <strong>এয়ার টিকেট:</strong> সেরা ডিসকাউন্টে তাৎক্ষণিক টিকিট</p>
                <p>• <strong>ভিসা:</strong> ট্যুরিস্ট ও ফ্যামিলি ভিজিট ভিসা</p>
                <p>• <strong>সাপোর্ট:</strong> সার্বক্ষণিক নির্ভরযোগ্য সেবা</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I need information about air ticket booking and travel services.`)}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between"
              >
                <span>টিকেট বুকিং হেল্পডেস্ক</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

