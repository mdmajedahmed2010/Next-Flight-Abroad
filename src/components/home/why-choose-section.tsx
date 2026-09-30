import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🎖️",
      iconBg: "bg-blue-50 text-blue-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-blue-600",
      tag: "CERTIFIED COUNSELORS",
      title: "British Council Certified",
      bengaliTitle: "ব্রিটিশ কাউন্সিল সার্টিফাইড এজেন্ট",
      desc: "Accredited educational advisors providing ethical, accurate, and direct university representation across the UK, Europe, Canada, and Australia.",
      bengaliDesc: "ব্রিটিশ কাউন্সিল কর্তৃক প্রত্যয়িত অভিজ্ঞ কাউন্সেলর দ্বারা সম্পূর্ণ সঠিক ও স্বচ্ছ গাইডলাইন।",
    },
    {
      icon: "🚫",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 0,
      suffix: " BDT",
      label: "",
      metricColor: "text-emerald-600",
      tag: "NO HIDDEN COSTS",
      title: "Zero Service Charge ❌",
      bengaliTitle: "কোনো ফাইল ওপেনিং বা সার্ভিস চার্জ নেই",
      desc: "100% free student profile assessment, document verification, university application, and visa guidance with zero service fee.",
      bengaliDesc: "ভিসার আগে বা পরে কোনো প্রকার সার্ভিস চার্জ বা ফাইল চার্জ নেওয়া হয় না। সম্পূর্ণ ফ্রি প্রসেসিং।",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      iconBg: "bg-amber-50 text-amber-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-amber-600",
      tag: "FAMILY ACCOMPANIMENT",
      title: "Fly With Dependent",
      bengaliTitle: "স্পাউস ও সন্তানসহ যুক্তরাজ্যে উচ্চশিক্ষা",
      desc: "Specialized admissions into UK Master by Research (MRes), DBA, and PhD programs allowing full-time legal work rights for spouses.",
      bengaliDesc: "এমরেস (MRes) ও পিএইচডি প্রোগ্রামে স্পাউসের ফুল-টাইম কাজের অধিকার ও সন্তানের বিনামূল্যে পড়ালেখার সুযোগ।",
    },
    {
      icon: "💷",
      iconBg: "bg-indigo-50 text-indigo-700",
      value: 5000,
      suffix: " £",
      label: "",
      metricColor: "text-indigo-600",
      tag: "MERIT & REGIONAL AWARDS",
      title: "Scholarships Up to £5,000",
      bengaliTitle: "৫০% থেকে ১০০% পর্যন্ত স্কলারশিপ সহায়তা",
      desc: "Direct tie-ups with partner UK and European universities delivering maximum tuition waivers, merit discounts, and early-bird bursaries.",
      bengaliDesc: "শীর্ষ পার্টনার বিশ্ববিদ্যালয়গুলোতে সর্বোচ্চ স্কলারশিপ নিশ্চিতকরণে আমাদের বিশেষ ড্রাইভ।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY ABROAD BLUEPRINT —"
          title="Why Choose"
          highlight="Abroad Blueprint?"
          description="Start Here, Go Anywhere! British Council Certified guidance, dual offices in Chittagong and Birmingham UK, and zero service charges from application to visa arrival."
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

