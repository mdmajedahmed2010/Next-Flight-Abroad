import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🎓",
      iconBg: "bg-sky-50 text-sky-700",
      value: 98,
      suffix: "%",
      label: "",
      metricColor: "text-sky-600",
      tag: "VERIFIED TRACK RECORD",
      title: "Global Visa Success Rate",
      bengaliTitle: "উচ্চ ভিসা সাফল্যের হার",
      desc: "Impeccable file preparation complying with UKVI, IRCC Canada, US Dept of State, and Australia Home Affairs standards.",
      bengaliDesc: "যুক্তরাজ্য, কানাডা, আমেরিকা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়ে শতভাগ নিখুঁত ফাইল প্রসেসিং।",
    },
    {
      icon: "🏆",
      iconBg: "bg-amber-50 text-amber-700",
      value: 350,
      suffix: "+",
      label: "",
      metricColor: "text-amber-600",
      tag: "BAND 7.0+ ACHIEVERS",
      title: "IELTS Band 7.0+ Excellence",
      bengaliTitle: "৩৫০+ শিক্ষার্থী ব্যান্ড ৭+ প্রাপ্ত",
      desc: "Proven track record of high scores with instant cash prize incentives and grand stage honors for high achieving candidates.",
      bengaliDesc: "আইইএলটিএস-এ ব্যান্ড ৭.০, ৭.৫ ও ৮.০ অর্জনে বিশেষ ক্যাশ রিওয়ার্ড ও মঞ্চে সংবর্ধনা প্রদান।",
    },
    {
      icon: "💻",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 30,
      suffix: "+ Seats",
      label: "",
      metricColor: "text-emerald-600",
      tag: "BEANBAZAR'S FIRST CD LAB",
      title: "Computer-Delivered IELTS Lab",
      bengaliTitle: "বিয়ানীবাজারের প্রথম সিডি আইইএলটিএস ল্যাব",
      desc: "Simulate the authentic IDP/British Council Computer-Delivered exam environment with individual workstations and noise-cancelling headphones.",
      bengaliDesc: "প্রকৃত ব্রিটিশ কাউন্সিল ও আইডিপি পরীক্ষার মতো সফটওয়্যার এবং হেডফোনসহ ফুল মক টেস্ট সুবিধা।",
    },
    {
      icon: "🤝",
      iconBg: "bg-blue-50 text-blue-700",
      value: 1500,
      suffix: "+",
      label: "",
      metricColor: "text-blue-600",
      tag: "IDP AUTHORIZED PARTNER",
      title: "Successful Alumni Network",
      bengaliTitle: "১৫০০+ সফল প্রাক্তন শিক্ষার্থী",
      desc: "Official IDP Education registration partner guiding students from Beanibazar directly to global university campuses with zero file opening fee.",
      bengaliDesc: "আইডিপি অনুমোদিত রেজিস্ট্রেশন ও মক পার্টনার হিসেবে কোনো ফাইল ওপেনিং চার্জ ছাড়াই পূর্ণাঙ্গ কাউন্সেলিং।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY MILESTONE BEANIBAZAR / MICU —"
          title="Why Choose"
          highlight="Milestone Beanibazar?"
          description="Get Ready for the World. Certified Cambridge & IDP-standard mentors, Beanibazar's only Computer-Delivered IELTS Lab, and comprehensive Study Abroad consultancy under one roof."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white hover:border-sky-500 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
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

                <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0f172a] mb-1 leading-snug group-hover:text-sky-600 transition-colors">
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
