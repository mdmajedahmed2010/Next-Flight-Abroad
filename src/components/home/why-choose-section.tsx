import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🇪🇺",
      iconBg: "bg-blue-50 text-blue-700",
      value: 14,
      suffix: " Trades",
      label: "",
      metricColor: "text-blue-600",
      tag: "EUROPEAN WORK PERMIT",
      title: "Greek Cyprus Work Permit 2026",
      bengaliTitle: "গ্রিক সাইপ্রাস স্কিলড ওয়ার্ক পারমিট",
      desc: "Legal European work permits across 14 trade categories: Electricians, Mechanics, Welders, Drivers, Kitchen Helpers, Chefs, and Masons.",
      bengaliDesc: "১৪টি ট্রেডে ৩–৪ মাসে ইউরোপীয় ইউনিয়নের অনুমোদিত বৈধ ওয়ার্ক পারমিট ভিসা প্রসেসিং।",
    },
    {
      icon: "✈️",
      iconBg: "bg-sky-50 text-sky-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-sky-600",
      tag: "GLOBAL TRAVEL PARTNER",
      title: "Air Ticketing & Travel",
      bengaliTitle: "আপনার বিশ্বস্ত ভ্রমণের সাথী",
      desc: "Worldwide international air ticketing, best corporate airfares, fast travel booking, and tourist visit visa facilitation.",
      bengaliDesc: "সেরা মূল্যে যেকোনো রুটের বিমান টিকিট, ট্রাভেল ইনস্যুরেন্স ও ভিজিট ভিসা সাপোর্ট।",
    },
    {
      icon: "🇲🇻",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-emerald-600",
      tag: "VERIFIED HANDOVER",
      title: "Maldives & Global Jobs",
      bengaliTitle: "মালদ্বীপ ও গ্লোবাল ভিসা হ্যান্ডওভার",
      desc: "Genuine employment visas with verified employers in the Maldives, Mongolia, and the Middle East with in-office passport handover.",
      bengaliDesc: "রিসোর্ট ও টেকনিক্যাল জবে ভিসা অনুমোদন ও ঢাকা হেড অফিসে সরাসরি পাসপোর্ট-টিকেট হস্তান্তর।",
    },
    {
      icon: "🗣️",
      iconBg: "bg-amber-50 text-amber-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-amber-600",
      tag: "LANGUAGE & STUDY WINGS",
      title: "IELTS & Language Academy",
      bengaliTitle: "নেক্সট ফ্লাইট ল্যাঙ্গুয়েজ একাডেমি",
      desc: "IELTS Academic & GT, Spoken English Fluency, and Kids English & Phonics Studio (Ages 5-14) at our Moghbazar Dhaka campus & online.",
      bengaliDesc: "আইইএলটিএস, সাবলীল স্পোকেন ইংলিশ ও শিশুদের ফোনিক্স শেখার বিশ্বমানের ট্রেইনিং।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag={`— WHY ${company.name.toUpperCase()} —`}
          title="Why Choose"
          highlight={`${company.name}?`}
          description="আপনার ভ্রমণের সাথী ✈️! Dedicated guidance for Study Abroad, Greek Cyprus Work Permits 2026, and Language Academy with genuine counselors at our Dhaka Moghbazar Head Office."
          tagColor="text-blue-600"
          highlightColor="text-blue-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                {/* Animated Big Metric */}
                <div className="mb-1.5">
                  <span className={`text-3xl sm:text-4xl font-black font-display ${f.metricColor}`}>
                    <CountUp target={f.value} suffix={f.suffix} />
                  </span>
                </div>

                <span className="inline-block rounded-full bg-slate-200/70 px-3 py-0.5 text-[0.65rem] font-black uppercase tracking-wider text-slate-700 mb-3">
                  {f.tag}
                </span>

                <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0f172a] mb-1 leading-snug group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>

                <p className="text-[0.72rem] text-slate-500 font-bangla font-semibold mb-3">
                  {f.bengaliTitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-2">
                  {f.desc}
                </p>

                <p className="text-[0.68rem] text-slate-400 font-bangla font-medium leading-normal mt-auto pt-2 border-t border-slate-200/60 w-full">
                  {f.bengaliDesc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

