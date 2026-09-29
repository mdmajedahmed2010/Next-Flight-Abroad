import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      iconBg: "bg-red-50 text-red-700",
      value: 99,
      suffix: "%+",
      label: "",
      metricColor: "text-red-600",
      tag: "VERIFIED TRACK RECORD",
      title: "High COE & Visa Success Rate",
      bengaliTitle: "উচ্চ সিওই (COE) ও ভিসা সাফল্যের হার",
      desc: "Bulletproof file preparation complying with Japanese Immigration Bureau (Nyukan) standards with 100% genuine documentation.",
      bengaliDesc: "জাপান ইমিগ্রেশনের কঠোর নিয়ম মেনে নির্ভুল ফাইল প্রস্তুত করে নিশ্চিত সিওই ও ভিসা সুবিধা।",
    },
    {
      icon: "⛩️",
      iconBg: "bg-amber-50 text-amber-700",
      value: 4,
      suffix: " Intakes",
      label: "",
      metricColor: "text-amber-600",
      tag: "MAJOR JAPAN INTAKES",
      title: "April, July, Oct & Jan Admissions",
      bengaliTitle: "বছরের ৪টি মেজর ইনটেকে ভর্তির সুযোগ",
      desc: "Enroll in premier Japanese language schools and universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka with prompt offer letters.",
      bengaliDesc: "টোকিও, ওসাকা, কিয়োটো ও ফুকুওকার শীর্ষ ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয়ে সরাসরি ভর্তি।",
    },
    {
      icon: "💴",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 28,
      suffix: " hrs/wk",
      label: "",
      metricColor: "text-emerald-600",
      tag: "LEGAL WORK RIGHTS",
      title: "28 Hours/Week Legal Work (Arubaito)",
      bengaliTitle: "সপ্তাহে ২৮ ঘণ্টা বৈধ পার্ট-টাইম কাজ",
      desc: "Earn ¥1,100 to ¥1,400 per hour while studying to comfortably cover living expenses and tuition fees in Japan.",
      bengaliDesc: "পড়াশোনার পাশাপাশি ঘণ্টায় ১১০০-১৪০০ ইয়েন উপার্জন করে স্বাচ্ছন্দ্যে থাকার ও টিউশন ফি পরিশোধের সুযোগ।",
    },
    {
      icon: "🎓",
      iconBg: "bg-blue-50 text-blue-700",
      value: 3,
      suffix: " Levels",
      label: "",
      metricColor: "text-blue-600",
      tag: "IN-HOUSE ACADEMY",
      title: "OneTech Japanese Academy (N5/N4/N3)",
      bengaliTitle: "জাপানিজ ল্যাঙ্গুয়েজ কোর্স ও এম্বাসি ইন্টারভিউ",
      desc: "Dedicated multimedia studio at Mirpur-10 HQ. Native audio-visual drills, JLPT/NAT-TEST coaching, and 1-on-1 interview mock drills.",
      bengaliDesc: "জেমকন এল মেরকাডো (৯ম তলা) স্টুডিওতে অভিজ্ঞ সেনসেইদের নির্দেশনায় পূর্ণাঙ্গ ভাষা ও ভাইভা প্রস্তুতি।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY ONETECH EDUCATION (ওয়ানটেক এডুকেশন) —"
          title="Why Choose"
          highlight="OneTech Education?"
          description="Connecting Possibilities. Direct discussions with expert Japan counselors, 99%+ COE approval record, and in-house Japanese language studio at Mirpur-10, Dhaka."
          tagColor="text-red-600"
          highlightColor="text-red-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white hover:border-red-600 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
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

                <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0f172a] mb-1 leading-snug group-hover:text-red-600 transition-colors">
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
